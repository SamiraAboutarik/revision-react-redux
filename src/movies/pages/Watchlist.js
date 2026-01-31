import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWatchlist, clearWatchlist } from '../features/watchlistSlice';
import RatingStars from '../components/RatingStars';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, BookmarkX, Film, Eraser } from 'lucide-react';
import { toast } from 'react-hot-toast';

const Watchlist = () => {
  const watchlist = useSelector(state => state.watchlist.watchlist);
  const dispatch = useDispatch();

  const handleRemove = (id, title) => {
    dispatch(removeFromWatchlist(id));
    toast.error(`${title} removed from Watchlist`, {
      icon: '🗑️',
    });
  };

  const handleClearAll = () => {
    dispatch(clearWatchlist());
    toast.success('Watchlist cleared', {
      icon: '🧹',
    });
  };

  return (
    <div className="container py-5">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="d-flex justify-content-between align-items-center mb-5"
      >
        <div>
          <h2 className="display-5 fw-bold mb-2 text-main" style={{ fontFamily: 'Outfit' }}>
            My Watchlist
          </h2>
          <p className="text-muted">Movies you're planning to see.</p>
        </div>

        {watchlist.length > 0 && (
          <button
            className="btn btn-outline-warning d-flex align-items-center gap-2"
            onClick={handleClearAll}
          >
            <Eraser size={18} /> Clear All
          </button>
        )}
      </motion.div>

      <div className="row g-4">
        <AnimatePresence mode="popLayout">
          {watchlist.map(movie => (
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
                    <Trash2 size={16} /> Remove
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {watchlist.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-5 glass rounded-4"
        >
          <div className="text-muted mb-3">
            <BookmarkX size={64} strokeWidth={1.5} opacity={0.5} />
          </div>
          <h4 className="text-muted">Watchlist is empty</h4>
          <p className="text-muted small">Explore movies and add them here to keep track!</p>
        </motion.div>
      )}
    </div>
  );
};

export default Watchlist;

