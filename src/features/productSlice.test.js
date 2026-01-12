import reducer, {
  addProduct,
  editProduct,
  setSearch,
  setCategory,
  setRating
} from "./productSlice";

describe("productSlice", () => {

  let initialState;

  beforeEach(() => {
    initialState = reducer(undefined, { type: "unknown" });
  });

  test("retourne l'état initial", () => {
    expect(initialState.items.length).toBe(3);
    expect(initialState.search).toBe("");
    expect(initialState.category).toBe("all");
    expect(initialState.rating).toBe(0);
  });

  test("ajouter un produit", () => {
    const newProduct = {
      id: 4,
      name: "Tablet",
      price: 2000,
      category: "electronics",
      rating: 4
    };

    const state = reducer(initialState, addProduct(newProduct));

    expect(state.items.length).toBe(4);
    expect(state.items[3].name).toBe("Tablet");
  });

  test("modifier un produit", () => {
    const updatedProduct = {
      id: 1,
      name: "Phone Pro",
      price: 3500,
      category: "electronics",
      rating: 5
    };

    const state = reducer(initialState, editProduct(updatedProduct));

    expect(state.items[0].name).toBe("Phone Pro");
    expect(state.items[0].price).toBe(3500);
  });

  test("changer la recherche", () => {
    const state = reducer(initialState, setSearch("phone"));
    expect(state.search).toBe("phone");
  });

  test("changer la catégorie", () => {
    const state = reducer(initialState, setCategory("electronics"));
    expect(state.category).toBe("electronics");
  });

  test("changer le rating", () => {
    const state = reducer(initialState, setRating(4));
    expect(state.rating).toBe(4);
  });

});
