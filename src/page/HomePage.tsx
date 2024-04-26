import ListPassword from "../components/dashboard/ListPassword";
import AddPasswordModal from "../components/dashboard/AddPasswordModal";

function HomePage() {
  return (
    <>
      <div className="flex flex-row snap-none overflow-hidden">
        <div className="w-full">
          <ListPassword />
        </div>
      </div>
      <AddPasswordModal />
    </>
  );
}

export default HomePage;
