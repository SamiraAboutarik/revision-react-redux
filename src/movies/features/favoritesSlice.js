import { createSlice } from '@reduxjs/toolkit';
import { loadState, saveState } from '../utils/localStorage';

const initialState = {
  favorites: loadState('favorites') || []
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      if (!state.favorites.find(m => m.id === action.payload.id)) {
        state.favorites.push(action.payload);
        saveState('favorites', state.favorites);
      }
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(m => m.id !== action.payload);
      saveState('favorites', state.favorites);
    }
  }
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;