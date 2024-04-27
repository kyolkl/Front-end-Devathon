import {HiOutlineViewGrid} from "react-icons/hi"
import { RiAiGenerate } from "react-icons/ri";
import { FaDatabase,FaCircleUser } from "react-icons/fa6";
import { IoLogOut } from "react-icons/io5";


export const DASHBOARD = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/dashboard",
    icon: HiOutlineViewGrid ,
  },
  {
    key: "importdata",
    label: "import data",
    path: "/import-data",
    icon: FaDatabase ,
  },
  {
    key: "generator",
    label: "Generator",
    path: "/generator",
    icon: RiAiGenerate ,
  }
]
export const SETTINGS = [
  {
    key: "user",
    label: "User",
    path: "/user",
    icon: FaCircleUser ,
  },
  {
    key: "signout",
    label: "Sign out",
    icon: IoLogOut ,
  },
]