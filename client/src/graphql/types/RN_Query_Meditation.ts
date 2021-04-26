/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Language, ArticleType } from "./global";

// ====================================================
// GraphQL query operation: RN_Query_Meditation
// ====================================================

export interface RN_Query_Meditation_Meditation_entry_date {
  iso8601: any;
  /**
   * yyyymmdd: date formatted as 2019-01-01
   */
  yyyymmdd: string;
}

export interface RN_Query_Meditation_Meditation_no_text_image {
  /**
   * processed_url is handled with ce_img
   * for example: {exp:ce_img:pair src="{image}" width="350"}{made}{/exp:ce_img:pair}
   * width parameter from image query is optional and only impacts the processed_url
   * all other fields should be unchanged by width
   */
  processed_url: string;
}

export interface RN_Query_Meditation_Meditation_teacher_image {
  /**
   * processed_url is handled with ce_img
   * for example: {exp:ce_img:pair src="{image}" width="350"}{made}{/exp:ce_img:pair}
   * width parameter from image query is optional and only impacts the processed_url
   * all other fields should be unchanged by width
   */
  processed_url: string;
}

export interface RN_Query_Meditation_Meditation_teacher {
  id: string;
  localized_path: string;
  /**
   * snippet is a truncated version of about_me text
   * 100 characters, html tags removed, with ... at the end
   */
  snippet: string | null;
  full_name: string;
  image: RN_Query_Meditation_Meditation_teacher_image;
}

export interface RN_Query_Meditation_Meditation_media_duration {
  /**
   * group is exp:vmg_yi_helpers:seconds_to_duration_group without hyphen
   */
  group: string;
}

export interface RN_Query_Meditation_Meditation_tags {
  text: string;
  url_title: string;
}

export interface RN_Query_Meditation_Meditation_secondary_teacher_image {
  /**
   * processed_url is handled with ce_img
   * for example: {exp:ce_img:pair src="{image}" width="350"}{made}{/exp:ce_img:pair}
   * width parameter from image query is optional and only impacts the processed_url
   * all other fields should be unchanged by width
   */
  processed_url: string;
}

export interface RN_Query_Meditation_Meditation_secondary_teacher {
  full_name: string;
  image: RN_Query_Meditation_Meditation_secondary_teacher_image;
  /**
   * snippet is a truncated version of about_me text
   * 100 characters, html tags removed, with ... at the end
   */
  snippet: string | null;
  about_me: string | null;
  id: string;
}

export interface RN_Query_Meditation_Meditation_square_image {
  /**
   * processed_url is handled with ce_img
   * for example: {exp:ce_img:pair src="{image}" width="350"}{made}{/exp:ce_img:pair}
   * width parameter from image query is optional and only impacts the processed_url
   * all other fields should be unchanged by width
   */
  processed_url: string;
}

export interface RN_Query_Meditation_Meditation_next {
  /**
   * path is `/meditation/${url_title}`
   */
  path: string;
}

export interface RN_Query_Meditation_Meditation_prev {
  /**
   * path is `/meditation/${url_title}`
   */
  path: string;
}

export interface RN_Query_Meditation_Meditation_style {
  name: string;
  url_title: string;
}

export interface RN_Query_Meditation_Meditation_focus {
  name: string;
  url_title: string;
}

export interface RN_Query_Meditation_Meditation {
  __typename: "Meditation";
  id: string;
  language: Language;
  title: string;
  subtitle: string | null;
  url_title: string;
  /**
   * completed_count is the count of rows in class_consumption_tracking table
   * where this meditation is_completed is true
   */
  completed_count: number;
  entry_date: RN_Query_Meditation_Meditation_entry_date;
  no_text_image: RN_Query_Meditation_Meditation_no_text_image;
  short_summary: string;
  seo_title: string;
  /**
   * parsed_body is built from body_text, article_media_assets, and block_quotes
   */
  parsed_body: string;
  snippet: string;
  teacher: RN_Query_Meditation_Meditation_teacher;
  entry_type: ArticleType;
  jwplayer_id: string;
  media_source: string;
  media_download: string;
  media_duration: RN_Query_Meditation_Meditation_media_duration;
  tags: (RN_Query_Meditation_Meditation_tags | null)[] | null;
  secondary_teacher: RN_Query_Meditation_Meditation_secondary_teacher | null;
  square_image: RN_Query_Meditation_Meditation_square_image;
  next: RN_Query_Meditation_Meditation_next | null;
  prev: RN_Query_Meditation_Meditation_prev | null;
  style: RN_Query_Meditation_Meditation_style[];
  focus: (RN_Query_Meditation_Meditation_focus | null)[] | null;
}

export interface RN_Query_Meditation {
  Meditation: RN_Query_Meditation_Meditation;
}

export interface RN_Query_MeditationVariables {
  id: string;
}
