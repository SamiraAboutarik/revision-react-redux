import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addMovies } from '../features/moviesSlice';
import Filters from '../components/Filters';
import MovieList from '../components/MovieList';
import { motion } from 'framer-motion';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const initialMovies = [
      { id: 1, title: 'The Matrix', genre: 'Action', rating: 4.5, poster: '🕶️' },
      { id: 2, title: 'Inception', genre: 'Sci-Fi', rating: 4.8, poster: '🌀' },
      { id: 3, title: 'The Godfather', genre: 'Drama', rating: 5, poster: '🌹' },
      { id: 4, title: 'Pulp Fiction', genre: 'Drama', rating: 4.6, poster: '🔫' },
      { id: 5, title: 'Interstellar', genre: 'Sci-Fi', rating: 4.7, poster: '👨‍🚀' },
      { id: 6, title: 'The Dark Knight', genre: 'Action', rating: 4.9, poster: '🦇' },
    ];
    dispatch(addMovies(initialMovies));
  }, [dispatch]);

  return (
    <div className="container py-5">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-5"
      >
        <h1 className="display-4 fw-extrabold mb-2 text-main" style={{ fontFamily: 'Outfit' }}>
          Explore Your Universe
        </h1>
        <p className="lead text-main opacity-75">Discover, track, and share your favorite cinematic experiences.</p>
      </motion.div>

      <div className="mb-5">
        <Filters />
      </div>

      <MovieList />
    </div>
  );
};

export default Home;

