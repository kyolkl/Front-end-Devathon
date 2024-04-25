import {HiOutlineViewGrid} from "react-icons/hi"
import { RiAiGenerate } from "react-icons/ri";
import { FaDatabase,FaCircleUser } from "react-icons/fa6";
import { IoLogOut } from "react-icons/io5";


export const DASHBOARD = [
  {
    key: "dashboard",
    label: "Dashboard",
    parh: "/dashboard",
    icon: HiOutlineViewGrid ,
  },
  {
    key: "importardatos",
    label: "Importar Datos",
    parh: "/importar-datos",
    icon: FaDatabase ,
  },
  {
    key: "generador",
    label: "Generador",
    parh: "/generador",
    icon: RiAiGenerate ,
  }
]
export const SETTINGS = [
  {
    key: "user",
    label: "User",
    parh: "/user",
    icon: FaCircleUser ,
  },
  {
    key: "logout",
    label: "Logout",
    icon: IoLogOut ,
  },
]