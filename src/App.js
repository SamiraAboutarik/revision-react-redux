import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ListProducts from "./components/ListProducts";
import Cart from "./components/Cart";
import DetailProduct from "./components/DetailProduct";
import FormProduct from "./components/FormProduct";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ListProducts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/detail/:id" element={<DetailProduct />} />
        <Route path="/add" element={<FormProduct />} />
        <Route path="/edit/:id" element={<FormProduct />} />

      </Routes>
    </BrowserRouter>
  );
}
