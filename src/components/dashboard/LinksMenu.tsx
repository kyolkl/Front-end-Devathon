import { Link } from "react-router-dom";

interface ILinksMenu {
  item: {
    label: string;
    path: string;
    icon: string;
  };
}

function LinksMenu({ item }: ILinksMenu) {
  return (
    <Link
      to={item.path}
      className="flex flex-col p-2 mt-5 hover:bg-gray-200 rounded-md text-white cursor-pointer text-xl"
    >
      <div className="flex items-center gap-2">
        {<item.icon />}
        <span className="hidden md:block">{item.label}</span>
      </div>
    </Link>
  );
}

export default LinksMenu;
