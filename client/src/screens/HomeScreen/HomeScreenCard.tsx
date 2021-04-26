import React from "react";
import { useNavigation } from "../../navigation";

interface Props {
  title: string;
  img: string;
  navArgs: Parameters<ReturnType<typeof useNavigation>["navigate"]>[0];
}
export const HomeScreenCard: React.FC<Props> = ({ navArgs, title, img }) => {
  const { navigate } = useNavigation();
  const style: React.CSSProperties = {
    height: 200,
    width: 200,
    marginLeft: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly"
  };
  return (
    <button style={style} onClick={() => navigate(navArgs)}>
      <img src={img} style={{ height: 100 }} />
      {title}
    </button>
  );
};
