import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, removeFromCart } from "../features/cartSlice";

export default function Cart() {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce((sum, p) => sum + p.price * p.qty, 0);

  if (items.length === 0) return <h3 className="text-center mt-4">Cart is empty</h3>;

  return (
    <div className="container mt-4">
      <h3>My Cart</h3>

      {items.map(p => (
        <div key={p.id} className="d-flex align-items-center justify-content-between border p-2 mb-2 rounded">
          <div>
            <strong>{p.name}</strong> <br />
            Price: {p.price} DH <br />
            Qty: {p.qty}
          </div>

          <div>
            <button className="btn btn-sm btn-success me-1" onClick={() => dispatch(increment(p.id))}>+</button>
            <button className="btn btn-sm btn-warning me-1" onClick={() => dispatch(decrement(p.id))}>-</button>
            <button className="btn btn-sm btn-danger" onClick={() => dispatch(removeFromCart(p.id))}>X</button>
          </div>
        </div>
      ))}

      <h4>Total: {total} DH</h4>
    </div>
  );
}
