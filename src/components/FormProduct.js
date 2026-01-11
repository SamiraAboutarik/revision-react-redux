import { useDispatch, useSelector } from "react-redux";
import { addProduct, editProduct } from "../features/productSlice";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function FormProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams(); // pour edit
  const products = useSelector(state => state.products.items);

  const editingProduct = products.find(p => p.id === Number(id));

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("electronics");
  const [rating, setRating] = useState(0);

  useEffect(() => {
    if (editingProduct) {
      setName(editingProduct.name);
      setPrice(editingProduct.price);
      setCategory(editingProduct.category);
      setRating(editingProduct.rating);
    }
  }, [editingProduct]);

  const handleSubmit = e => {
    e.preventDefault();
    if (editingProduct) {
      dispatch(editProduct({ id: editingProduct.id, name, price: Number(price), category, rating: Number(rating) }));
    } else {
      dispatch(addProduct({ id: Date.now(), name, price: Number(price), category, rating: Number(rating) }));
    }
    navigate("/");
  };

  return (
    <div className="container mt-4">
      <h3>{editingProduct ? "Edit Product" : "Add Product"}</h3>
      <form onSubmit={handleSubmit} className="card p-3">
        <input
          className="form-control mb-2"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />

        <input
          className="form-control mb-2"
          placeholder="Price"
          type="number"
          value={price}
          onChange={e => setPrice(e.target.value)}
          required
        />

        <select
          className="form-select mb-2"
          value={category}
          onChange={e => setCategory(e.target.value)}
        >
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
          <option value="new">New</option>
        </select>

        <label>Rating:</label>
        <input
          type="number"
          min="0"
          max="5"
          className="form-control mb-2"
          value={rating}
          onChange={e => setRating(e.target.value)}
        />

        <button className="btn btn-success">{editingProduct ? "Save Changes" : "Add Product"}</button>
      </form>
    </div>
  );
}
