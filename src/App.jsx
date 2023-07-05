import ProductList from "./components/ProductList";
import sortDown from "./assets/icon_sortDown.svg";
import sortUp from "./assets/icon_sortUp.svg";
import favorite from "./assets/icon_favorite.svg";
import favoriteActive from "./assets/icon_favorite_active.svg";
import search from "./assets/icon_search.svg";
import { useState } from "react";
import products from "./products";

function App() {
  const [isFavorite, setIsFavorite] = useState(false);
  const [sorting, setSorting] = useState(false)
  const [searchValue, setSearchValue] = useState("");

  //filtering by favorite
  const [isActiveFilter, setIsActiveFilter] = useState(false);
  const toggleActiveFilter = () => {
    setIsActiveFilter(!isActiveFilter);
  };

  const handleSorting =  () => {
    setSorting((prevState) => !prevState)
  }

  //filtering by name
  const handleSearch = (e) => setSearchValue(e.target.value);
  // a function to change favorite icon on click
  const handleClick = () => {
    setIsFavorite((prevState) => !prevState);
    toggleActiveFilter()

  };
  const isSorted = sorting ? sortDown : sortUp
  const isFav = isFavorite ? favoriteActive : favorite

  

  return (
    <div className=" w-screen h-screen  px-7-10">
      <nav className=" flex flex-col shad1 items-center max-h-screen w-max p-4 fixed top-7 left-7 overflow-y-auto rounded-lg ">
        <h2 className=" font-medium text-2xl">Models</h2>
        <div className="flex justify-center w-full gap-7 m-3">
          <div className="  inp1">
            <form onSubmit={(e)=>e.preventDefault()}>
              <input
                className="inp2 rounded-lg p-1 w-44 h-8 "
                type="text"
                value={searchValue}
                onChange={handleSearch}
              />
            </form>
            <div className=" line0 bg-blue-400"></div>
            <img  src={search} alt="" className=" w-6 cursor-pointer" />
          </div>
          <div className="flex justify-between w-auto">
            <img
              onClick={handleClick}
              className="fav w-10 h-10 cursor-pointer"
              src={isFav}
              alt=""
            />

            <img className=" w-10 h-10 cursor-pointer" src={isSorted} onClick={handleSorting} alt="" />
          </div>
        </div>

        <ProductList activeFilter={isActiveFilter}  isFav={isFav} handleClick={handleClick} prod={products.filter(el => el.name.toLowerCase().includes(searchValue.toLocaleLowerCase().trim()))} />
      </nav>
      {/* <New/> */}
    </div>
  );
}

export default App;
