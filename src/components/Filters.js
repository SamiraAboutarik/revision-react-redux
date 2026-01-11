import { useDispatch, useSelector } from "react-redux";
import { setSearch, setCategory, setRating } from "../features/productSlice";

export default function Filters() {
  const dispatch = useDispatch();
  const ratingSelected = useSelector(state => state.products.rating);

  return (
    <div className="card p-3 mb-3">

      {/* 🔍 SEARCH */}
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search product..."
        onChange={e => dispatch(setSearch(e.target.value))}
      />

      {/* 📂 CATEGORY */}
      <select
        className="form-select mb-3"
        onChange={e => dispatch(setCategory(e.target.value))}
      >
        <option value="all">All</option>
        <option value="electronics">Electronics</option>
        <option value="fashion">Fashion</option>
        <option value="new">New</option>
      </select>

      {/* ⭐ RATING */}
      <div>
        <p className="mb-1">Rating</p>

        {[1, 2, 3, 4, 5].map(star => (
          <span
            key={star}
            style={{
              cursor: "pointer",
              fontSize: "24px",
              color: star <= ratingSelected ? "gold" : "gray"
            }}
            onClick={() => dispatch(setRating(star))}
          >
            ★
          </span>
        ))}
      </div>

    </div>
  );
}
