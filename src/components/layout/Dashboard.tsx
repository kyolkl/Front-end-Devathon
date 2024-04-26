import { DASHBOARD, SETTINGS } from "../../libs/navegate";
import Logo from "../Logo";
import { IoIosSettings } from "react-icons/io";
import LinksMenu from "../dashboard/LinksMenu";

function Sidebar() {
  return (
    <main className=" bg-sky-600 h-screen">
      <div className="flex flex-col w-60 md:w-full p-3">
        <Logo />
        <section className="mt-10 ">
          {DASHBOARD.map((item) => {
            return <LinksMenu key={item.key} item={item} />;
          })}
        </section>
        <div className="mt-10 ">
          <div className="flex flex-row items-center gap-3 py-5 text-xl border-b-gray-500 md:border-b-2 ">
            <IoIosSettings />
            <span className="hidden md:block">Settings</span>
          </div>
          {SETTINGS.map((item) => {
            return <LinksMenu key={item.key} item={item} />;
          })}
        </div>
      </div>
    </main>
  );
}

export default Sidebar;
