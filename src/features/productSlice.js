import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      id: 1,
      name: "Phone",
      price: 3000,
      category: "electronics",
      rating: 4
    },
    {
      id: 2,
      name: "Laptop",
      price: 8000,
      category: "electronics",
      rating: 5
    },
    {
      id: 3,
      name: "Shoes",
      price: 500,
      category: "fashion",
      rating: 3
    }
  ],
  search: "",
  category: "all",
  rating:0
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct(state, action) {
      state.items.push(action.payload);
    },
editProduct(state, action) {
  state.items = state.items.map(p =>
    p.id === action.payload.id ? action.payload : p
  );
}
,
    setSearch(state, action) { state.search = action.payload; },
    setCategory(state, action) { state.category = action.payload; },
    setRating(state, action) { state.rating = action.payload; }
  }
});

export const { addProduct, editProduct, setSearch, setCategory, setRating } = productSlice.actions;
export default productSlice.reducer;




