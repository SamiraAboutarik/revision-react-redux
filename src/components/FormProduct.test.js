import { render, screen, fireEvent } from "@testing-library/react";
import FormProduct from "./FormProduct";
import { addProduct, editProduct } from "../features/productSlice";
import { useSelector } from "react-redux";

const mockDispatch = jest.fn();
const mockNavigate = jest.fn();
let mockParams = {};

jest.mock("react-redux", () => ({
  useDispatch: () => mockDispatch,
  useSelector: jest.fn()
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
  useParams: () => mockParams
}));


test("ajouter un produit (mode ADD)", () => {
  mockParams = {}; // ما كاينش id

  useSelector.mockImplementation(fn =>
    fn({ products: { items: [] } })
  );

  render(<FormProduct />);

  expect(screen.getByText("Add Product")).toBeInTheDocument();

  fireEvent.change(screen.getByPlaceholderText("Name"), {
    target: { value: "Phone" }
  });

  fireEvent.change(screen.getByPlaceholderText("Price"), {
    target: { value: "3000" }
  });

  fireEvent.click(screen.getByText("Add Product"));

  expect(mockDispatch).toHaveBeenCalledWith(
    expect.objectContaining({
      type: addProduct.type
    })
  );

  expect(mockNavigate).toHaveBeenCalledWith("/");
});

const products = [
  { id: 1, name: "Laptop", price: 8000, category: "electronics", rating: 4 }
];

test("modifier un produit (mode EDIT)", () => {
  mockParams = { id: "1" };

  useSelector.mockImplementation(fn =>
    fn({ products: { items: products } })
  );

  render(<FormProduct />);

  expect(screen.getByText("Edit Product")).toBeInTheDocument();

  // الاسم معمّر من قبل
  expect(screen.getByDisplayValue("Laptop")).toBeInTheDocument();

  fireEvent.change(screen.getByPlaceholderText("Name"), {
    target: { value: "Laptop Pro" }
  });

  fireEvent.click(screen.getByText("Save Changes"));

  expect(mockDispatch).toHaveBeenCalledWith(
    editProduct({
      id: 1,
      name: "Laptop Pro",
      price: 8000,
      category: "electronics",
      rating: 4
    })
  );

  expect(mockNavigate).toHaveBeenCalledWith("/");
});
