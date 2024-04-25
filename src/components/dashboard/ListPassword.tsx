import CardPassword from "./CardPassword";

const listaPassword = [
  {
    key: "1",
    web: "https://www.google.com",
    email: "email@gmail.com",
    password: "123456",
  },
  {
    key: "1",
    web: "https://www.google.com",
    email: "email@gmail.com",
    password: "123456",
  },
];
function ListPassword() {
  return (
    <ul className="w-full flex flex-col p-5 mt-10 gap-5">
      {listaPassword.map((item) => {
        return <CardPassword key={item.key} item={item} />;
      })}
    </ul>
  );
}

export default ListPassword;
