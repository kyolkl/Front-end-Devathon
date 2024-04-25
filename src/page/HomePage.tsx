import Sidebar from "../components/dashboard/Dashboard";
import ListPassword from "../components/dashboard/ListPassword";

function HomePage() {
  return (
    <div className="flex flex-row h-screen w-screen overflow-hidden">
      <Sidebar />
      <div>
        <ListPassword />
      </div>
    </div>
  );
}

export default HomePage;
