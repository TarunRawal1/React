import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { removeFromCart } from "../../store/Cartslice";
import { useDispatch } from "react-redux";
export const Cartcard = ({ item }) => {
  const dispatch = useDispatch();
  const { cart, total } = useSelector((state) => state.cart);
  return (
    <div className="flex flex-wrap mt-9 justify-between border-b dark:border-slate-700 max-w-4xl m-auto p-2 mb-5 ">
      <div className="flex">
        <Link to="">
          <img className="w-32 rounded" src={item.poster} alt="" />
        </Link>
        <div className="flex flex-start flex-col justify-center ml-2">
          <Link to="">
            <p className="text-lg ml-2 dark:text-slate-200">{item.name}</p>
          </Link>
          <button
            onClick={() => dispatch(removeFromCart(item))}
            className="text-base text-red-400"
          >
            Remove
          </button>
        </div>
      </div>
      <div className="text-lg m-2 justify-between dark:text-slate-200">
        <span>${item.price}</span>
      </div>
    </div>
  );
};
