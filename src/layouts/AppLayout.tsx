import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Dashboard";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

function AppLayout() {
  return (
    <>
      <div className="grid grid-cols-[20%_minmax(0,_1fr)] grid-rows-[100px_minmax(0,_1fr)_100px] h-screen">
        <div className=" row-span-2 h-full">
          <Sidebar />
        </div>
        <div className="">
          <Header />
        </div>
        <div>
          <Outlet />
        </div>
        <div className="bg-gray-300 col-span-2">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default AppLayout;
{
  /* <>
<div className="flex flex-row h-screen w-screen snap-none overflow-hidden">
  <Sidebar />
  <div className="w-full">
    <Header />
    <ListPassword />
  </div>
</div>
<AddPasswordModal />
</> */
}
