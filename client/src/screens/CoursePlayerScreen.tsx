import React from "react";
import { CourseScreenQuery } from "../graphql";
import { CenterContents } from "../components";

interface Props {
  content: CourseScreenQuery["Course"];
}

export const CoursePlayerScreen: React.FC<Props> = ({ content }) => {
  return (
    <CenterContents>
      <h1 style={{ textAlign: "center" }}>Course Player</h1>
      <h4 style={{ textAlign: "center" }}>{content.title}</h4>
    </CenterContents>
  );
};
