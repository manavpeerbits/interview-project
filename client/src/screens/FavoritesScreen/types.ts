import {
  ArticleScreenQuery,
  ClassScreenQuery,
  MeditationScreenQuery,
  CourseScreenQuery
} from "../../graphql";

export type Course = CourseScreenQuery["Course"];
export type Meditation = MeditationScreenQuery["Meditation"];
export type Class = ClassScreenQuery["Class"];
export type Article = ArticleScreenQuery["Article"];

export type FavoriteContent = Course | Meditation | Class | Article;
export type Favorite<C extends FavoriteContent = FavoriteContent> = {
  favorited_on: Date;
  order: number;
  card: {
    title: string;
    author: string;
    image: string;
  };
  content: C;
};
