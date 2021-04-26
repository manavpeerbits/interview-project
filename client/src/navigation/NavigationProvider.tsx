import {
  DownloadsScreen,
  HomeScreen,
  ClassScreen,
  MeditationScreen,
  CourseScreen,
  ArticleScreen,
  ClassPlayerScreen,
  CoursePlayerScreen,
  ArticlePlayerScreen,
  MeditationPlayerScreen
} from "../screens";
import { ErrorMessage } from "../components";
import { FavoriteContent } from '../screens/FavoritesScreen/types'
import React, { createContext, useState, FunctionComponent } from "react";

type TSFixMe = {
  [key: string]: FunctionComponent<any>;
}

type RouteParams = {
  content?: FavoriteContent;
  id?: string;
}

type InitialRouteType = {
  route: string;
  params?: RouteParams;
}

const routes: TSFixMe = {
  HomeScreen,
  DownloadsScreen,
  ClassScreen,
  MeditationScreen,
  CourseScreen,
  ArticleScreen,
  ClassPlayerScreen,
  CoursePlayerScreen,
  ArticlePlayerScreen,
  MeditationPlayerScreen
};
const initialRoute = { route: "HomeScreen", params: {} };

export const NavigationContext = createContext<{
  activeRoute: InitialRouteType;
  setActiveRoute: (a: InitialRouteType) => void;
}>({
  activeRoute: initialRoute,
  setActiveRoute: () => console.warn("Missing navigation provider")
});

export const NavigationProvider: React.FC = ({ children }) => {
  const [activeRoute, setActiveRoute] = useState<InitialRouteType>(initialRoute);
  const ScreenComponent = routes[activeRoute.route];
  if (!ScreenComponent) return <ErrorMessage msg="Missing ScreenComponent!" />;

  return (
    <NavigationContext.Provider
      value={{
        activeRoute,
        setActiveRoute
      }}
    >
      {children}
      <div style={{ padding: 30 }}>
        <ScreenComponent {...activeRoute.params} />
      </div>
    </NavigationContext.Provider>
  );
};
