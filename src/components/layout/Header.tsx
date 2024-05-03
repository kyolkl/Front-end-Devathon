import { useNavigate } from "react-router-dom";
// import Grabatar from "../users/Grabatar";
import { FaUserCircle } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="border-b-[0.13rem] border-gray-200">
      <nav className="flex justify-end items-center p-3 gap-4">
        <button
          className="bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 rounded-md text-white flex flex-row gap-2 justify-center items-center p-2"
          onClick={() => navigate("?newPassword=true")}
        >
          <span className="text-white text-xl">
            <IoMdAdd />
          </span>
          New item
        </button>
        <FaUserCircle className="text-5xl text-gray-400"/>
      </nav>
    </div>
  );
}

export default Header;
