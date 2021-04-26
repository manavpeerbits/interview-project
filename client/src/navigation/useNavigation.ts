import { useContext } from "react";
import { NavigationContext } from "./NavigationProvider";

export const useNavigation = () => {
  const { activeRoute, setActiveRoute: navigate } = useContext(
    NavigationContext
  );

  return { activeRoute, navigate };
};
