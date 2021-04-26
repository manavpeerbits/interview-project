import React from "react";

interface Props {
  msg: string;
}

export const ErrorMessage: React.FC<Props> = ({ msg }) => <h6>{msg}</h6>;
