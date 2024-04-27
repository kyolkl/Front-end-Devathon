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
      className="flex flex-col p-2 mt-5 hover:bg-gray-200 rounded-md text-white cursor-pointer w-[50px] md:w-full text-xl"
    >
      <div className="flex items-center justify-center gap-2 text-3xl md:text-xl md:justify-start ">
        {<item.icon />}
        <span className="hidden md:block">{item.label}</span>
      </div>
    </Link>
  );
}

export default LinksMenu;
