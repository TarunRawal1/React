import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Rating } from "../components/Rating";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useTitle } from "../useTitle";
import { getProductDetail } from "../Service/Productservice";
import { addToCart, removeFromCart } from "../store/Cartslice";
import { toast } from "react-toastify";
export const ProductDetail = () => {
  const { cart, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  function incart(data) {
    return cart.find((item) => item.id === data.id);
  }
  function setcart(data) {
    if (incart(data)) {
      dispatch(removeFromCart(data));
    } else {
      dispatch(addToCart(data));
    }
  }
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    async function urlcall() {
      try {
        const data = await getProductDetail(id);
        setProduct(data);
        document.title = `${data.name} - Ecommerce`;
      } catch (err) {
        toast.error("Product Not Found");
      }
    }
    urlcall();
  }, [id]);

  return (
    <main className="dark:bg-gray-800">
      <section className="dark:text-white">
        <h1 className="mt-10 mb-5 text-4xl text-center font-bold text-gray-900 dark:text-white">
          {product.name}
        </h1>
        <p className="mb-5 text-lg text-center text-gray-900 dark:text-white">
          {product.overview}
        </p>
        <div className="flex flex-wrap justify-around">
          <div className="max-w-xl my-3">
            <img className="rounded" src={product.poster} alt="" />
          </div>
          <div className="max-w-xl my-3">
            <p className="text-3xl font-bold text-gray-900 dark:text-slate-200">
              <span className="mr-1">$</span>
              <span className="">{product.price}</span>
            </p>
            <p className="my-3">
              <Rating rating={product.rating} />
            </p>
            <p className="my-4 select-none">
              {product.best_seller ? (
                <span className="font-semibold text-amber-500 border bg-amber-50 rounded-lg px-3 py-1 mr-2">
                  Best Seller
                </span>
              ) : (
                ""
              )}
              {product.in_stock ? (
                <span className="font-semibold text-emerald-600	border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                  INSTOCK
                </span>
              ) : (
                <span className="font-semibold text-rose-700 border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                  OUT OF STOCK
                </span>
              )}
              <span className="font-semibold text-blue-500 border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                {product.size} MB
              </span>
            </p>
            <p className="my-3">
              {product.in_stock ? (
                incart(product) ? (
                  <button
                    onClick={() => setcart(product)}
                    className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800`}
                    disabled={product.in_stock ? "" : "disabled"}
                  >
                    Remove Item <i className="ml-1 bi bi-trash3"></i>
                  </button>
                ) : (
                  <button
                    onClick={() => setcart(product)}
                    className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800`}
                  >
                    Add To Cart <i className="ml-1 bi bi-plus-lg"></i>
                  </button>
                )
              ) : (
                ""
              )}
            </p>
            <p className="text-lg text-gray-900 dark:text-slate-200">
              {product.long_description}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
