import { api } from "../libs/axios";
import { getUserSchemaAll } from "../types";

export const getUser = async () => {
  try {
    const data = fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => console.log(json));
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
