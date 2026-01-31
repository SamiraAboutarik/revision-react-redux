import React from 'react';
import { Star } from 'lucide-react';

const RatingStars = ({ rating, onSelect }) => {
  return (
    <div className="d-flex gap-1 align-items-center">
      {[1, 2, 3, 4, 5].map(star => (
        <Star
          key={star}
          size={18}
          fill={star <= rating ? "#f59e0b" : "transparent"}
          className={star <= rating ? 'text-warning' : 'text-muted opacity-50'}
          style={{
            cursor: onSelect ? 'pointer' : 'default',
            transition: 'all 0.2s ease'
          }}
          onClick={() => onSelect && onSelect(star)}
        />
      ))}
      <span className="ms-2 small fw-bold text-main opacity-75">{rating}</span>
    </div>
  );
};

export default RatingStars;

