import { createSlice } from '@reduxjs/toolkit';
import { loadState, saveState } from '../utils/localStorage';

const initialState = {
  watchlist: loadState('watchlist') || []
};

const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState,
  reducers: {
    addToWatchlist: (state, action) => {
      if (!state.watchlist.find(m => m.id === action.payload.id)) {
        state.watchlist.push(action.payload);
        saveState('watchlist', state.watchlist);
      }
    },
    removeFromWatchlist: (state, action) => {
      state.watchlist = state.watchlist.filter(m => m.id !== action.payload);
      saveState('watchlist', state.watchlist);
    },
    clearWatchlist: (state) => {
      state.watchlist = [];
      saveState('watchlist', state.watchlist);
    }
  }
});

export const { addToWatchlist, removeFromWatchlist, clearWatchlist } = watchlistSlice.actions;
export default watchlistSlice.reducer;