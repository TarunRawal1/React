import { Link } from "react-router-dom";
import { Rating } from "./Rating";
import { addToCart, removeFromCart } from "../store/Cartslice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
export const Producard = ({ data }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  function checker(data) {
    return cart.find((item) => item.id === data.id);
  }
  function setcartitem(data) {
    console.log("cliked");
    if (checker(data)) {
      dispatch(removeFromCart(data));
    } else {
      dispatch(addToCart(data));
    }
  }

  return (
    <div className="m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/products/${data.id}`} className="relative">
        <span className="absolute top-1 left-20 px-2 bg-orange-500 bg-opacity-90 text-white rounded">
          {data.best_seller ? "Best Seller" : ""}
        </span>
        <img className="rounded-t-lg w-full h-64" src={data.poster} alt="" />
      </Link>
      <div className="p-5">
        <Link to={`/products/${data.id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {data.name}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {data.overview}
        </p>

        <div className="flex items-center my-2">
          <Rating rating={data.rating} />
        </div>

        <p className="flex justify-between items-center">
          <span className="text-2xl dark:text-gray-200">
            <span>$</span>
            <span>{data.price}</span>
          </span>
          {checker(data) ? (
            <button
              onClick={() => setcartitem(data)}
              className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800"
            >
              Remove Item <i className="ml-1 bi bi-trash3"></i>
            </button>
          ) : (
            <button
              onClick={() => setcartitem(data)}
              disabled={`${data.in_stock ? "" : "true"}`}
              className={`inline-flex ${
                data.in_stock ? "" : "cursor-not-allowed"
              } items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800`}
            >
              Add To Cart <i className="ml-1 bi bi-plus-lg"></i>
            </button>
          )}
        </p>
      </div>
    </div>
  );
};
