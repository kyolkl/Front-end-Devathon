import { Outlet } from "react-router-dom";
import Header from "../layout/Header";

function Dashboard() {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <Outlet />
    </div>
  )
}

export default Dashboard;