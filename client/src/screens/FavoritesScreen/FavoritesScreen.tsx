import React from "react";
import { useNavigation } from "../../navigation";
import { Favorite } from "./types";
import { FavoritesSection } from "./FavoritesSection";

type FavoritesByType = {
  classes: Favorite[];
  meditations: Favorite[];
  articles: Favorite[];
  courses: Favorite[];
};

const getFavoritesByType = (favorites: Favorite[]) => {
  const reducerParam: FavoritesByType = { 
    classes: [], 
    meditations: [], 
    articles: [], 
    courses: [] 
  };

  return favorites.reduce(
    (acc, d) => {
      if (d.content.__typename === "Class") acc.classes.push(d);
      if (d.content.__typename === "Course") acc.courses.push(d);
      if (d.content.__typename === "Meditation") acc.meditations.push(d);
      if (d.content.__typename === "Article") acc.articles.push(d);
      return acc;
    },
    reducerParam
  );
};

export const MyFavoritesScreen = () => {
  const { navigate } = useNavigation();

  const favorites: Favorite[] = [];
  const favoritesByType: FavoritesByType = getFavoritesByType(favorites);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>My Favorites</h1>
      <FavoritesSection
        heading="Classes"
        items={favoritesByType.classes}
        onClickItem={item => {
          navigate({
            route: "ClassPlayerScreen",
            params: { content: item.content }
          });
        }}
      />
      <FavoritesSection
        heading="Courses"
        items={favoritesByType.courses}
        onClickItem={item => {
          navigate({
            route: "CoursePlayerScreen",
            params: { content: item.content }
          });
        }}
      />
      <FavoritesSection
        heading="Articles"
        items={favoritesByType.articles}
        onClickItem={item => {
          navigate({
            route: "ArticlePlayerScreen",
            params: { content: item.content }
          });
        }}
      />
      <FavoritesSection
        heading="Meditations"
        items={favoritesByType.meditations}
        onClickItem={item => {
          navigate({
            route: "MeditationPlayerScreen",
            params: { content: item.content }
          });
        }}
      />
    </>
  );
};
