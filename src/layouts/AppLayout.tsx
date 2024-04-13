import { Link, Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <>
      <header className="bg-sky-500">
        <div className="max-w-2xl mx-auto px-10 lg:max-w-6xl flex justify-between items-center h-16">
          <h1>logo</h1>
          <nav>
            <ul className="flex gap-4">
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/login">login</Link>
              </li>
              <li>
                <Link to="/">item</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="max-w-2xl mx-auto px-10 mt-5 lg:max-w-6xl">
        <Outlet />
      </main>
      <footer className="">
        <div className="text-center mt-10">Team 6 Password-Manager</div>
      </footer>
    </>
  );
}

export default AppLayout;
