import Sidebar from "../components/layout/Sidebar";
import Dashboard from "../components/dashboard/Dashboard";

function AppLayout() {
  return (
    <>
      <main className="flex flex-row h-screen">
        <Sidebar />
        <Dashboard />
      </main>
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
