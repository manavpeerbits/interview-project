import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { ContentImage, TeacherImage, Media, fs } from "../mocks";
import {
  classScreenQuery,
  ClassScreenQuery,
  ClassScreenQueryVariables
} from "../graphql";
import { ErrorMessage, Loading, CenterContents, DownloadContent } from "../components";

interface Props {
  id: string;
  isOffline?: boolean;
}

export const ClassScreen: React.FC<Props> = ({ id, isOffline }) => {
  const [state, setState] = useState<any>({})
  const { data, error, loading } = useQuery<
    ClassScreenQuery,
    ClassScreenQueryVariables
  >(classScreenQuery, {
    variables: { id }
  });

  let class_ = data?.Class;

  useEffect(() => {
    async function fetchOfflineData() {
      if (isOffline && await fs.exists('classes')) {
        const currentContentArray = await fs.readFile('classes');
        const parsedData = JSON.parse(currentContentArray as string);
        const storedData = parsedData.find((doc: any) => doc.id === id);
        setState(storedData);
      }
    }

    fetchOfflineData();
  }, [id, isOffline])

  if (loading) return <Loading />;
  if (error) return <ErrorMessage msg={JSON.stringify(error)} />;
  if (!class_) return <ErrorMessage msg="Missing class data" />;

  if(isOffline && !state) return <ErrorMessage msg="Missing class data" />;

  return (
    <>
      <CenterContents>
        <h1 style={{ margin: 0 }}>Class</h1>
        <h4>{isOffline ? state.title : class_.title}</h4>
      </CenterContents>
      <ContentImage src={isOffline ? state.no_text_image?.processed_url : class_.no_text_image.processed_url} />
      <TeacherImage src={isOffline ? state.teacher?.image?.processed_url : class_.teacher.image.processed_url} />
      <Media src={isOffline ? state.media_download : class_.media_source} />
      <DownloadContent content={isOffline ? state : class_} screen='ClassScreen' />
    </>
  );
};
