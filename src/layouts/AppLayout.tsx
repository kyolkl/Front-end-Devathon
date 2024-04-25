import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <footer className="">
        <div className="text-center mt-10">Team 6 Password-Manager</div>
      </footer>
    </>
  );
}

export default AppLayout;
