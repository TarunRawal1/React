import { Cartcard } from "./Cartcard";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Checkout } from "./Checkout";
import { useEffect } from "react";
export const Cartlist = () => {
 
  const [checkout, setcheckout] = useState(false);
  const { cart, total } = useSelector((state) => state.cart);
  useEffect(()=>{
    document.title = `Cart {cart.length} items in cart`;
  },[])
  return (
    <>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
          My Cart {cart.length}
        </p>
      </section>

      <section>
        {cart.map((item) => (
          <Cartcard key={item.id} item={item} />
        ))}
      </section>

      <section className="max-w-4xl m-auto">
        <div className="flex flex-col p-2 border-b dark:border-slate-700 text-lg dark:text-slate-100">
          <p className="flex justify-between my-2">
            <span className="font-semibold">Total Amount:</span>
            <span>${total}</span>
          </p>
        </div>
        <div className="text-right my-5">
          <button
            type="button"
            onClick={() => setcheckout(!checkout)}
            className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-base px-7 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            PLACE ORDER <i className="ml-2 bi bi-arrow-right"></i>
          </button>
        </div>
      </section>
      {checkout && <Checkout setcheckout={setcheckout} />}
    </>
  );
};
