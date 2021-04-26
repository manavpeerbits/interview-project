import React, { useContext } from "react";
import { AppContext } from "../App";
import { useNavigation } from "../navigation";

const divStyles: React.CSSProperties = {
  height: 150,
  width: 150,
  padding: 10,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  flexDirection: "column"
};

export const OfflineButton: React.FC = () => {
  const { isOffline, setIsOffline } = useContext(AppContext);
  const { navigate } = useNavigation();

  const buttonText = isOffline ? "Go Online" : "Go Offline";
  const headingText = isOffline ? "You are offline" : "You are online";
  const background = isOffline ? "#c34242" : "#4e773a";

  const onClick = () => {
    const newIsOffline = !isOffline;
    setIsOffline(newIsOffline);
    if (newIsOffline) {
      navigate({ route: "DownloadsScreen", params: {} });
    } else {
      navigate({ route: "HomeScreen", params: {} });
    }
  };

  return (
    <div
      style={{
        ...divStyles,
        background
      }}
    >
      <h2 style={{ margin: 0, textAlign: 'center' }}>{headingText}</h2>
      <button onClick={onClick}>{buttonText}</button>
    </div>
  );
};
