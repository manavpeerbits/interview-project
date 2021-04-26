import React, { useContext } from "react";
import { OfflineButton } from "./OfflineButton";
import { CenterContents } from "../components";
import { useNavigation } from "../navigation";
import { AppContext } from "../App";

interface Props {
  navArgs: Parameters<ReturnType<typeof useNavigation>["navigate"]>[0];
}

const NavButton: React.FC<Props> = ({ navArgs, children }) => {
  const { navigate, activeRoute } = useNavigation();
  const isActive = activeRoute.route === navArgs.route;
  const background = isActive ? "#375782" : undefined;
  const color = isActive ? "white" : undefined;
  const buttonStyles = {
    marginLeft: "20px",
    fontSize: "30px",
    background,
    color
  };
  return (
    <button
      style={buttonStyles}
      onClick={() => {
        navigate(navArgs);
      }}
    >
      {children}
    </button>
  );
};

const headerStyles: React.CSSProperties = {
  backgroundColor: "#282c34",
  minHeight: "100px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  color: "white"
};

export const Nav: React.FC = () => {
  const { isOffline } = useContext(AppContext);
  return (
    <div>
      <header style={headerStyles}>
        <CenterContents style={{ flexDirection: "row" }}>
          {!isOffline && (
            <NavButton navArgs={{ route: "HomeScreen", params: {} }}>
              Home
            </NavButton>
          )}
          <NavButton navArgs={{ route: "DownloadsScreen", params: {} }}>
            Downloads
          </NavButton>
        </CenterContents>
        <OfflineButton />
      </header>
    </div>
  );
};
