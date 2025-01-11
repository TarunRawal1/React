import { useLocation } from "react-router-dom";
import { Fail } from "./Fail";
import { OrderSUccess } from "./OrderSUcess";
import { useEffect } from "react";

export const Ordersummary = () => {
  useEffect(()=>{
      document.title = "Order Summary";
    },[])
  const { state } = useLocation();
  return (
    <main className="dark:bg-gray-800">
      {state.success ? <OrderSUccess data={state.data} /> : <Fail />}
    </main>
  );
};
