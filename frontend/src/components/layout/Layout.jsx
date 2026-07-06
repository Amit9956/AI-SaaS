import { useState } from "react";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-[#212121] text-white">

      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 z-50 h-screen w-72 bg-[#171717] shadow-2xl transition-transform duration-300 lg:hidden ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar closeSidebar={() => setSidebarOpen(false)} />
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">

        {/* Mobile Header */}
        <header className="flex items-center justify-between border-b border-slate-800 bg-[#202123] px-4 py-3 lg:hidden">

          <button
            onClick={() => setSidebarOpen(true)}
            className="rounded-lg p-2 transition hover:bg-slate-800"
          >
            <Menu size={24} />
          </button>

          <h1 className="text-lg font-semibold">
            NeuroDesk AI
          </h1>

          <div className="w-10"></div>

        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>

      </div>

    </div>
  );
}

export default Layout;