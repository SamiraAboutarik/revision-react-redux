// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import ListProducts from "./components/ListProducts";
// import Cart from "./components/Cart";
// import DetailProduct from "./components/DetailProduct";
// import FormProduct from "./components/FormProduct";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<ListProducts />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/detail/:id" element={<DetailProduct />} />
//         <Route path="/add" element={<FormProduct />} />
//         <Route path="/edit/:id" element={<FormProduct />} />

//       </Routes>
//     </BrowserRouter>
//   );
// }

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './movies/components/Navbar';
import Home from './movies/pages/Home';
import Favorites from './movies/pages/Favorites';
import Watchlist from './movies/pages/Watchlist';
import { Toaster } from 'react-hot-toast';

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <BrowserRouter>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: theme === 'dark' ? '#1e293b' : '#fff',
            color: theme === 'dark' ? '#fff' : '#000',
          }
        }}
      />
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Contenu principal */}
      <main className="py-4 bg-light-custom min-vh-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;


