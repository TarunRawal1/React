import { useEffect, useState } from "react";
import { CardDash } from "./CardDash";
import { Emptydash } from "./Emptydash";
import { useSelector } from "react-redux";
import { getUserOrders } from "../../Service/Dataservice";
import { toast } from "react-toastify";
export const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard";
  }, []);
  const { cart, total } = useSelector((state) => state.cart);
  const [data, setData] = useState([]);
  const token = JSON.parse(sessionStorage.getItem("accessToken"));
  const ids = JSON.parse(sessionStorage.getItem("id"));
  useEffect(() => {
    async function getcart() {
      try {
        const cartlist = await getUserOrders();
        setData(cartlist);
      } catch (error) {
        toast.error(error.message);
      }
    }
    getcart();
  }, []);
  console.log(data, "data");
  console.log(ids, "ids");
  return (
    <main className="dark:bg-gray-800">
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
          My Dashboard
        </p>
      </section>
      <section>
        {data.length ? (
          data.map((item) => <CardDash data={item} />)
        ) : (
          <Emptydash />
        )}
      </section>
    </main>
  );
};
