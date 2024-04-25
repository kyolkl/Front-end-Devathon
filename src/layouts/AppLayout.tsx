import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <>
      <main className=" ">
        <Outlet />
      </main>
      <footer className="bg-gray-300 p-5">
        <div className="text-center mt-10">Team 6 Password-Manager</div>
      </footer>
    </>
  );
}

export default AppLayout;
