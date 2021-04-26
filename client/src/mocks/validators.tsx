/* MOCKED EXTERNAL LIBRARY, DO NOT MODIFY */

import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import { isImageOrMediaDownload } from "./fetchBlob";

type ValidateArgs = { src: string; isOffline: boolean };

const Validator: React.FC<{
  msg: string;
  src: string;
  validate(a: ValidateArgs): null;
}> = ({ msg, src, validate }) => {
  const { isOffline } = useContext(AppContext);
  const [error, setError] = useState<null | Error>(null);
  const [displaySrc, setDisplaySrc] = useState("");

  useEffect(() => {
    try {
      validate({ src, isOffline });
      setError(null);
      if (src.startsWith("file://")) {
        const localSrc = src.replace(new RegExp("^file://"), "");
        const downloadedItem = JSON.parse(localStorage.getItem(localSrc) || "");
        if (isImageOrMediaDownload(downloadedItem)) {
          setDisplaySrc(downloadedItem.originalSource);
        }
      } else {
        setDisplaySrc(src);
      }
    } catch (e) {
      console.error(e, src);
      setError(e);
      setDisplaySrc("");
    }
  }, [src, validate, isOffline]);

  return (
    <div>
      <span style={{ paddingRight: 5 }}>{error ? "❌" : "✅"}</span>
      <span>{msg}</span>

      {!error && (displaySrc.endsWith(".jpg") || displaySrc.endsWith(".png")) && (
        <div style={{ display: "flex", marginLeft: 50 }}>
          <div>
            <img src={displaySrc} style={{ height: "100px" }} />
          </div>
          <p style={{ padding: 10, overflowWrap: "anywhere" }}> {src} </p>
        </div>
      )}

      {!error && displaySrc.endsWith(".mp4") && (
        <ul>
          <li>{src}</li>
        </ul>
      )}

      {error && (
        <ul>
          <li style={{ background: "red", padding: 10, color: "white" }}>
            <span>{error.message}</span>
          </li>
        </ul>
      )}
    </div>
  );
};

const isFileSystemResource = (src: string) => {
  const msg = `When accessing a local image, the path must prefixed with "file://". Invalid path: ${src}`;
  if (!src.startsWith("file://")) throw new Error(msg);
};
const isHttpResource = (src: string) => {
  const msg = `This resource was expected to be HTTP while online: ${src}`;
  if (!src.startsWith("http")) throw new Error(msg);
};
const isNotHttpResource = (src: string) => {
  const msg = `This HTTP resource is not available offline: ${src}`;
  if (src.startsWith("http")) throw new Error(msg);
};
const exists = (src: string) => {
  const exists = !!localStorage.getItem(src);
  if (!exists) throw new Error(`This resource does not exist: ${src}`);
};
const wasSavedByFetchBlob = (src: string) => {
  const msg = `This image or media was not downloaded using "fetchBlob" : ${src}`;
  const savedItem = JSON.parse(localStorage.getItem(src) || "");
  if (!isImageOrMediaDownload(savedItem)) throw new Error(msg);
};
const isComplete = (src: string) => {
  const msg = `This image or media was not downloaded completely: ${src}`;
  const savedItem = JSON.parse(localStorage.getItem(src) || "");
  if (!isImageOrMediaDownload(savedItem) || !savedItem.completed)
    throw new Error(msg);
};
const isNotM3u8 = (src: string) => {
  const msg = `This .m3u8 resource cannot be used offline: ${src}`;
  if (src.endsWith(".m3u8")) throw new Error(msg);
};
const isMediaFile = (src: string) => {
  const msg = `Expected media resource to end with .mp3, .mp4, or .m3u8: ${src}`;
  if (!/\.(mp3|mp4|m3u8)$/.test(src)) throw new Error(msg);
};
const isPDF = (src: string) => {
  const msg = `This file resource must have have a file extension of .pdf: ${src}`;
  if (!src.endsWith(".pdf")) throw new Error(msg);
};

const validateImage = ({ src, isOffline }: ValidateArgs) => {
  if (!isOffline) {
    // isHttpResource(src);
    return null;
  }
  isFileSystemResource(src);
  const localSrc = src.replace("file://", "");
  isNotHttpResource(localSrc);
  exists(localSrc);
  wasSavedByFetchBlob(localSrc);
  isComplete(localSrc);
  return null;
};

const validateMedia = ({ src, isOffline }: ValidateArgs) => {
  isMediaFile(src);
  if (!isOffline) {
    isHttpResource(src);
    return null;
  }
  isNotHttpResource(src);
  exists(src);
  isNotM3u8(src);
  return null;
};

const validatePdf = ({ src, isOffline }: ValidateArgs) => {
  isPDF(src);
  if (!isOffline) {
    isHttpResource(src);
    return null;
  }
  isNotHttpResource(src);
  exists(src);
  wasSavedByFetchBlob(src);
  isComplete(src);
  return null;
};

export const Media: React.FC<{ src: string }> = ({ src }) => (
  <Validator msg="Play media" src={src} validate={validateMedia} />
);

export const PDF: React.FC<{ src: string }> = ({ src }) => (
  <Validator msg="Display PDF file" src={src} validate={validatePdf} />
);

export const TeacherImage: React.FC<{ src: string }> = ({ src }) => (
  <Validator msg="Display teacher image" src={src} validate={validateImage} />
);

export const ContentImage: React.FC<{ src: string }> = ({ src }) => (
  <Validator msg="Display content image" src={src} validate={validateImage} />
);

export const ArticleContent: React.FC<{ content: string }> = ({ content }) => (
  <Validator
    msg="Display article content"
    src={content}
    validate={({ src }) => {
      if (src.length < 200) throw new Error("Article source too short");
      return null;
    }}
  />
);
