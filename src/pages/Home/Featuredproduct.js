import { Producard } from "../../components/Producard";
import { useEffect, useState } from "react";
import { getFeaturedList } from "../../Service/Productservice";
import { toast } from "react-toastify";
export const Featuredproduct = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    async function urlcall() {
      try {
        const data = await getFeaturedList();
        setDatas(data);
      } catch (error) {
        toast.error("Server Error! Please try again");
      }
    }
    urlcall();
  }, []);
  return (
    <section className="my-20">
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">
        Featured eBooks
      </h1>
      <div className="flex flex-wrap justify-center lg:flex-row">
        {datas.map((data) => (
          <Producard key={data.id} data={data} />
        ))}
      </div>
    </section>
  );
};
