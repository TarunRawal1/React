import { Link } from "react-router-dom";
import logo from "../assets/404.jpg";
export const PageNotFound = () => {
  return (
    <main className="dark:bg-gray-800 dark:text-slate-200">
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center">
          <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white text-center">
           
          </p>
          <div className="max-w-sm">
            <img className="" src={logo} alt="" />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <Link to="">
            <button
              type="button"
              className="w-64 mt-1 text-2xl ml-3 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2"
            >
              Back To Home
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};
