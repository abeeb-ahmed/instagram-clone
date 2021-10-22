import Image from "next/image";
import {
  SearchIcon,
  PlaceCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
  PlusCircleIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";

function Header() {
  return (
    <div className="bg-white">
      <div className="flex justify-between max-w-6xl p-5 sm:mx-5 lg:mx-auto">
        {/* Left */}
        <div className="relative hidden lg:inline-grid w-24 cursor-pointer">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative lg:hidden w-10 flex-shrink-0 cursor-pointer">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* Middle - Search icon and input */}
        <div className="max-w-xs">
          <div className="relative mt-1 px-3 rounded-md flex items-center">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-50 border-gray-100 p-1 block w-full pl-10 sm:text-sm rounded-md focus:ring-black focus:border-black"
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center justify-end space-x-3">
          <HomeIcon className="nav-btn" />
          <MenuIcon className="h-6 w-6 md:hidden cursor-pointer flex-shrink-0" />
          <div className="relative">
            <PaperAirplaneIcon className="nav-btn rotate-45" />
            <div className="absolute -top-2 -right-0 bg-red-500 h-5 w-5 text-sm rounded-full flex item-center justify-center animate-pulse text-white">
              3
            </div>
          </div>
          <PlusCircleIcon className="nav-btn" />
          <UserGroupIcon className="nav-btn" />
          <HeartIcon className="nav-btn" />
          <img
            src="data:image/jpeg;base64,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"
            alt="profile pic"
            className="rounded-full h-10 cursor-pointer"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Header;
