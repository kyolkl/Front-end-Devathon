import Sidebar from "../components/dashboard/Dashboard";
import Header from "../components/dashboard/Header";
import ListPassword from "../components/dashboard/ListPassword";

function HomePage() {
  return (
    <div className="flex flex-row h-screen w-screen snap-none overflow-hidden">
      <Sidebar />
      <div className="w-full">
        <Header />
        <ListPassword />
      </div>
    </div>
  );
}

export default HomePage;
