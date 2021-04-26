import React from "react";
import { MeditationScreenQuery } from "../graphql";
import { CenterContents } from "../components";

interface Props {
  content: MeditationScreenQuery["Meditation"];
}

export const MeditationPlayerScreen: React.FC<Props> = ({ content }) => {
  return (
    <CenterContents>
      <h1 style={{ textAlign: "center" }}>Meditation Player</h1>
      <h4 style={{ textAlign: "center" }}>{content.title}</h4>
    </CenterContents>
  );
};
