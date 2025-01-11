import { useEffect, useState } from "react";
import { CardDash } from "./CardDash";
import { Emptydash } from "./Emptydash";
import { getUserOrders } from "../../Service/Dataservice";
import { toast } from "react-toastify";
export const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard";
  }, []);
  const [data, setData] = useState([]);
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
