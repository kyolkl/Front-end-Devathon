import { dashboard, settings } from "../../libs/navegate";
import Logo from "../Logo";
import LinksMenu from "../sidebar/LinksMenu";

function Sidebar() {
  return (
    <div className="h-screen w-[300px] shadow-xl">
      <div className="flex flex-col w-60 md:w-full p-3">
        <Logo />
        <ul className="flex flex-col gap-2 mt-3">
          {
            dashboard.map((item) => (
              <li key={item.key}>
                <LinksMenu item={item} />
              </li>
            ))
          }
          <div className="flex flex-row items-center gap-3 p-2 text-lg">
            <span className="hidden md:block">Tools</span>
          </div>
          {
            settings.map((item) => (
              <li key={item.key}>
                <LinksMenu item={item} />
              </li>
            )) 
          }

        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
