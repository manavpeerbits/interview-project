import React from "react";
import { useQuery } from "@apollo/client";
import { ContentImage, TeacherImage, Media } from "../mocks";
import {
  meditationScreenQuery,
  MeditationScreenQuery,
  MeditationScreenQueryVariables
} from "../graphql";
import { ErrorMessage, Loading, CenterContents } from "../components";

interface Props {
  id: string;
}

export const MeditationScreen: React.FC<Props> = ({ id }) => {
  const { data, error, loading } = useQuery<
    MeditationScreenQuery,
    MeditationScreenQueryVariables
  >(meditationScreenQuery, {
    variables: { id }
  });

  const meditation = data?.Meditation;

  if (loading) return <Loading />;
  if (error) return <ErrorMessage msg={JSON.stringify(error)} />;
  if (!meditation) return <ErrorMessage msg="Missing meditation data" />;

  return (
    <>
      <CenterContents>
        <h1 style={{ textAlign: "center" }}>Meditation</h1>
        <h4 style={{ textAlign: "center" }}>{meditation.title}</h4>
      </CenterContents>
      <ContentImage src={meditation.no_text_image.processed_url} />
      <TeacherImage src={meditation.teacher.image.processed_url} />
      <Media src={meditation.media_source} />
    </>
  );
};
