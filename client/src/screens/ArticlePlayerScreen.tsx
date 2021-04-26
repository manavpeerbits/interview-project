import React from "react";
import { ArticleScreenQuery } from "../graphql";
import { CenterContents } from "../components";

interface Props {
  content: ArticleScreenQuery["Article"];
}

export const ArticlePlayerScreen: React.FC<Props> = ({ content }) => {
  return (
    <CenterContents>
      <h1 style={{ textAlign: "center" }}>Article Player</h1>
      <h4 style={{ textAlign: "center" }}>{content.title}</h4>
    </CenterContents>
  );
};
