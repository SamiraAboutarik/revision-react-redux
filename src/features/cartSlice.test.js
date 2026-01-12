import reducer, {
  addToCart,
  increment,
  decrement,
  removeFromCart
} from "./cartSlice";
describe("cartSlice", () => {

  test("retourne l'état initial", () => {
    const state = reducer(undefined, { type: "unknown" });

    expect(state.items).toEqual([]);
  });
  test("ajouter un produit au panier", () => {
    const product = { id: 1, name: "Phone", price: 3000 };

    const state = reducer(undefined, addToCart(product));

    expect(state.items.length).toBe(1);
    expect(state.items[0].qty).toBe(1);
  });
  test("incrémenter la quantité si le produit existe déjà", () => {
    const product = { id: 1, name: "Phone", price: 3000 };

    let state = reducer(undefined, addToCart(product));
    state = reducer(state, addToCart(product));

    expect(state.items.length).toBe(1);
    expect(state.items[0].qty).toBe(2);
  });
  test("incrementer la quantité", () => {
    const product = { id: 1, name: "Phone", price: 3000 };

    let state = reducer(undefined, addToCart(product));
    state = reducer(state, increment(1));

    expect(state.items[0].qty).toBe(2);
  });
  test("decrementer la quantité", () => {
    const product = { id: 1, name: "Phone", price: 3000 };

    let state = reducer(undefined, addToCart(product));
    state = reducer(state, increment(1)); // qty = 2
    state = reducer(state, decrement(1)); // qty = 1

    expect(state.items[0].qty).toBe(1);
  });
  test("supprimer un produit du panier", () => {
    const product = { id: 1, name: "Phone", price: 3000 };

    let state = reducer(undefined, addToCart(product));
    state = reducer(state, removeFromCart(1));

    expect(state.items.length).toBe(0);
  });
});
