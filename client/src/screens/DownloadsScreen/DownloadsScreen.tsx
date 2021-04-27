import React, { useState, useEffect } from "react";
// import { DownloadCard } from "./DownloadCard";
import { HomeScreenCard } from "../HomeScreen/HomeScreenCard";
import { fs } from '../../mocks/fetchBlob';

export const DownloadsScreen: React.FC = () => {
  const [classes, setClasses] = useState<any[]>([]);
  const [meditations, setMeditations] = useState<any[]>([]);
  const [articles, setArticles] = useState<any[]>([]);
  const [courses, setCourses] = useState<any[]>([]);

  useEffect(() => {
    async function fetchOfflineData() {
      if (await fs.exists('classes')) {
        const currentContentArray = await fs.readFile('classes');
        const parsedData = JSON.parse(currentContentArray as string);
        setClasses(parsedData);
      }
      if (await fs.exists('meditations')) {
        const currentContentArray = await fs.readFile('meditations');
        const parsedData = JSON.parse(currentContentArray as string);
        setMeditations(parsedData);
      }
      if (await fs.exists('articles')) {
        const currentContentArray = await fs.readFile('articles');
        const parsedData = JSON.parse(currentContentArray as string);
        setArticles(parsedData);
      }
      if (await fs.exists('courses')) {
        const currentContentArray = await fs.readFile('courses');
        const parsedData = JSON.parse(currentContentArray as string);
        setCourses(parsedData);
      }
    }

    fetchOfflineData();
  }, [])

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Downloads</h1>

      <h4>Downloaded Classes</h4>
      <div style={{ display: "flex" }}>
        {classes.map(({ id, title, no_text_image }) => (
          <HomeScreenCard
            key={id}
            title={title}
            img={no_text_image.processed_url}
            navArgs={{ route: "ClassScreen", params: { id, isOffline: true } }}
          />
        ))}
      </div>

      <h4>Downloaded Meditations</h4>
      <div style={{ display: "flex" }}>
        {meditations.map(({ id, title, no_text_image }) => (
          <HomeScreenCard
            key={id}
            title={title}
            img={no_text_image.processed_url}
            navArgs={{ route: "MeditationScreen", params: { id, isOffline: true } }}
          />
        ))}
      </div>

      <h4>Downloaded Articles</h4>
      <div style={{ display: "flex" }}>
        {articles.map(({ id, title, no_text_image }) => (
          <HomeScreenCard
            key={id}
            title={title}
            img={no_text_image.processed_url}
            navArgs={{ route: "ArticleScreen", params: { id, isOffline: true } }}
          />
        ))}
      </div>

      <h4>Downloaded Courses</h4>
      <div style={{ display: "flex" }}>
        {courses.map(({ id, title, no_text_image }) => (
          <HomeScreenCard
            key={id}
            title={title}
            img={no_text_image?.processed_url || ""}
            navArgs={{ route: "CourseScreen", params: { id, isOffline: true } }}
          />
        ))}
      </div>
    </>
  );
};
