import { Cartcard } from "./Cartcard";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Emptycart } from "./Emptycart";
import { Cartlist } from "./Cartlist";
export const Cart = () => {
 
  const { cart, total } = useSelector((state) => state.cart);
  useEffect(()=>{
    document.title = `Cart (${cart.length})`;
  },[])
  return (
    <main className="dark:bg-gray-800 dark:text-slate-200">
      {cart.length > 0 ? <Cartlist /> : <Emptycart />}
    </main>
  );
};
