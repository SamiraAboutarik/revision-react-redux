import { render, screen, fireEvent } from "@testing-library/react";
import Cart from "./Cart";
import { increment, decrement, removeFromCart } from "../features/cartSlice";
import { useSelector } from "react-redux";
//Mock ديال Redux
const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  useDispatch: () => mockDispatch,
  useSelector: jest.fn()
}));
//Test 1: Cart خاوي
test("يعرض Cart is empty إذا كان panier فارغ", () => {
  useSelector.mockImplementation(fn =>
    fn({ cart: { items: [] } })
  );

  render(<Cart />);

  expect(screen.getByText("Cart is empty")).toBeInTheDocument();
});
//données fake (produit)
const items = [
  { id: 1, name: "Phone", price: 3000, qty: 2 }
];
//Test 2: عرض المنتج و Total
test("يعرض المنتجات و total", () => {
  useSelector.mockImplementation(fn =>
    fn({ cart: { items } })
  );

  render(<Cart />);

  expect(screen.getByText("Phone")).toBeInTheDocument();
  expect(screen.getByText("Total: 6000 DH")).toBeInTheDocument();
});
//Test 3: زر +
test("dispatch increment عند الضغط على +", () => {
  useSelector.mockImplementation(fn =>
    fn({ cart: { items } })
  );

  render(<Cart />);

  fireEvent.click(screen.getByText("+"));

  expect(mockDispatch).toHaveBeenCalledWith(increment(1));
});
//Test 4: زر -
test("dispatch decrement عند الضغط على -", () => {
  useSelector.mockImplementation(fn =>
    fn({ cart: { items } })
  );

  render(<Cart />);

  fireEvent.click(screen.getByText("-"));

  expect(mockDispatch).toHaveBeenCalledWith(decrement(1));
});
//Test 5: زر X
test("dispatch removeFromCart عند الضغط على X", () => {
  useSelector.mockImplementation(fn =>
    fn({ cart: { items } })
  );

  render(<Cart />);

  fireEvent.click(screen.getByText("X"));

  expect(mockDispatch).toHaveBeenCalledWith(removeFromCart(1));
});
