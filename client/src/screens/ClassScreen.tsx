import React from "react";
import { useQuery } from "@apollo/client";
import { ContentImage, TeacherImage, Media } from "../mocks";
import {
  classScreenQuery,
  ClassScreenQuery,
  ClassScreenQueryVariables
} from "../graphql";
import { ErrorMessage, Loading, CenterContents } from "../components";

interface Props {
  id: string;
}

export const ClassScreen: React.FC<Props> = ({ id }) => {
  const { data, error, loading } = useQuery<
    ClassScreenQuery,
    ClassScreenQueryVariables
  >(classScreenQuery, {
    variables: { id }
  });

  const class_ = data?.Class;

  if (loading) return <Loading />;
  if (error) return <ErrorMessage msg={JSON.stringify(error)} />;
  if (!class_) return <ErrorMessage msg="Missing class data" />;

  return (
    <>
      <CenterContents>
        <h1 style={{ margin: 0 }}>Class</h1>
        <h4>{class_.title}</h4>
      </CenterContents>
      <ContentImage src={class_.no_text_image.processed_url} />
      <TeacherImage src={class_.teacher.image.processed_url} />
      <Media src={class_.media_source} />
    </>
  );
};
