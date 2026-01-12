// import { render, screen, fireEvent } from "@testing-library/react";
// import CardProduct from "./CardProduct";
// import { addToCart } from "../features/cartSlice";

// const mockDispatch = jest.fn();
// const mockNavigate = jest.fn();

// jest.mock("react-redux", () => ({
//   useDispatch: () => mockDispatch
// }));

// jest.mock("react-router-dom", () => ({
//   useNavigate: () => mockNavigate,
//   Link: ({ children }) => <span>{children}</span>
// }));

// const product = {
//   id: 1,
//   name: "Phone",
//   price: 3000,
//   category: "electronics",
//   rating: 4
// };
// //Test 1: عرض معلومات المنتج
// test("يعرض معلومات المنتج", () => {
//   render(<CardProduct product={product} />);

//   expect(screen.getByText("Phone")).toBeInTheDocument();
//   expect(screen.getByText("Price: 3000 DH")).toBeInTheDocument();
//   expect(screen.getByText("Category: electronics")).toBeInTheDocument();
// });
// //Test 2: زر Add to Cart
// test("dispatch addToCart عند الضغط على Add to Cart", () => {
//   render(<CardProduct product={product} />);

//   const button = screen.getByText("Add to Cart");
//   fireEvent.click(button);

//   expect(mockDispatch).toHaveBeenCalledWith(addToCart(product));
// });
// //Test 3: زر Modifier (navigate)
// test("navigate لصفحة edit عند الضغط على Modifier", () => {
//   render(<CardProduct product={product} />);

//   const button = screen.getByText("Modifier");
//   fireEvent.click(button);

//   expect(mockNavigate).toHaveBeenCalledWith("/edit/1");
// });
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import CardProduct from "./CardProduct";
import cartReducer from "../features/cartSlice";

test("CardProduct add to cart", () => {

  const store = configureStore({
    reducer: { cart: cartReducer }
  });

  const product = {
    id: 1,
    name: "Phone",
    price: 3000,
    category: "electronics",
    rating: 4
  };

  render(
    <Provider store={store}>
        <CardProduct product={product} />
    </Provider>
  );

  fireEvent.click(screen.getByText("Add to Cart"));

  const state = store.getState().cart.items;
  expect(state.length).toBe(1);
  expect(state[0].name).toBe("Phone");
});
