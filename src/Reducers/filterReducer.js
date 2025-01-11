export const Filterreducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "Product_List":
      return { productList: payload.products };
    case "SortBy":
      return { ...state, sortBy: payload.sortBy };

    case "Ratings":
      return { ...state, rating: payload.rating };
    case "BestSeller":
      return { ...state, bestSeller: payload.bestSeller };
    case "OnlyInStock":
      return { ...state, onlyInstock: payload.onlyInstock };
    case "ClearFilter":
      return {
        ...state,
        onlyInstock: false,
        bestSeller: false,
        sortBy: null,
        rating: null,
      };
    default:
      throw new Error("No Case Found");
  }
};
