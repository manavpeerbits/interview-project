/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Language, CourseAccessType, CourseModuleType } from "./global";

// ====================================================
// GraphQL query operation: Query_Course_CoursePlayerPage
// ====================================================

export interface Query_Course_CoursePlayerPage_Course_image {
  /**
   * processed_url is handled with ce_img
   * for example: {exp:ce_img:pair src="{image}" width="350"}{made}{/exp:ce_img:pair}
   * width parameter from image query is optional and only impacts the processed_url
   * all other fields should be unchanged by width
   */
  processed_url: string;
}

export interface Query_Course_CoursePlayerPage_Course_categories {
  id: string;
  name: string;
}

export interface Query_Course_CoursePlayerPage_Course_sales_page_select_lead_image {
  /**
   * processed_url is handled with ce_img
   * for example: {exp:ce_img:pair src="{image}" width="350"}{made}{/exp:ce_img:pair}
   * width parameter from image query is optional and only impacts the processed_url
   * all other fields should be unchanged by width
   */
  processed_url: string;
}

export interface Query_Course_CoursePlayerPage_Course_sales_page_select_buttons {
  id: string;
  text: string;
  url: string;
  alt_text: string | null;
}

export interface Query_Course_CoursePlayerPage_Course_sales_page_select_countdown {
  /**
   * unix timestamp in milliseconds
   */
  timestamp: string;
  /**
   * {DATE_RSS} from EE
   */
  rss: string;
  /**
   * yyyymmdd: date formatted as 2019-01-01
   */
  yyyymmdd: string;
}

export interface Query_Course_CoursePlayerPage_Course_sales_page_select_banner {
  url: string;
}

export interface Query_Course_CoursePlayerPage_Course_sales_page_select_benefits {
  id: string;
  body: string;
}

export interface Query_Course_CoursePlayerPage_Course_sales_page_select_sections {
  id: string;
  body: string;
}

export interface Query_Course_CoursePlayerPage_Course_sales_page_select {
  background_video: string | null;
  lead_image: Query_Course_CoursePlayerPage_Course_sales_page_select_lead_image | null;
  caption_title: string | null;
  caption_body: string | null;
  jwplayer_id: string | null;
  buttons: (Query_Course_CoursePlayerPage_Course_sales_page_select_buttons | null)[] | null;
  countdown: Query_Course_CoursePlayerPage_Course_sales_page_select_countdown | null;
  countdown_text: string | null;
  banner: Query_Course_CoursePlayerPage_Course_sales_page_select_banner | null;
  benefits: (Query_Course_CoursePlayerPage_Course_sales_page_select_benefits | null)[] | null;
  duration: string | null;
  sections: (Query_Course_CoursePlayerPage_Course_sales_page_select_sections | null)[] | null;
}

export interface Query_Course_CoursePlayerPage_Course_upcoming_until {
  iso8601: any;
  /**
   * unix timestamp in milliseconds
   */
  timestamp: string;
  /**
   * yyyymmdd: date formatted as 2019-01-01
   */
  yyyymmdd: string;
  /**
   * {DATE_RSS} from EE
   */
  rss: string;
}

export interface Query_Course_CoursePlayerPage_Course_no_text_image {
  /**
   * processed_url is handled with ce_img
   * for example: {exp:ce_img:pair src="{image}" width="350"}{made}{/exp:ce_img:pair}
   * width parameter from image query is optional and only impacts the processed_url
   * all other fields should be unchanged by width
   */
  processed_url: string;
}

export interface Query_Course_CoursePlayerPage_Course_teachers_image {
  url: string;
  alt_text: string | null;
  /**
   * processed_url is handled with ce_img
   * for example: {exp:ce_img:pair src="{image}" width="350"}{made}{/exp:ce_img:pair}
   * width parameter from image query is optional and only impacts the processed_url
   * all other fields should be unchanged by width
   */
  processed_url: string;
}

export interface Query_Course_CoursePlayerPage_Course_teachers {
  localized_path: string;
  id: string;
  full_name: string;
  about_me: string | null;
  /**
   * snippet is a truncated version of about_me text
   * 100 characters, html tags removed, with ... at the end
   */
  snippet: string | null;
  /**
   * url_title is from member profile
   */
  url_title: string;
  image: Query_Course_CoursePlayerPage_Course_teachers_image;
}

export interface Query_Course_CoursePlayerPage_Course_chapters_modules_media_duration {
  seconds: number;
}

export interface Query_Course_CoursePlayerPage_Course_chapters_modules {
  id: string;
  display_name: string | null;
  module_type: CourseModuleType;
  quiz_or_live_embed: string | null;
  file: string | null;
  jwplayer_id: string | null;
  article_title: string | null;
  article_subtitle: string | null;
  article_body: string | null;
  /**
   * snippet for article_body
   */
  snippet: string | null;
  media_duration: Query_Course_CoursePlayerPage_Course_chapters_modules_media_duration | null;
  /**
   * media_download is a url based on the jwplayer_id and the module_type
   * if module_type is audio then: `http:                    // content.jwplatform.com/videos/${jwplayer_id}-WGiBZHhe.mp3`
   * else then: `http:                                       // content.jwplatform.com/videos/${jwplayer_id}-kZ9IxeSQ.mp4`
   */
  media_download: string | null;
  /**
   * media_source is a url based on the jwplayer_id: `https: // content.jwplatform.com/manifests/${jwplayer_id}.m3u8`
   */
  media_source: string | null;
}

export interface Query_Course_CoursePlayerPage_Course_chapters {
  id: string;
  name: string;
  modules: Query_Course_CoursePlayerPage_Course_chapters_modules[];
}

export interface Query_Course_CoursePlayerPage_Course {
  __typename: "Course";
  id: string;
  title: string;
  subtitle: string | null;
  url_title: string;
  description: string | null;
  short_description: string | null;
  /**
   * full_url is based on language and path:
   * If English: `https:     // yogainternational.com${path}`
   * If Not English: `https: // yogainternational.com/${lang_code}${path}`
   */
  full_url: string;
  image: Query_Course_CoursePlayerPage_Course_image | null;
  categories: (Query_Course_CoursePlayerPage_Course_categories | null)[] | null;
  sales_page_select: Query_Course_CoursePlayerPage_Course_sales_page_select | null;
  ecourse_price: number | null;
  address_needed: boolean | null;
  email_receipt: string | null;
  upcoming_block: string | null;
  upcoming_until: Query_Course_CoursePlayerPage_Course_upcoming_until | null;
  language: Language;
  no_text_image: Query_Course_CoursePlayerPage_Course_no_text_image | null;
  teachers: (Query_Course_CoursePlayerPage_Course_teachers | null)[] | null;
  access_type: CourseAccessType;
  chapters: (Query_Course_CoursePlayerPage_Course_chapters | null)[] | null;
}

export interface Query_Course_CoursePlayerPage {
  Course: Query_Course_CoursePlayerPage_Course;
}

export interface Query_Course_CoursePlayerPageVariables {
  id: string;
}
