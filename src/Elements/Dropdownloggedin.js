import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
export const Dropdownloggedin = ({ setdropdown }) => {
  const navigate = useNavigate();
  const token = JSON.parse(sessionStorage.getItem("accessToken"));
  const ids = JSON.parse(sessionStorage.getItem("id"));
  const [user, setuser] = useState({});
  useEffect(() => {
    async function getuser() {
      try {
        const response = await fetch(`http://localhost:8000/600/users/${ids}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setuser(data);
      } catch (error) {
        toast.error(error.message);
      }
    }
    getuser();
  }, [ids, token]);
  console.log("user", user);
  function handlelogout() {
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("id");
    window.location.reload();
    setdropdown(false);
    navigate("/");
  }
  return (
    <div
      id="dropdownAvatar"
      className="select-none	absolute top-10 mt-5 right-0 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
    >
      <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
        <div className="font-medium truncate">{user.email}</div>
      </div>
      <ul
        className="py-1 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownUserAvatarButton"
      >
        <li>
          <Link
            to="/products"
            onClick={() => setdropdown(false)}
            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            All eBooks
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard"
            onClick={() => setdropdown(false)}
            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Dashboard
          </Link>
        </li>
      </ul>
      <div className="py-1">
        <span
          onClick={handlelogout}
          className="cursor-pointer block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
        >
          Log out
        </span>
      </div>
    </div>
  );
};
