import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const cartItems = useSelector(state => state.cart.items);

  const totalQty = cartItems.reduce((sum, item) => sum + item.qty, 0);

  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">Shop</Link>
<Link className="btn btn-success ms-2" to="/add">
  Add Product
</Link>

      <Link className="btn btn-light" to="/cart">
        Cart
        <span className="badge bg-danger ms-2">
          {totalQty}
        </span>
      </Link>
    </nav>
  );
}
