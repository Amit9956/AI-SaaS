import { Search, Bell, Moon } from "lucide-react";

import ProfileMenu from "./ProfileMenu";
import ModelSelector from "../header/ModelSelector";

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#303030] bg-[#212121]/90 backdrop-blur">

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Left */}
        <div className="flex min-w-0 items-center gap-2 sm:gap-4">

          <h1 className="truncate text-lg font-bold text-white sm:text-xl">
            NeuroDesk AI
          </h1>

          <div className="hidden sm:block">
            <ModelSelector />
          </div>

        </div>

        {/* Right */}
        <div className="flex items-center gap-1 sm:gap-2 lg:gap-3">

          <button className="rounded-lg p-2 text-gray-400 transition hover:bg-[#2f2f2f] hover:text-white">
            <Search size={18} className="sm:h-5 sm:w-5" />
          </button>

          <button className="rounded-lg p-2 text-gray-400 transition hover:bg-[#2f2f2f] hover:text-white">
            <Bell size={18} className="sm:h-5 sm:w-5" />
          </button>

          <button className="rounded-lg p-2 text-gray-400 transition hover:bg-[#2f2f2f] hover:text-white">
            <Moon size={18} className="sm:h-5 sm:w-5" />
          </button>

          <ProfileMenu />

        </div>

      </div>

      {/* Mobile Model Selector */}
      <div className="border-t border-[#303030] px-4 py-3 sm:hidden">
        <ModelSelector />
      </div>

    </header>
  );
}

export default Header;