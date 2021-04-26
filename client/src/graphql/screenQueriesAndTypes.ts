import {
  Query_Class,
  Query_ClassVariables,
  RN_Query_Article,
  RN_Query_ArticleVariables,
  Query_Course_CoursePlayerPage,
  Query_Course_CoursePlayerPageVariables,
  RN_Query_Meditation,
  RN_Query_MeditationVariables,
  Query_HomeScreen,
} from "./types";

import * as operations from "./operations";

export const homeScreenQuery = operations.Query_HomeScreen;
export type HomeScreenQuery = Query_HomeScreen;

export const articleScreenQuery = operations.RN_Query_Article;
export type ArticleScreenQuery = RN_Query_Article;
export type ArticleScreenQueryVariables = RN_Query_ArticleVariables;

export const classScreenQuery = operations.Query_Class;
export type ClassScreenQuery = Query_Class;
export type ClassScreenQueryVariables = Query_ClassVariables;

export const meditationScreenQuery = operations.RN_Query_Meditation;
export type MeditationScreenQuery = RN_Query_Meditation;
export type MeditationScreenQueryVariables = RN_Query_MeditationVariables;

export const courseScreenQuery = operations.Query_Course_CoursePlayerPage;
export type CourseScreenQuery = Query_Course_CoursePlayerPage;
export type CourseScreenQueryVariables = Query_Course_CoursePlayerPageVariables;
