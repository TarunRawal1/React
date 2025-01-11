import { useLocation } from "react-router-dom";
import { Producard } from "../../components/Producard";
import { Filterbar } from "./Filterbar";
import { useEffect, useState } from "react";
import { useFilter } from "../../Context/Filtercontext";
import { getProductList } from "../../Service/Productservice";
import { toast } from "react-toastify";
export const Productlist = () => {
  const [active, setActive] = useState(false);
  const { productList, initalProductList } = useFilter();
  const [datas, setDatas] = useState([]);
  const search = useLocation().search;
  const querypara = new URLSearchParams(search).get("q");
  useEffect(() => {
    document.title = "Ebooks | Products";
  }, []);

  console.log(querypara, "search");
  useEffect(() => {
    async function getresponse() {
      try {
        const data = await getProductList(querypara);
        initalProductList(data);
      } catch (err) {
        toast.error(err.message);
      }
    }
    getresponse();
  }, [querypara]); //eslint-disable-line
  console.log(productList, "datas");
  return (
    <main className="dark:bg-gray-800">
      <section className="my-5">
        <div className="my-5 flex justify-between">
          <span className="text-2xl font-semibold dark:text-white mb-5">
            All eBooks ({productList.length})
          </span>
          <span>
            <button
              onClick={() => setActive(!active)}
              id="dropdownMenuIconButton"
              data-dropdown-toggle="dropdownDots"
              className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700"
              type="button"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
              </svg>
            </button>
          </span>
        </div>

        <div className="flex flex-wrap justify-center lg:flex-row">
          {productList.map((data) => (
            <Producard key={data.id} data={data} />
          ))}
        </div>
        {active ? <Filterbar active={active} setactive={setActive} /> : ""}
      </section>
    </main>
  );
};
