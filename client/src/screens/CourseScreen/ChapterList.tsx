import React, { Fragment } from "react";
import { Media, PDF, ArticleContent } from "../../mocks";
import { isNotNull } from "../../types";
import { CourseScreenQuery } from "../../graphql";

interface Props {
  chapters: CourseScreenQuery["Course"]["chapters"];
}

export const ChapterList: React.FC<Props> = ({ chapters }) => (
  <ul>
    {(chapters || []).filter(isNotNull).map((chapter, idx) => (
      <Fragment key={chapter.id}>
        <li>
          <span>{chapter.name || `Chapter ${idx + 1}`}</span>
        </li>
        <ul>
          {chapter.modules.map(module => (
            <Fragment key={module.id}>
              <li style={{ padding: 15, margin: 15, background: "#cddaea" }}>
                {module.display_name}
                {(module.module_type === "AUDIO" ||
                  module.module_type === "VIDEO") && (
                  <Media src={module.media_source || ""} />
                )}
                {module.module_type === "PDF" && (
                  <PDF src={module.file || ""} />
                )}
                {module.module_type === "ARTICLE" && (
                  <ArticleContent content={module.article_body || ""} />
                )}
              </li>
            </Fragment>
          ))}
        </ul>
      </Fragment>
    ))}
  </ul>
);
