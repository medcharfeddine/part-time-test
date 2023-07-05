import React, { useState } from "react";
import ProductCart from "./ProductCart";

const ProductList = ({ prod, activeFilter }) => {
  const [isFiltered, setIsFiltered] = useState([]);

  const [favorites, setFavorites] = useState([]);
  const filteredProducts = activeFilter
    ? prod.filter((product) => favorites.includes(product.id))
    : prod;

  const toggleFavorite = (productId) => {
    if (favorites.includes(productId)) {
      setFavorites(favorites.filter((x) => x !== productId));
    } else {
      setFavorites([...favorites, productId]);
    }
  };

  return (
    <div className="flex flex-col justify-around gap-5">
      {filteredProducts.map((el, i) => (
        <ProductCart
          toggleFavorite={toggleFavorite}
          favFilter={isFiltered}
          setFavFilter={setIsFiltered}
          el={el}
          key={i}
        />
      ))}
    </div>
  );
};

export default ProductList;
