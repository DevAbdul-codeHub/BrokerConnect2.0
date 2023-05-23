import { Link } from "react-router-dom";

import {
  HomeModernIcon,
  MagnifyingGlassCircleIcon,
  UserIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

export default function Header() {
  return (
    <header className="flex justify-between">
      <a href="" className="flex items-center gap-1 ">
        <HomeModernIcon className="w-8 h-8" />

        <span className="font-bold text-xl">Dallal-Ki</span>
      </a>

      <div className="flex border gap-6 rounded border-gray-300 py-2 px-4 shadow-md shadow-gray-300">
        <div>Location</div>
        <div className="border-l border-gray-500 "></div>
        <div>Date</div>
        <div className="border-l border-gray-500 "></div>
        <div>Guests</div>
        <button className="bg-primary text-white p-1 rounded-full">
          <MagnifyingGlassCircleIcon className="w-4 h-4" />
        </button>
      </div>
      <Link
        to={"/login"}
        className="flex items-center border gap-2 rounded border-gray-300 py-2 px-4"
      >
        <UserIcon className="w-6 h-6 bg-primary text-white rounded  border-gray-500" />
        <div>
          <Bars3Icon className="w-6 h-6 relative top" />
        </div>
      </Link>
    </header>
  );
}
