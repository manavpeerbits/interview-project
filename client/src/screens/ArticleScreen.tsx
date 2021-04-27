import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { ContentImage, TeacherImage, Media, fs } from "../mocks";
import {
  articleScreenQuery,
  ArticleScreenQuery,
  ArticleScreenQueryVariables
} from "../graphql";
import { ErrorMessage, Loading, CenterContents, DownloadContent } from "../components";

interface Props {
  id: string;
  isOffline?: boolean;
}

export const ArticleScreen: React.FC<Props> = ({ id, isOffline }) => {
  const [state, setState] = useState<any>({})
  const { data, error, loading } = useQuery<
    ArticleScreenQuery,
    ArticleScreenQueryVariables
  >(articleScreenQuery, {
    variables: { id }
  });

  const article = data?.Article;

  useEffect(() => {
    async function fetchOfflineData() {
      if (isOffline && await fs.exists('articles')) {
        const currentContentArray = await fs.readFile('articles');
        const parsedData = JSON.parse(currentContentArray as string);
        const storedData = parsedData.find((doc: any) => doc.id === id);
        setState(storedData);
      }
    }

    fetchOfflineData();
  }, [id, isOffline])

  if (loading) return <Loading />;
  if (error) return <ErrorMessage msg={JSON.stringify(error)} />;
  if (!article) return <ErrorMessage msg="Missing article data" />;

  if(isOffline && !state) return <ErrorMessage msg="Missing article data" />;

  return (
    <>
      <CenterContents>
        <h1 style={{ textAlign: "center" }}>Article</h1>
        <h4 style={{ textAlign: "center" }}>{isOffline ? state.title : article.title}</h4>
      </CenterContents>
      <ContentImage src={isOffline ? state.no_text_image?.processed_url : article.no_text_image.processed_url} />
      <TeacherImage src={isOffline ? state.teacher?.image?.processed_url : article.teacher.image.processed_url} />
      {(!isOffline && article.media_source) && <Media src={article.media_source} />}
      {(isOffline && state.media_download) && <Media src={state.media_download} />}
      <DownloadContent content={isOffline ? state : article} screen='ArticleScreen' />
    </>
  );
};
