import Grabatar from "./Grabatar";

function Header() {
  return (
    <div className="bg-gray-300 w-full ">
      <div className=" w-full grid grid-cols-2 items-center justify-center p-4 ">
        <h1 className="text-semibold sm:text-2xl xl:text-4xl">
          Lista de Contraseñas
        </h1>
        <nav className="flex justify-end">
          <span className="inline-flex items-center rounded-md bg-gray-50 px-2 text-xs font-medium text-gray-600">
            Nueva
          </span>
          <Grabatar />
        </nav>
      </div>
    </div>
  );
}

export default Header;
