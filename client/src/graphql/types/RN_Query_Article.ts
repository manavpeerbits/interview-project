/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Language, ArticleType } from "./global";

// ====================================================
// GraphQL query operation: RN_Query_Article
// ====================================================

export interface RN_Query_Article_Article_entry_date {
  iso8601: any;
  /**
   * yyyymmdd: date formatted as 2019-01-01
   */
  yyyymmdd: string;
}

export interface RN_Query_Article_Article_no_text_image {
  /**
   * processed_url is handled with ce_img
   * for example: {exp:ce_img:pair src="{image}" width="350"}{made}{/exp:ce_img:pair}
   * width parameter from image query is optional and only impacts the processed_url
   * all other fields should be unchanged by width
   */
  processed_url: string;
}

export interface RN_Query_Article_Article_square_image {
  /**
   * processed_url is handled with ce_img
   * for example: {exp:ce_img:pair src="{image}" width="350"}{made}{/exp:ce_img:pair}
   * width parameter from image query is optional and only impacts the processed_url
   * all other fields should be unchanged by width
   */
  processed_url: string;
}

export interface RN_Query_Article_Article_teacher_image {
  /**
   * processed_url is handled with ce_img
   * for example: {exp:ce_img:pair src="{image}" width="350"}{made}{/exp:ce_img:pair}
   * width parameter from image query is optional and only impacts the processed_url
   * all other fields should be unchanged by width
   */
  processed_url: string;
}

export interface RN_Query_Article_Article_teacher {
  id: string;
  localized_path: string;
  /**
   * snippet is a truncated version of about_me text
   * 100 characters, html tags removed, with ... at the end
   */
  snippet: string | null;
  full_name: string;
  image: RN_Query_Article_Article_teacher_image;
}

export interface RN_Query_Article_Article_channel {
  id: string;
  name: string;
  url_title: string;
}

export interface RN_Query_Article_Article_topic {
  id: string;
  name: string;
  url_title: string;
}

export interface RN_Query_Article_Article_media_duration {
  /**
   * group is exp:vmg_yi_helpers:seconds_to_duration_group without hyphen
   */
  group: string;
  /**
   * iso8601 is  exp:vmg_yi_helpers:iso8601_duration
   */
  iso8601: string;
}

export interface RN_Query_Article_Article_tags {
  text: string;
  url_title: string;
}

export interface RN_Query_Article_Article_secondary_teacher_image {
  /**
   * processed_url is handled with ce_img
   * for example: {exp:ce_img:pair src="{image}" width="350"}{made}{/exp:ce_img:pair}
   * width parameter from image query is optional and only impacts the processed_url
   * all other fields should be unchanged by width
   */
  processed_url: string;
}

export interface RN_Query_Article_Article_secondary_teacher {
  full_name: string;
  image: RN_Query_Article_Article_secondary_teacher_image;
  about_me: string | null;
  /**
   * snippet is a truncated version of about_me text
   * 100 characters, html tags removed, with ... at the end
   */
  snippet: string | null;
  id: string;
  /**
   * url_title is from member profile
   */
  url_title: string;
}

export interface RN_Query_Article_Article_next {
  /**
   * path is `/article/view/${url_title}`
   */
  path: string;
}

export interface RN_Query_Article_Article_prev {
  /**
   * path is `/article/view/${url_title}`
   */
  path: string;
}

export interface RN_Query_Article_Article {
  __typename: "Article";
  id: string;
  language: Language;
  title: string;
  subtitle: string | null;
  url_title: string;
  entry_date: RN_Query_Article_Article_entry_date;
  no_text_image: RN_Query_Article_Article_no_text_image;
  square_image: RN_Query_Article_Article_square_image;
  short_summary: string;
  seo_title: string;
  /**
   * parsed_body is built from body_text, article_media_assets, and block_quotes
   */
  parsed_body: string;
  snippet: string;
  teacher: RN_Query_Article_Article_teacher;
  channel: RN_Query_Article_Article_channel;
  topic: RN_Query_Article_Article_topic;
  entry_type: ArticleType;
  jwplayer_id: string | null;
  media_source: string | null;
  media_download: string | null;
  media_duration: RN_Query_Article_Article_media_duration | null;
  tags: (RN_Query_Article_Article_tags | null)[] | null;
  secondary_teacher: RN_Query_Article_Article_secondary_teacher | null;
  next: RN_Query_Article_Article_next | null;
  prev: RN_Query_Article_Article_prev | null;
}

export interface RN_Query_Article {
  Article: RN_Query_Article_Article;
}

export interface RN_Query_ArticleVariables {
  id: string;
}
