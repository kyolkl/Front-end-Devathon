import ListPassword from "../components/passwords/ListPassword";

function HomePage() {
  return (
    <>
      <div className="flex flex-row snap-none overflow-hidden">
        <div className="w-full">
          <ListPassword />
        </div>
      </div>
    </>
  );
}

export default HomePage;
