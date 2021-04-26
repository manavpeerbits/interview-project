import { gql } from "@apollo/client";
import { Fragment_TeacherCard } from "./fragments";

export const Query_HomeScreen = gql`
  query Query_HomeScreen {
    HomeScreen {
      classes {
        __typename
        id
        title
        no_text_image(params: { width: 1600 }) {
          processed_url
        }
      }
      meditations {
        __typename
        id
        title
        no_text_image(params: { width: 1600 }) {
          processed_url
        }
      }
      articles {
        __typename
        id
        title
        no_text_image(params: { width: 1600 }) {
          processed_url
        }
      }
      courses {
        __typename
        id
        title
        no_text_image(params: { width: 1600 }) {
          processed_url
        }
      }
    }
  }
`;

export const Query_Class = gql`
  query Query_Class($id: ID!) {
    Class(id: $id) {
      __typename
      id
      title
      subtitle
      url_title
      full_url
      entry_date {
        iso8601
        yyyymmdd
      }
      no_text_image(params: { width: 1600 }) {
        processed_url
      }
      snippet(limit: 30000)
      short_summary
      seo_title
      parsed_body(params: { width: 800 })
      completed_count
      entry_type
      jwplayer_id
      media_source
      media_download
      media_duration {
        iso8601
        group
      }
      tags {
        id
        text
        url_title
      }
      teacher {
        id
        full_name
        url_title
        image(params: { width: 244 }) {
          processed_url
        }
        snippet
      }
      secondary_teacher {
        id
        full_name
        url_title
        image(params: { width: 244 }) {
          processed_url
        }
        snippet
      }
      next {
        localized_path
      }
      prev {
        localized_path
      }
      style {
        id
        name
      }
      intensity {
        id
        name
      }
      level {
        id
        name
      }
      props {
        id
        name
      }
      focus {
        id
        name
      }
    }
  }
`;

export const RN_Query_Meditation = gql`
  query RN_Query_Meditation($id: ID!) {
    Meditation(id: $id) {
      __typename
      id
      language
      title
      subtitle
      url_title
      completed_count
      entry_date {
        iso8601
        yyyymmdd
      }
      no_text_image(params: { width: 1600 }) {
        processed_url
      }
      short_summary
      seo_title
      parsed_body(params: { width: 800 })
      snippet(limit: 30000)
      language
      teacher {
        ...Fragment_TeacherCard
      }
      entry_type
      jwplayer_id
      media_source
      media_download
      media_duration {
        group
      }
      tags {
        text
        url_title
      }
      secondary_teacher {
        full_name
        image(params: { width: 244 }) {
          processed_url
        }
        snippet
        about_me
        id
      }
      square_image(params: { width: 375 }) {
        processed_url
      }
      next {
        path
      }
      prev {
        path
      }
      style {
        name
        url_title
      }
      focus {
        name
        url_title
      }
    }
  }
  ${Fragment_TeacherCard}
`;

export const RN_Query_Article = gql`
  query RN_Query_Article($id: ID!) {
    Article(id: $id) {
      __typename
      id
      language
      title
      subtitle
      url_title
      entry_date {
        iso8601
        yyyymmdd
      }
      no_text_image(params: { width: 1600 }) {
        processed_url
      }
      square_image(params: { width: 375 }) {
        processed_url
      }
      short_summary
      seo_title
      parsed_body(params: { width: 800 })
      snippet(limit: 30000)
      language
      teacher {
        ...Fragment_TeacherCard
      }
      channel {
        id
        name
        url_title
      }
      topic {
        id
        name
        url_title
      }
      entry_type
      jwplayer_id
      media_source
      media_download
      media_duration {
        group
        iso8601
      }
      tags {
        text
        url_title
      }
      secondary_teacher {
        full_name
        image(params: { width: 244 }) {
          processed_url
        }
        about_me
        snippet
        id
        url_title
      }
      next {
        path
      }
      prev {
        path
      }
    }
  }
  ${Fragment_TeacherCard}
`;

export const Query_Course_CoursePlayerPage = gql`
  query Query_Course_CoursePlayerPage($id: ID!) {
    Course(id: $id) {
      __typename
      id
      title
      subtitle
      url_title
      description
      short_description
      full_url
      image(params: { width: 760 }) {
        processed_url
      }
      categories {
        id
        name
      }
      sales_page_select {
        background_video
        lead_image(params: { width: 1600 }) {
          processed_url
        }
        caption_title
        caption_body
        jwplayer_id
        buttons {
          id
          text
          url
          alt_text
        }
        countdown {
          timestamp
          rss
          yyyymmdd
        }
        countdown_text
        banner {
          url
        }
        benefits {
          id
          body
        }
        duration
        sections {
          id
          body
        }
      }
      ecourse_price
      address_needed
      email_receipt
      upcoming_block
      upcoming_until {
        iso8601
        timestamp
        yyyymmdd
        rss
      }
      language
      no_text_image(params: { width: 1800 }) {
        processed_url
      }
      teachers {
        localized_path
        id
        full_name
        about_me
        snippet
        url_title
        image(params: { width: 244 }) {
          url
          alt_text
          processed_url
        }
      }
      access_type
      chapters {
        id
        name
        modules {
          id
          display_name
          module_type
          quiz_or_live_embed
          file
          jwplayer_id
          article_title
          article_subtitle
          article_body
          snippet(limit: 600)
          media_duration {
            seconds
          }
          media_download
          media_source
        }
      }
    }
  }
`;
