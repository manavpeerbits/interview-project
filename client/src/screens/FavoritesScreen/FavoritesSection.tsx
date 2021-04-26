import React from "react";
import { FavoriteCard } from "./FavoriteCard";
import { Favorite } from "./types";

interface Props {
  heading: string;
  items: Favorite[];
  onClickItem(item: Favorite): void;
}

export const FavoritesSection: React.FC<Props> = ({
  items,
  heading,
  onClickItem
}) => {
  return !items.length ? null : (
    <div>
      <h4>{heading}</h4>
      {items.map(item => (
        <div
          key={item.content.id}
          onClick={() => onClickItem(item)}
          style={{ marginBottom: 20 }}
        >
          <FavoriteCard {...item} />
        </div>
      ))}
    </div>
  );
};
