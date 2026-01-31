import React from 'react';
import { useDispatch } from 'react-redux';
import { addFavorite } from '../features/favoritesSlice';
import { addToWatchlist } from '../features/watchlistSlice';
import RatingStars from './RatingStars';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { Heart, Plus, Star } from 'lucide-react';

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();

  const handleAddFavorite = () => {
    dispatch(addFavorite(movie));
    toast.success(`${movie.title} added to Favorites!`, {
      icon: '❤️',
    });
  };

  const handleAddToWatchlist = () => {
    dispatch(addToWatchlist(movie));
    toast.success(`${movie.title} added to Watchlist!`, {
      icon: '➕',
    });
  };

  return (
    <motion.div
      className="card h-100 movie-card glass"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="card-body text-center d-flex flex-column justify-content-between">
        <div>
          <div className="fs-1 mb-3" style={{ fontSize: '4rem' }}>{movie.poster || '🎬'}</div>
          <h5 className="card-title mb-2 text-primary">{movie.title}</h5>
          <p className="text-muted small mb-3">
            <span className="badge border text-main opacity-75" style={{ background: 'rgba(128,128,128,0.1)' }}>{movie.genre}</span>
          </p>
          <div className="d-flex justify-content-center mb-3">
            <RatingStars rating={movie.rating} />
          </div>
        </div>

        <div className="d-grid gap-2 mt-auto">
          <button
            className="btn btn-outline-primary btn-sm d-flex align-items-center justify-content-center gap-2"
            onClick={handleAddFavorite}
          >
            <Heart size={16} /> Add to Favorites
          </button>

          <button
            className="btn btn-primary btn-sm d-flex align-items-center justify-content-center gap-2"
            onClick={handleAddToWatchlist}
          >
            <Plus size={16} /> Add to Watchlist
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default MovieCard;

