import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null,
  pokemons: [],
  nextPage: null,
  previousPage: null,
  currentUrl: 'https://pokeapi.co/api/v2/pokemon',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setPokemons: (state, { payload }) => {
      const seen = new Set();
      // update state pokemon
      const updatePokemon = [...state.pokemons, payload];
      // since we're persisting data, we need to removeDuplicate pokemon
      const removeDuplicate = updatePokemon.filter((el) => {
        const duplicate = seen.has(el.id);
        seen.add(el.id);
        return !duplicate;
      });

      state.pokemons = removeDuplicate;
      state.isLoading = false;
      state.error = null;
    },
    setNextPage: (state, { payload }) => {
      state.nextPage = payload;
      state.isLoading = false;
      state.error = null;
    },
    setPreviousPage: (state, { payload }) => {
      state.previousPage = payload;
      state.isLoading = false;
      state.error = null;
    },
    setLoading: (state, { payload }) => {
      state.isLoading = payload;
      state.error = null;
    },
    setUrl: (state, { payload }) => {
      state.currentUrl = payload;
      state.error = null;
    },
    setError: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

export const {
  setPokemons,
  setNextPage,
  setPreviousPage,
  setLoading,
  setUrl,
  setError,
} = appSlice.actions;

// Selectors
export const selectPokemons = (state) => state.app.pokemons;
export const selectNextPage = (state) => state.app.nextPage;
export const selectPreviousPage = (state) => state.app.previousPage;
export const selectLoading = (state) => state.app.isLoading;
export const selectCurrentUrl = (state) => state.app.currentUrl;
export const selectError = (state) => state.app.error;

export default appSlice.reducer;
