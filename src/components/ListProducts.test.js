// import { render, screen } from "@testing-library/react";
// import ListProducts from "./ListProducts";
// import { useSelector } from "react-redux";

// // mock react-redux
// jest.mock("react-redux", () => ({
//   useSelector: jest.fn()
// }));

// // mock Filters component
// jest.mock("./Filters", () => () => <div>Filters Component</div>);

// // mock CardProduct component
// jest.mock("./CardProduct", () => ({ product }) => (
//   <div>Product: {product.name}</div>
// ));

// describe("ListProducts", () => {

//   test("affiche Filters", () => {
//     useSelector.mockImplementation(fn =>
//       fn({
//         products: {
//           items: [],
//           search: "",
//           category: "all",
//           rating: 0
//         }
//       })
//     );

//     render(<ListProducts />);

//     expect(screen.getByText("Filters Component")).toBeInTheDocument();
//   });

//   test("filtre par search", () => {
//     useSelector.mockImplementation(fn =>
//       fn({
//         products: {
//           items: [
//             { id: 1, name: "Phone", category: "electronics", rating: 4 },
//             { id: 2, name: "Shoes", category: "fashion", rating: 3 }
//           ],
//           search: "phone",
//           category: "all",
//           rating: 0
//         }
//       })
//     );

//     render(<ListProducts />);

//     expect(screen.getByText("Product: Phone")).toBeInTheDocument();
//     expect(screen.queryByText("Product: Shoes")).toBeNull();
//   });

//   test("filtre par category", () => {
//     useSelector.mockImplementation(fn =>
//       fn({
//         products: {
//           items: [
//             { id: 1, name: "Phone", category: "electronics", rating: 4 },
//             { id: 2, name: "Shoes", category: "fashion", rating: 3 }
//           ],
//           search: "",
//           category: "fashion",
//           rating: 0
//         }
//       })
//     );

//     render(<ListProducts />);

//     expect(screen.getByText("Product: Shoes")).toBeInTheDocument();
//     expect(screen.queryByText("Product: Phone")).toBeNull();
//   });

//   test("filtre par rating", () => {
//     useSelector.mockImplementation(fn =>
//       fn({
//         products: {
//           items: [
//             { id: 1, name: "Phone", category: "electronics", rating: 4 },
//             { id: 2, name: "Shoes", category: "fashion", rating: 3 }
//           ],
//           search: "",
//           category: "all",
//           rating: 4
//         }
//       })
//     );

//     render(<ListProducts />);

//     expect(screen.getByText("Product: Phone")).toBeInTheDocument();
//     expect(screen.queryByText("Product: Shoes")).toBeNull();
//   });

// });
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { MemoryRouter } from "react-router-dom";

import ListProducts from "./ListProducts";
import productReducer from "../features/productSlice";

test("affiche la liste des produits", () => {
  const store = configureStore({
    reducer: {
      products: productReducer
    }
  });

  render(
    <Provider store={store}>
      <MemoryRouter>
        <ListProducts />
      </MemoryRouter>
    </Provider>
  );

  // products initiales
  expect(screen.getByText("Phone")).toBeInTheDocument();
  expect(screen.getByText("Laptop")).toBeInTheDocument();
  expect(screen.getByText("Shoes")).toBeInTheDocument();
});
