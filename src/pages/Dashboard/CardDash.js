import { Link } from "react-router-dom";
export const CardDash = ({ data }) => {
  return (
    <div className="max-w-4xl m-auto p-2 mb-5 border dark:border-slate-700">
      <div className="flex justify-between text-sm m-2 font-bold dark:text-slate-200">
        <span>Order Id: {data.id}</span>
        <span>Total: ${data.total}</span>
      </div>
      {data.cartList.map((data) => (
        <div className="flex flex-wrap justify-between max-w-4xl m-auto p-2 my-5 ">
          <div className="flex">
            <Link to="">
              <img className="w-32 rounded" src={data.poster} alt="" />
            </Link>
            <div className="">
              <Link to="">
                <p className="text-lg ml-2 dark:text-slate-200">{data.name}</p>
              </Link>
              <div className="text-lg m-2 dark:text-slate-200">
                <span>${data.price}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
