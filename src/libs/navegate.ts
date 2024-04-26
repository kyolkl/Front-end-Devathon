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
    key: "importdata",
    label: "import data",
    parh: "/import-data",
    icon: FaDatabase ,
  },
  {
    key: "generator",
    label: "Generator",
    parh: "/generator",
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
    key: "signout",
    label: "Sign out",
    icon: IoLogOut ,
  },
]