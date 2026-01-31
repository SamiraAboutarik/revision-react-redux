import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGenre, setRatingFilter } from '../features/moviesSlice';
import RatingStars from './RatingStars';
import { Filter } from 'lucide-react';

const Filters = () => {
  const dispatch = useDispatch();
  const { selectedGenre, ratingFilter } = useSelector(state => state.movies);

  const genres = ['All', 'Action', 'Sci-Fi', 'Drama', 'Comedy'];

  return (
    <div className="card border-0 glass shadow-sm mb-4 rounded-4">
      <div className="card-body p-4">
        <div className="d-flex align-items-center gap-2 mb-4">
          <Filter size={20} className="text-primary" />
          <h5 className="mb-0 fw-bold text-main" style={{ fontFamily: 'Outfit' }}>Refine Results</h5>
        </div>

        <div className="row g-4 align-items-center">
          <div className="col-md-6">
            <label className="form-label small fw-bold text-muted text-uppercase tracking-wider">Category</label>
            <div className="d-flex flex-wrap gap-2">
              {genres.map(genre => (
                <button
                  key={genre}
                  onClick={() => dispatch(setGenre(genre))}
                  className={`btn btn-sm rounded-pill px-3 py-2 fw-medium transition-all ${selectedGenre === genre
                    ? 'btn-primary shadow-sm'
                    : 'btn-outline-secondary text-main border-secondary-subtle'
                    }`}
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>

          <div className="col-md-6">
            <label className="form-label small fw-bold text-muted text-uppercase tracking-wider">Minimum Rating</label>
            <div className="glass p-3 rounded-3 border d-inline-block">
              <RatingStars
                rating={ratingFilter}
                onSelect={rating => dispatch(setRatingFilter(rating))}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;

