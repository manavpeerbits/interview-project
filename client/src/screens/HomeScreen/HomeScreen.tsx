import React from "react";
import { useQuery } from "@apollo/client";
import { Loading, ErrorMessage } from "../../components";
import { homeScreenQuery, HomeScreenQuery } from "../../graphql";
import { HomeScreenCard } from "./HomeScreenCard";

export const HomeScreen: React.FC = () => {
  const { data, error, loading } = useQuery<HomeScreenQuery>(homeScreenQuery);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage msg={JSON.stringify(error)} />;
  if (!data) return <ErrorMessage msg="Missing data" />;

  const { classes, courses, meditations, articles } = data.HomeScreen;

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Recommended for You</h1>

      <h4>Classes</h4>
      <div style={{ display: "flex" }}>
        {classes.map(({ id, title, no_text_image }) => (
          <HomeScreenCard
            key={id}
            title={title}
            img={no_text_image.processed_url}
            navArgs={{ route: "ClassScreen", params: { id } }}
          />
        ))}
      </div>

      <h4>Meditations</h4>
      <div style={{ display: "flex" }}>
        {meditations.map(({ id, title, no_text_image }) => (
          <HomeScreenCard
            key={id}
            title={title}
            img={no_text_image.processed_url}
            navArgs={{ route: "MeditationScreen", params: { id } }}
          />
        ))}
      </div>

      <h4>Articles</h4>
      <div style={{ display: "flex" }}>
        {articles.map(({ id, title, no_text_image }) => (
          <HomeScreenCard
            key={id}
            title={title}
            img={no_text_image.processed_url}
            navArgs={{ route: "ArticleScreen", params: { id } }}
          />
        ))}
      </div>

      <h4>Courses</h4>
      <div style={{ display: "flex" }}>
        {courses.map(({ id, title, no_text_image }) => (
          <HomeScreenCard
            key={id}
            title={title}
            img={no_text_image?.processed_url || ""}
            navArgs={{ route: "CourseScreen", params: { id } }}
          />
        ))}
      </div>
    </>
  );
};
