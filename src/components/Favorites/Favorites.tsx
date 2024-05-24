import React from "react";
import "./Favorites.css";
import { useFavoritesStore } from "../../store/store";

export const Favorites = () => {
  const favoritesList = useFavoritesStore((state) => state.favoritesList);
  const removeFavorite = useFavoritesStore((state) => state.removeFavorite);

  return (
    <div className="favorite-column">
      {favoritesList.map((joke) => {
        return (
          <div className="favorite-row">
            {joke.joke}
            <div
              onClick={() => removeFavorite(joke)}
              className="favorite-remove-button"
            >
              remove
            </div>
          </div>
        );
      })}
    </div>
  );
};
