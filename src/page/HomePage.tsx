import ListPassword from "../components/passwords/Password";
import AddPasswordModal from "../components/passwords/PasswordModal";

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
