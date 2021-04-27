import React, { useState, useEffect }  from "react";
import { useQuery } from "@apollo/client";
import { ContentImage, TeacherImage, fs } from "../../mocks";
import {
  courseScreenQuery,
  CourseScreenQuery,
  CourseScreenQueryVariables
} from "../../graphql";
import { ChapterList } from "./ChapterList";
import { ErrorMessage, Loading, CenterContents, DownloadContent } from "../../components";

interface Props {
  id: string;
  isOffline?: boolean;
}

export const CourseScreen: React.FC<Props> = ({ id, isOffline }) => {
  const [state, setState] = useState<any>({})
  const { data, error, loading } = useQuery<
    CourseScreenQuery,
    CourseScreenQueryVariables
  >(courseScreenQuery, {
    variables: { id }
  });

  const course = data?.Course;

  useEffect(() => {
    async function fetchOfflineData() {
      if (isOffline && await fs.exists('meditations')) {
        const currentContentArray = await fs.readFile('meditations');
        const parsedData = JSON.parse(currentContentArray as string);
        const storedData = parsedData.find((doc: any) => doc.id === id);
        setState(storedData);
      }
    }

    fetchOfflineData();
  }, [id, isOffline])

  if (loading) return <Loading />;
  if (error) return <ErrorMessage msg={JSON.stringify(error)} />;
  if (!course) return <ErrorMessage msg="Missing course data" />;

  const teacher = isOffline ? (state.teachers && state.teachers[0]) : (course.teachers && course.teachers[0]);

  if(isOffline && !state) return <ErrorMessage msg="Missing meditations data" />;

  return (
    <>
      <CenterContents>
        <h1 style={{ textAlign: "center" }}>Course</h1>
        <h4 style={{ textAlign: "center" }}>{isOffline ? state.title : course.title}</h4>
      </CenterContents>
      <ContentImage src={isOffline ? state.no_text_image?.processed_url : course.no_text_image?.processed_url || ""} />
      <TeacherImage src={teacher?.image.processed_url || ""} />
      <h4 style={{ textAlign: "center" }}>Course content</h4>
      <ChapterList chapters={isOffline ? state.chapters : course.chapters} />
      <DownloadContent content={isOffline ? state : course} screen='CourseScreen' />
    </>
  );
};
