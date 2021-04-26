import { ContentImage } from "../../mocks";
import React from "react";

interface Props {
  title: string;
  author: string;
  image: string;
}

export const DownloadCard: React.FC<Props> = ({ title, author, image }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        background: "#ccbdaa",
        padding: 20
      }}
    >
      <div style={{ flex: 0, padding: 20 }}>
        <h5 style={{ margin: 0, marginBottom: 10 }}>{title}</h5>
        <h6 style={{ margin: 0 }}>{author}</h6>
      </div>
      <div style={{ flex: 1 }}>
        <ContentImage src={image} />
      </div>
    </div>
  );
};
