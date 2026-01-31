import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Film, Heart, Bookmark, Home, Sun, Moon } from 'lucide-react';

const Navbar = ({ theme, toggleTheme }) => {
  const favoritesCount = useSelector((state) => state.favorites.favorites.length);
  const watchlistCount = useSelector((state) => state.watchlist.watchlist.length);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top shadow-sm px-3">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <div className="bg-primary p-2 rounded-3 text-white d-flex align-items-center justify-content-center">
            <Film size={20} />
          </div>
          <span className="fw-bold h4 mb-0" style={{ fontFamily: 'Outfit', letterSpacing: '-0.5px' }}>CineFlux</span>
        </Link>

        <div className="d-flex align-items-center gap-3 order-lg-last">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <button
            className="navbar-toggler border-0 shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-2 align-items-center">
            <li className="nav-item">
              <Link className={`nav-link d-flex align-items-center gap-2 ${isActive('/') ? 'active' : ''}`} to="/">
                <Home size={18} /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link d-flex align-items-center gap-2 ${isActive('/favorites') ? 'active' : ''}`} to="/favorites">
                <Heart size={18} /> Favorites
                {favoritesCount > 0 && (
                  <span className="badge-custom ms-1">{favoritesCount}</span>
                )}
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link d-flex align-items-center gap-2 ${isActive('/watchlist') ? 'active' : ''}`} to="/watchlist">
                <Bookmark size={18} /> Watchlist
                {watchlistCount > 0 && (
                  <span className="badge-custom ms-1">{watchlistCount}</span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
