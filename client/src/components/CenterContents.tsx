import React from "react";

interface Props {
  style?: React.CSSProperties;
}

export const CenterContents: React.FC<Props> = ({ children , style}) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      margin: "auto",
      ...style
    }}
  >
    {children}
  </div>
);
