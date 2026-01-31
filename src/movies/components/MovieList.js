import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';
import { motion, AnimatePresence } from 'framer-motion';

const MovieList = () => {
  const { movies, selectedGenre, ratingFilter } = useSelector(state => state.movies);

  const filteredMovies = movies.filter(movie => {
    const genreMatch =
      selectedGenre === 'All' || movie.genre === selectedGenre;

    const ratingMatch =
      Math.floor(movie.rating) >= ratingFilter;

    return genreMatch && ratingMatch;
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <motion.div
      className="row g-4"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <AnimatePresence mode="popLayout">
        {filteredMovies.map(movie => (
          <motion.div
            className="col-md-4 col-sm-6"
            key={movie.id}
            variants={item}
            layout
          >
            <MovieCard movie={movie} />
          </motion.div>
        ))}
      </AnimatePresence>

      {filteredMovies.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="col-12 text-center py-5 glass rounded-4 mt-4"
        >
          <div className="fs-1 mb-3">🔍</div>
          <h4 className="text-muted">No movies match your filters</h4>
          <p className="text-muted small">Try adjusting your genre or rating selection.</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default MovieList;

