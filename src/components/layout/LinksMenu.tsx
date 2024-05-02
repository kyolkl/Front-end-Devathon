import { Link } from "react-router-dom";

interface ILinksMenu {
  item: {
    label: string;
    path: string;
    icon: string;
  };
}

const handleClick = (path: string) => {
  console.log(path);
};

function LinksMenu({ item }: ILinksMenu) {
  console.log(item.path);
  return (
    <Link
      to={item.path}
      className="flex flex-col p-2 hover:bg-green-200 rounded-md cursor-pointer w-[50px] md:w-full"
    >
      <div className="flex items-center justify-center gap-2 md:text-base md:justify-start text-green-600">
        {<item.icon />}
        <span className="hidden md:block text-gray-700">{item.label}</span>
      </div>
    </Link>
  );
}

export default LinksMenu;
