/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

export interface Query_HomeScreen_HomeScreen_Course_no_text_image {
  /**
   * processed_url is handled with ce_img
   * for example: {exp:ce_img:pair src="{image}" width="350"}{made}{/exp:ce_img:pair}
   * width parameter from image query is optional and only impacts the processed_url
   * all other fields should be unchanged by width
   */
  processed_url: string;
}

export interface Query_HomeScreen_HomeScreen_Meditation_no_text_image {
  /**
   * processed_url is handled with ce_img
   * for example: {exp:ce_img:pair src="{image}" width="350"}{made}{/exp:ce_img:pair}
   * width parameter from image query is optional and only impacts the processed_url
   * all other fields should be unchanged by width
   */
  processed_url: string;
}

export interface Query_HomeScreen_HomeScreen_Article_no_text_image {
  /**
   * processed_url is handled with ce_img
   * for example: {exp:ce_img:pair src="{image}" width="350"}{made}{/exp:ce_img:pair}
   * width parameter from image query is optional and only impacts the processed_url
   * all other fields should be unchanged by width
   */
  processed_url: string;
}

export interface Query_HomeScreen_HomeScreen_Class_no_text_image {
  /**
   * processed_url is handled with ce_img
   * for example: {exp:ce_img:pair src="{image}" width="350"}{made}{/exp:ce_img:pair}
   * width parameter from image query is optional and only impacts the processed_url
   * all other fields should be unchanged by width
   */
  processed_url: string;
}

export interface Query_HomeScreen_HomeScreen_Class {
  __typename: "Class";
  id: string;
  title: string;
  no_text_image: Query_HomeScreen_HomeScreen_Class_no_text_image;
}

export interface Query_HomeScreen_HomeScreen_Article {
  __typename: "Article";
  id: string;
  title: string;
  no_text_image: Query_HomeScreen_HomeScreen_Article_no_text_image;
}
export interface Query_HomeScreen_HomeScreen_Meditation {
  __typename: "Meditation";
  id: string;
  title: string;
  no_text_image: Query_HomeScreen_HomeScreen_Meditation_no_text_image;
}

export interface Query_HomeScreen_HomeScreen_Course {
  __typename: "Course";
  id: string;
  title: string;
  no_text_image: Query_HomeScreen_HomeScreen_Course_no_text_image | null;
}

export interface Query_HomeScreen_HomeScreen {
  classes: Query_HomeScreen_HomeScreen_Class[];
  articles: Query_HomeScreen_HomeScreen_Article[];
  courses: Query_HomeScreen_HomeScreen_Course[];
  meditations: Query_HomeScreen_HomeScreen_Meditation[];
}

export interface Query_HomeScreen {
  HomeScreen: Query_HomeScreen_HomeScreen;
}
