import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { ContentImage, TeacherImage, Media, fs } from "../mocks";
import {
  meditationScreenQuery,
  MeditationScreenQuery,
  MeditationScreenQueryVariables
} from "../graphql";
import { ErrorMessage, Loading, CenterContents, DownloadContent } from "../components";

interface Props {
  id: string;
  isOffline?: boolean;
}

export const MeditationScreen: React.FC<Props> = ({ id, isOffline }) => {
  const [state, setState] = useState<any>({})
  const { data, error, loading } = useQuery<
    MeditationScreenQuery,
    MeditationScreenQueryVariables
  >(meditationScreenQuery, {
    variables: { id }
  });

  const meditation = data?.Meditation;

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
  if (!meditation) return <ErrorMessage msg="Missing meditation data" />;

  if(isOffline && !state) return <ErrorMessage msg="Missing meditations data" />;

  return (
    <>
      <CenterContents>
        <h1 style={{ textAlign: "center" }}>Meditation</h1>
        <h4 style={{ textAlign: "center" }}>{isOffline ? state.title : meditation.title}</h4>
      </CenterContents>
      <ContentImage src={isOffline ? state.no_text_image?.processed_url : meditation.no_text_image.processed_url} />
      <TeacherImage src={isOffline ? state.teacher?.image?.processed_url : meditation.teacher.image.processed_url} />
      <Media src={isOffline ? state.media_download : meditation.media_source} />
      <DownloadContent content={isOffline ? state : meditation} screen='MeditationScreen' />
    </>
  );
};
