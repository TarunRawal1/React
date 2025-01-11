import { createContext, useContext } from "react";
import { useReducer } from "react";
import { Filterreducer } from "../Reducers/filterReducer";

const FilterinitialState = {
  productList: [],
  onlyInstock: false,
  bestSeller: false,
  sortBy: null,
  rating: null,
};

export const FilterContext = createContext(FilterinitialState);
export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Filterreducer, FilterinitialState);
  function initalProductList(products) {
    dispatch({ type: "Product_List", payload: { products: products } });
  }
  function bestSeller(products) {
    return state.bestSeller
      ? products.filter((product) => product.best_seller === true)
      : products;
  }
  function sort(products) {
    if (state.sortBy === "lowtohigh") {
      return products.sort((a, b) => Number(a.price) - Number(b.price));
    }
    if (state.sortBy === "hightolow") {
      return products.sort((a, b) => Number(b.price) - Number(a.price));
    }
    return products;
  }
  function inStock(products) {
    return state.onlyInstock
      ? products.filter((product) => product.in_stock === true)
      : products;
  }
  function rating(products) {
    if (state.rating === "4STARSABOVE") {
      return products.filter((product) => product.rating >= 4);
    }
    if (state.rating === "3STARSABOVE") {
      return products.filter((product) => product.rating >= 3);
    }
    if (state.rating === "2STARSABOVE") {
      return products.filter((product) => product.rating >= 2);
    }
    if (state.rating === "1STARSABOVE") {
      return products.filter((product) => product.rating >= 1);
    }
    return products;
  }
  const filteredProductList = rating(
    sort(inStock(bestSeller(state.productList)))
  );
  const value = {
    productList: filteredProductList,
    state,
    dispatch,
    onlyInstock: false,
    bestSeller: false,
    sortBy: null,
    rating: null,
    initalProductList,
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  return context;
};
