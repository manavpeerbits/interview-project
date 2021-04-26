import React from "react";
import { useQuery } from "@apollo/client";
import { ContentImage, TeacherImage } from "../../mocks";
import {
  courseScreenQuery,
  CourseScreenQuery,
  CourseScreenQueryVariables
} from "../../graphql";
import { ChapterList } from "./ChapterList";
import { ErrorMessage, Loading, CenterContents } from "../../components";

interface Props {
  id: string;
}

export const CourseScreen: React.FC<Props> = ({ id }) => {
  const { data, error, loading } = useQuery<
    CourseScreenQuery,
    CourseScreenQueryVariables
  >(courseScreenQuery, {
    variables: { id }
  });

  const course = data?.Course;

  if (loading) return <Loading />;
  if (error) return <ErrorMessage msg={JSON.stringify(error)} />;
  if (!course) return <ErrorMessage msg="Missing course data" />;

  const teacher = course.teachers && course.teachers[0];
  return (
    <>
      <CenterContents>
        <h1 style={{ textAlign: "center" }}>Course</h1>
        <h4 style={{ textAlign: "center" }}>{course.title}</h4>
      </CenterContents>
      <ContentImage src={course.no_text_image?.processed_url || ""} />
      <TeacherImage src={teacher?.image.processed_url || ""} />
      <h4 style={{ textAlign: "center" }}>Course content</h4>
      <ChapterList chapters={course.chapters} />
    </>
  );
};
