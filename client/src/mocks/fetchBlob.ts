/* MOCKED EXTERNAL LIBRARY, DO NOT MODIFY */

export const fs = {
  readFile: async (path: string) => localStorage.getItem(path),
  writeFile: async (path: string, file: string) =>
    localStorage.setItem(path, file),
  exists: async (path: string) => !!localStorage.getItem(path),
  ls: async () => Object.keys(localStorage),
  unlink: async (path: string) => localStorage.removeItem(path),
  dirs: {
    DocumentDir: "user/documents"
  }
};

export type StatefulPromise<T> = Promise<T> & {
  onProgress: OnProgress;
  cancel: () => void;
};
type OnProgressCallback = (received: number, total: number) => void;
type OnProgress = (cb: OnProgressCallback) => () => void;
type Listeners = { [k: number]: undefined | OnProgressCallback };

type ImageOrMediaDownload = { originalSource: string; completed: boolean };
export function isImageOrMediaDownload(
  o: ImageOrMediaDownload | {} | null
): o is ImageOrMediaDownload {
  return (
    typeof o === "object" &&
    o !== null &&
    "originalSource" in o &&
    typeof o.originalSource === "string" &&
    "completed" in o &&
    typeof o.completed === "boolean"
  );
}
const writeImageOrMediaFile = (
  saveTo: string,
  src: string,
  completed: boolean
) => {
  const mockFile: ImageOrMediaDownload = { originalSource: src, completed };
  localStorage.setItem(saveTo, JSON.stringify(mockFile));
};

const interval = 250;
const downloadRate = 400;

export const fetchBlob = (
  source: string,
  saveTo: string
): StatefulPromise<void> => {
  let wasCancelled = false;
  let listenerKey = 0;
  const listeners: Listeners = {};

  writeImageOrMediaFile(saveTo, source, false);

  const promise = new Promise<void>(resolve => {
    const fileSize = Math.floor(Math.max(4000, Math.random() * 10000));

    let received = 0;
    const recursiveDownloadProgress = () => {
      if (wasCancelled) return;

      setTimeout(() => {
        received = Math.min(fileSize, received + downloadRate);
        Object.values(listeners).forEach(l => l && l(received, fileSize));
        if (received < fileSize) recursiveDownloadProgress();
        else {
          writeImageOrMediaFile(saveTo, source, true);
          resolve();
        }
      }, interval);
    };

    recursiveDownloadProgress();
  });

  const onProgress: OnProgress = cb => {
    const key = listenerKey;
    listenerKey += 1;
    listeners[key] = cb;
    return () => delete listeners[key];
  };

  const cancel = () => (wasCancelled = true);

  return Object.assign(promise, { onProgress, cancel });
};
