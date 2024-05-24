import React, { useState } from "react";
import { Joke } from "../../types/types";
import { useFavoritesStore } from "../../store/store";
import { Favorites } from "../Favorites/Favorites";
import "./Main.css";

export const Main = () => {
  const [jokeState, setJokeState] = useState<Joke>({ id: "", joke: "click some buttons!" });
  const addFavorite = useFavoritesStore((state) => state.addFavorite);

  async function callToAPI() {
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    });
    const responseData = await response.json();
    return responseData;
  }

  async function fetchNewJoke() {
    let responseFromAPI = await callToAPI();

    while (responseFromAPI.id === jokeState.id) {
      responseFromAPI = await callToAPI();
    }
    setJokeState({ id: responseFromAPI.id, joke: responseFromAPI.joke });
  }

  return (
    <section>
      <div className="main-container">
        <h1>Joke Generator</h1>
        <div className="joke-button" onClick={() => fetchNewJoke()}>
          Joke Please!
        </div>
        <div
          className="favorites-button"
          onClick={() => addFavorite(jokeState)}
        >
          Add to Favorites
        </div>
        <div className="joke-text">
        {jokeState.joke && <div>{jokeState.joke}</div>}
        </div>
        <Favorites/>
      </div>
    </section>
  );
};
