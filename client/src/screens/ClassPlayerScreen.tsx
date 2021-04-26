import React from "react";
import { ClassScreenQuery } from "../graphql";
import { CenterContents } from "../components";

interface Props {
  content: ClassScreenQuery["Class"];
}

export const ClassPlayerScreen: React.FC<Props> = ({ content }) => {
  return (
    <CenterContents>
      <h1 style={{ textAlign: "center" }}>Class Player</h1>
      <h4 style={{ textAlign: "center" }}>{content.title}</h4>
    </CenterContents>
  );
};
