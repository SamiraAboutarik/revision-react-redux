import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { Link, useNavigate } from "react-router-dom";

export default function CardProduct({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="card p-3 h-100">
      <h5>{product.name}</h5>
      <p>Price: {product.price} DH</p>
      <p>Category: {product.category}</p>
      <p>
        {[1,2,3,4,5].map(star => (
          <span key={star} style={{ color: star <= product.rating ? "gold" : "gray" }}>★</span>
        ))}
      </p>

      <div className="d-flex flex-wrap gap-2">
        <button
          className="btn btn-primary"
          onClick={() => dispatch(addToCart(product))}
        >
          Add to Cart
        </button>

        <Link to={`/detail/${product.id}`} className="btn btn-secondary">
          Detail
        </Link>

        <button
          className="btn btn-warning"
          onClick={() => navigate(`/edit/${product.id}`)}
        >
          Modifier
        </button>
      </div>
    </div>
  );
}
