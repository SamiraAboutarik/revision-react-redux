// import { render, screen, fireEvent } from "@testing-library/react";
// import Filters from "./Filters";
// import { setSearch, setCategory, setRating } from "../features/productSlice";
// import { useSelector } from "react-redux";

// // mock redux
// const mockDispatch = jest.fn();

// jest.mock("react-redux", () => ({
//   useDispatch: () => mockDispatch,
//   useSelector: jest.fn()
// }));
// test("affiche le champ de recherche", () => {
//   useSelector.mockImplementation(fn =>
//     fn({ products: { rating: 0 } })
//   );

//   render(<Filters />);

//   expect(screen.getByPlaceholderText("Search product...")).toBeInTheDocument();
// });
// test("dispatch setSearch quand on tape", () => {
//   useSelector.mockImplementation(fn =>
//     fn({ products: { rating: 0 } })
//   );

//   render(<Filters />);

//   const input = screen.getByPlaceholderText("Search product...");

//   fireEvent.change(input, { target: { value: "phone" } });

//   expect(mockDispatch).toHaveBeenCalledWith(setSearch("phone"));
// });
// test("dispatch setCategory quand on change la catégorie", () => {
//   useSelector.mockImplementation(fn =>
//     fn({ products: { rating: 0 } })
//   );

//   render(<Filters />);

//   const select = screen.getByRole("combobox");

//   fireEvent.change(select, { target: { value: "electronics" } });

//   expect(mockDispatch).toHaveBeenCalledWith(setCategory("electronics"));
// });
// test("dispatch setRating quand on clique sur une étoile", () => {
//   useSelector.mockImplementation(fn =>
//     fn({ products: { rating: 2 } })
//   );

//   render(<Filters />);

//   const stars = screen.getAllByText("★");

//   fireEvent.click(stars[3]); // étoile 4

//   expect(mockDispatch).toHaveBeenCalledWith(setRating(4));
// });
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { MemoryRouter } from "react-router-dom";

import Filters from "./Filters";
import productReducer from "../features/productSlice";

test("Filters change search", () => {
  const store = configureStore({
    reducer: {
      products: productReducer
    }
  });

  render(
    <Provider store={store}>
      <MemoryRouter>
        <Filters />
      </MemoryRouter>
    </Provider>
  );

  // نكتب ف search
  fireEvent.change(
    screen.getByPlaceholderText("Search product..."),
    { target: { value: "phone" } }
  );

  const state = store.getState().products;
  expect(state.search).toBe("phone");
});
