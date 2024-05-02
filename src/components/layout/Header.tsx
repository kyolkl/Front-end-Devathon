import { useNavigate } from "react-router-dom";
import Grabatar from "../users/Grabatar";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-300 ">
      <div className="grid grid-cols-2 items-center justify-center p-4 ">
        <h1 className="text-semibold sm:text-2xl xl:text-4xl">Password Safe</h1>
        <nav className="flex justify-end">
          <button
            className="inline-flex items-center rounded-md bg-gray-50 px-2 text-xs font-medium text-gray-600"
            onClick={() => navigate("?newPassword=true")}
          >
            new
          </button>
          <Grabatar />
        </nav>
      </div>
    </div>
  );
}

export default Header;
