import React, { useState } from "react";
import favorite from "../assets/icon_favorite.svg";
import favoriteActive from "../assets/icon_favorite_active.svg";

const ProductCart = ({ el, toggleFavorite }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [active, setActive] = useState(false);

  const handleFavoriteClick = () => {
    toggleFavorite(el.id);
  };

  const handleClick = () => {
    setIsFavorite((prevState) => !prevState);
    setActive(!active);
    handleFavoriteClick();
  };

  const isFavv = isFavorite ? favoriteActive : favorite;

  return (
    <div
      className={
        isFavorite
          ? "cart0 rounded-lg h-48 flex py-5 relative active"
          : "cart0 rounded-lg h-48 flex py-5 relative"
      }
    >
      <img
        onClick={handleClick}
        className="w-6 h-6 absolute right-2 top-2 cursor-pointer"
        src={isFavv}
        alt=""
      />
      <div className="flex w-auto justify-evenly items-center ">
        <img className=" w-1/2" src={el.image} alt={el.name} />
        <div className=" flex flex-col gap-1">
          <h2 className=" font-extrabold"> {el.name} </h2>
          <p className=" text-left text-gray-600 text-sm"> {el.description} </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
