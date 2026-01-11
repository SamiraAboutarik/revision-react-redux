import { useSelector } from "react-redux";
import CardProduct from "./CardProduct";
import Filters from "./Filters";

export default function ListProducts() {
  const { items, search, category, rating } =
    useSelector(state => state.products);

  const filteredProducts = items.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "all" || p.category === category;
    const matchRating = rating === 0 || p.rating >= rating;

    return matchSearch && matchCategory && matchRating;
  });

  return (
    <div className="container mt-3">
      <Filters />

      <div className="row">
        {filteredProducts.map(p => (
          <div className="col-4 mb-3" key={p.id}>
            <CardProduct product={p} />
          </div>
        ))}
      </div>
    </div>
  );
}
