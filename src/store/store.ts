import { create } from "zustand";
import { Joke } from "../types/types";

interface FavoritesStore {
    favoritesList: Joke[];
    addFavorite: (joke: Joke) => void;
    removeFavorite: (joke: Joke) => void;
}

export const useFavoritesStore = create<FavoritesStore>()((set) => ({
    favoritesList: [],
    addFavorite: (joke: Joke) => set((state) => {
        if(!state.favoritesList.includes(joke) && joke.id !== '') {
            return (
                {favoritesList: [...state.favoritesList, joke]}
            )
        } else {
            return (
                {favoritesList: [...state.favoritesList]}
            )
        }
    }),
    removeFavorite: (joke: Joke) => {
        set((state) => ({
            favoritesList: state.favoritesList.filter((element) => element.id !== joke.id)
        }))
    }
    
}))

