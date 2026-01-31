import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite } from '../features/favoritesSlice';
import RatingStars from '../components/RatingStars';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, HeartOff, Film } from 'lucide-react';
import { toast } from 'react-hot-toast';

const Favorites = () => {
  const favorites = useSelector(state => state.favorites.favorites);
  const dispatch = useDispatch();

  const handleRemove = (id, title) => {
    dispatch(removeFavorite(id));
    toast.error(`${title} removed from Favorites`, {
      icon: '💔',
    });
  };

  return (
    <div className="container py-5">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-5"
      >
        <h2 className="display-5 fw-bold mb-2 text-main" style={{ fontFamily: 'Outfit' }}>
          My Favorites
        </h2>
        <p className="text-muted">Your personal hall of fame.</p>
      </motion.div>

      <div className="row g-4">
        <AnimatePresence mode="popLayout">
          {favorites.map(movie => (
            <motion.div
              className="col-md-4 col-sm-6"
              key={movie.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
              layout
            >
              <div className="card h-100 movie-card glass">
                <div className="card-body text-center d-flex flex-column justify-content-between">
                  <div>
                    <div className="fs-1 mb-3" style={{ fontSize: '4rem' }}>{movie.poster || '🎬'}</div>
                    <h5 className="fw-bold text-primary">{movie.title}</h5>
                    <p className="text-muted small mb-2">{movie.genre}</p>
                    <div className="d-flex justify-content-center mb-3">
                      <RatingStars rating={movie.rating} />
                    </div>
                  </div>

                  <button
                    className="btn btn-outline-danger btn-sm d-flex align-items-center justify-content-center gap-2 mt-auto"
                    onClick={() => handleRemove(movie.id, movie.title)}
                  >
                    <Trash2 size={16} /> Remove from Favorites
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {favorites.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-5 glass rounded-4"
        >
          <div className="text-muted mb-3">
            <HeartOff size={64} strokeWidth={1.5} opacity={0.5} />
          </div>
          <h4 className="text-muted">No favorites yet</h4>
          <p className="text-muted small">Go back home and add some movies you love!</p>
        </motion.div>
      )}
    </div>
  );
};

export default Favorites;

