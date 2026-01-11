import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

export default function DetailProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const product = useSelector(state =>
    state.products.items.find(p => p.id === Number(id))
  );

  if (!product) return <h3>Product not found</h3>;

  return (
    <div className="container mt-4">
      <button
        className="btn btn-secondary mb-3"
        onClick={() => navigate(-1)}
      >
        ← Retour
      </button>

      <h2>{product.name}</h2>
      <p>Price: {product.price} DH</p>
      <p>Category: {product.category}</p>
      <p>
        {[1, 2, 3, 4, 5].map(star => (
          <span key={star} style={{ color: star <= product.rating ? "gold" : "gray" }}>★</span>
        ))}
      </p>

      <button
        className="btn btn-primary"
        onClick={() => dispatch(addToCart(product))}
      >
        Add to Cart
      </button>
    </div>
  );
}
