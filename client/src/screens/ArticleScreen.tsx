import React from "react";
import { useQuery } from "@apollo/client";
import { ContentImage, TeacherImage, Media } from "../mocks";
import {
  articleScreenQuery,
  ArticleScreenQuery,
  ArticleScreenQueryVariables
} from "../graphql";
import { ErrorMessage, Loading, CenterContents } from "../components";

interface Props {
  id: string;
}

export const ArticleScreen: React.FC<Props> = ({ id }) => {
  const { data, error, loading } = useQuery<
    ArticleScreenQuery,
    ArticleScreenQueryVariables
  >(articleScreenQuery, {
    variables: { id }
  });

  const article = data?.Article;

  if (loading) return <Loading />;
  if (error) return <ErrorMessage msg={JSON.stringify(error)} />;
  if (!article) return <ErrorMessage msg="Missing article data" />;

  return (
    <>
      <CenterContents>
        <h1 style={{ textAlign: "center" }}>Article</h1>
        <h4 style={{ textAlign: "center" }}>{article.title}</h4>
      </CenterContents>
      <ContentImage src={article.no_text_image.processed_url} />
      <TeacherImage src={article.teacher.image.processed_url} />
      {article.media_source && <Media src={article.media_source} />}
    </>
  );
};
