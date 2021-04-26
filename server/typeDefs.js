const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    Class(id: ID!): Class!
    Article(id: ID!): Article!
    Course(id: ID!): Course!
    Meditation(id: ID!): Meditation!
    HomeScreen: HomeScreen!
  }

  type HomeScreen {
    classes: [Class!]!
    articles: [Article!]!
    courses: [Course!]!
    meditations: [Meditation!]!
  }

  #  --- CLASS ---

  type Class {
    id: ID!
    title: String!
    subtitle: String
    url_title: String!
    path: String!
    full_url: String!
    localized_path: String!
    entry_date: Date!
    landing_page_image(params: ImageParams): Image!
    no_text_image(params: ImageParams): Image!
    square_image(params: ImageParams): Image!
    short_summary: String!
    seo_title: String!
    parsed_body(params: ImageParams): String!
    snippet(limit: Int): String!
    language: Language!
    next: Class
    prev: Class
    completed_count: Int!

    teacher: Teacher!
    entry_type: ArticleType!
    jwplayer_id: String!
    media_source: String!
    media_download: String!
    media_duration: Duration!
    tags: [Tag]
    secondary_teacher: Teacher
    style: [Category!]!
    intensity: [Category!]!
    level: [Category!]!
    anatomy: [Category!]!
    props: [Category]
    focus: [Category]
    secondary_style: [Category]
    energetic_effect: [Category]
    time_of_day: [Category]
    movement: [Category]
    wellbeing: [Category]
    poses: [Category]
    goals: [Category]
  }

  input ClassFilter {
    language: Language
    categoryId: Int
    tagId: Int
  }

  enum ClassOrderBy {
    createdAt_ASC
    createdAt_DESC
    RANDOM
  }

  #  --- IMAGE ---

  type Image {
    id: ID!
    name: String!
    path: String!
    url: String!
    caption: String
    alt_text: String
    processed_url: String!
  }

  input ImageParams {
    width: Int!
  }

  #  --- CATEGORY ---

  type Category {
    id: ID!
    language: Language!
    group: CategoryGroup!
    name: String!
    url_title: String!
    description: String
    image(params: ImageParams): Image
  }

  type CategoryGroup {
    id: ID!
    name: String!
  }

  input CategoryFilter {
    groupId: Int
  }

  enum CategoryOrderBy {
    categoryOrder_ASC
    categoryOrder_DESC
    RANDOM
  }

  type Teacher {
    id: ID!
    path: String!
    full_url: String!
    localized_path: String!
    full_name: String!
    first_name: String!
    last_name: String
    url_title: String!
    language: Language!
    entry_date: Date!
    image(params: ImageParams): Image!
    hero(params: ImageParams): Image
    video: String @deprecated
    jwplayer_id: String
    about_me: String
    snippet(limit: Int): String
    featured_teacher_order: Int
    article_count: Int!
    course_count: Int!
    styles: [Category]
    main_style: Category
    articles: [Article]
    classes: [Class]
    courses: [Course]
    meditations: [Meditation]
  }
  type Tag {
    id: ID!
    text: String!
    url_title: String!
  }

  type Date {
    iso8601: DateTime!
    timestamp: String!
    yyyymmdd: String!
    rss: String!
  }

  scalar DateTime

  #  --- ARTICLE ---

  type Article {
    id: ID!
    title: String!
    subtitle: String @deprecated
    url_title: String!
    path: String!
    full_url: String!
    localized_path: String!
    entry_date: Date!
    landing_page_image(params: ImageParams): Image! @deprecated
    no_text_image(params: ImageParams): Image!
    square_image(params: ImageParams): Image!
    short_summary: String!
    seo_title: String! @deprecated
    parsed_body(params: ImageParams): String!
    snippet(limit: Int): String!
    language: Language!
    next: Article
    prev: Article

    teacher: Teacher!
    channel: Category!
    topic: Category!
    entry_type: ArticleType!
    jwplayer_id: String
    media_source: String
    media_download: String
    media_duration: Duration
    tags: [Tag]
    secondary_teacher: Teacher
  }

  type Duration {
    seconds: Int!
    iso8601: String!
    group: String!
    url_title: String!
    timecode: String!
  }

  enum ArticleType {
    ARTICLE
    VIDEO
    AUDIO
    POSE
    LIVE
  }

  enum Language {
    ENGLISH
    SPANISH
  }

  input ArticleFilter {
    language: Language
    categoryId: Int
  }

  enum ArticleOrderBy {
    createdAt_ASC
    createdAt_DESC
    RANDOM
  }

  type Course {
    id: ID!
    title: String!
    subtitle: String @deprecated
    url_title: String!
    path: String!
    full_url: String!
    localized_path: String!
    access_type: CourseAccessType!
    entry_date: Date!
    ecourse_price: Float
    categories: [Category]
    image(params: ImageParams): Image
    no_text_image(params: ImageParams): Image
    square_image(params: ImageParams): Image
    lead_video_url: String @deprecated
    teachers: [Teacher]
    ecourse_type: CourseType @deprecated
    description: String
    short_description: String
    snippet(limit: Int): String
    duration: CourseDuration
    chapters: [CourseChapter]
    address_needed: Boolean
    email_receipt: String
    addon: [CourseAddon]
    sales_page_select: SalesPage
    upcoming_block: String
    upcoming_until: Date
    language: Language!
    hubspot_form_id: String
  }

  type CourseDuration {
    text: String!
    url_title: String!
  }

  type CourseChapter {
    id: ID!
    name: String!
    modules: [CourseModule!]!
  }

  type CourseModule {
    id: ID!
    title: String!
    display_name: String
    module_type: CourseModuleType!
    quiz_or_live_embed: String
    file: String
    entry_date: Date!
    jwplayer_id: String
    media_source: String
    media_download: String
    media_duration: Duration
    article_image(params: ImageParams): Image @deprecated
    article_title: String @deprecated
    article_subtitle: String @deprecated
    article_author: Teacher @deprecated
    article_body: String
    snippet(limit: Int): String
  }

  type CourseAddon {
    id: ID!
    price: Float
    sku: String
    weight: Float
  }

  enum CourseAccessType {
    SUBSCRIBED
    A_LA_CARTE
    FREE
  }

  enum CourseType {
    ECOURSE
    CONFERENCE
  }

  enum CourseModuleType {
    QUIZ
    PDF
    ARTICLE
    VIDEO
    AUDIO
    LIVE
  }

  input CourseFilter {
    language: Language
    categoryId: Int
    excludeCategoryId: Int
    excludeCategoryIds: [Int]
  }

  enum CourseOrderBy {
    createdAt_ASC
    createdAt_DESC
    RANDOM
  }

  #  --- MEDITATION ---

  type Meditation {
    id: ID!
    title: String!
    subtitle: String
    url_title: String!
    path: String!
    full_url: String!
    localized_path: String!
    entry_date: Date!
    landing_page_image(params: ImageParams): Image!
    no_text_image(params: ImageParams): Image!
    square_image(params: ImageParams): Image!
    short_summary: String!
    seo_title: String!
    parsed_body(params: ImageParams): String!
    snippet(limit: Int): String!
    language: Language!
    next: Meditation
    prev: Meditation
    completed_count: Int!

    teacher: Teacher!
    entry_type: ArticleType!
    jwplayer_id: String!
    media_source: String!
    media_download: String!
    media_duration: Duration!
    tags: [Tag]
    secondary_teacher: Teacher
    style: [Category!]!
    focus: [Category]
    time_of_day: [Category]
    goals: [Category]
  }

  input MeditationFilter {
    language: Language
    categoryId: Int
  }

  enum MeditationOrderBy {
    createdAt_ASC
    createdAt_DESC
    RANDOM
  }

  #  --- SALESPAGE ---

  type SalesPage {
    id: ID!
    title: String!
    url_title: String!
    type: SalesPageType!
    banner(params: ImageParams): Image
    lead_image(params: ImageParams): Image
    caption_title: String
    caption_body: String
    buttons: [SalesPageButton]
    lead_sentence: String
    lead_paragraph: String
    jwplayer_id: String
    lead_video: String
    background_video: String
    benefits: [SalesPageBenefit]
    sections: [SalesPageSection]
    duration: String
    countdown: Date
    countdown_text: String
    mempromo_offer_id: String
    course: Course
    exclude_from_remarketing: Boolean
    ad_text: String
    ad_headline: String
    ad_description: String
    ad_deep_link: String
    language: Language!
    entry_date: Date!
  }

  type SalesPageButton {
    id: ID!
    text: String!
    url: String!
    alt_text: String
  }

  type SalesPageBenefit {
    id: ID!
    body: String!
  }

  type SalesPageSection {
    id: ID!
    body: String!
  }

  enum SalesPageType {
    COURSE
    MEMPROMO
  }

  input SalesPageFilter {
    language: Language
    type: SalesPageType
  }

  enum SalesPageOrderBy {
    createdAt_ASC
    createdAt_DESC
    RANDOM
  }
`;

module.exports = { typeDefs };
