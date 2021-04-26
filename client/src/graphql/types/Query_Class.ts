/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ArticleType } from "./global";

// ====================================================
// GraphQL query operation: Query_Class
// ====================================================

export interface Query_Class_Class_entry_date {
  iso8601: any;
  /**
   * yyyymmdd: date formatted as 2019-01-01
   */
  yyyymmdd: string;
}

export interface Query_Class_Class_no_text_image {
  /**
   * processed_url is handled with ce_img
   * for example: {exp:ce_img:pair src="{image}" width="350"}{made}{/exp:ce_img:pair}
   * width parameter from image query is optional and only impacts the processed_url
   * all other fields should be unchanged by width
   */
  processed_url: string;
}

export interface Query_Class_Class_media_duration {
  /**
   * iso8601 is  exp:vmg_yi_helpers:iso8601_duration
   */
  iso8601: string;
  /**
   * group is exp:vmg_yi_helpers:seconds_to_duration_group without hyphen
   */
  group: string;
}

export interface Query_Class_Class_tags {
  id: string;
  text: string;
  url_title: string;
}

export interface Query_Class_Class_teacher_image {
  /**
   * processed_url is handled with ce_img
   * for example: {exp:ce_img:pair src="{image}" width="350"}{made}{/exp:ce_img:pair}
   * width parameter from image query is optional and only impacts the processed_url
   * all other fields should be unchanged by width
   */
  processed_url: string;
}

export interface Query_Class_Class_teacher {
  id: string;
  full_name: string;
  /**
   * url_title is from member profile
   */
  url_title: string;
  image: Query_Class_Class_teacher_image;
  /**
   * snippet is a truncated version of about_me text
   * 100 characters, html tags removed, with ... at the end
   */
  snippet: string | null;
}

export interface Query_Class_Class_secondary_teacher_image {
  /**
   * processed_url is handled with ce_img
   * for example: {exp:ce_img:pair src="{image}" width="350"}{made}{/exp:ce_img:pair}
   * width parameter from image query is optional and only impacts the processed_url
   * all other fields should be unchanged by width
   */
  processed_url: string;
}

export interface Query_Class_Class_secondary_teacher {
  id: string;
  full_name: string;
  /**
   * url_title is from member profile
   */
  url_title: string;
  image: Query_Class_Class_secondary_teacher_image;
  /**
   * snippet is a truncated version of about_me text
   * 100 characters, html tags removed, with ... at the end
   */
  snippet: string | null;
}

export interface Query_Class_Class_next {
  localized_path: string;
}

export interface Query_Class_Class_prev {
  localized_path: string;
}

export interface Query_Class_Class_style {
  id: string;
  name: string;
}

export interface Query_Class_Class_intensity {
  id: string;
  name: string;
}

export interface Query_Class_Class_level {
  id: string;
  name: string;
}

export interface Query_Class_Class_props {
  id: string;
  name: string;
}

export interface Query_Class_Class_focus {
  id: string;
  name: string;
}

export interface Query_Class_Class {
  __typename: "Class";
  id: string;
  title: string;
  subtitle: string | null;
  url_title: string;
  /**
   * full_url is based on language and path:
   * If English: `https:     // yogainternational.com${path}`
   * If Not English: `https: // yogainternational.com/${lang_code}${path}`
   */
  full_url: string;
  entry_date: Query_Class_Class_entry_date;
  no_text_image: Query_Class_Class_no_text_image;
  /**
   * snippet is a truncated version of body text
   * 100 characters, html tags removed, with ... at the end
   */
  snippet: string;
  short_summary: string;
  seo_title: string;
  /**
   * parsed_body is built from body_text, article_media_assets, and block_quotes
   */
  parsed_body: string;
  /**
   * completed_count is the count of rows in class_consumption_tracking table
   * where this class is_completed is true
   */
  completed_count: number;
  entry_type: ArticleType;
  jwplayer_id: string;
  media_source: string;
  media_download: string;
  media_duration: Query_Class_Class_media_duration;
  tags: (Query_Class_Class_tags | null)[] | null;
  teacher: Query_Class_Class_teacher;
  secondary_teacher: Query_Class_Class_secondary_teacher | null;
  next: Query_Class_Class_next | null;
  prev: Query_Class_Class_prev | null;
  style: Query_Class_Class_style[];
  intensity: Query_Class_Class_intensity[];
  level: Query_Class_Class_level[];
  props: (Query_Class_Class_props | null)[] | null;
  focus: (Query_Class_Class_focus | null)[] | null;
}

export interface Query_Class {
  Class: Query_Class_Class;
}

export interface Query_ClassVariables {
  id: string;
}
