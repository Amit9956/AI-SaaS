import { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { 
  Menu, X, Moon, Sun, LogOut, User, Home, Sparkles, 
  CreditCard, Mail, ChevronDown, LayoutDashboard, 
  Settings, HelpCircle, Bell, Zap 
} from "lucide-react";

import Button from "../common/Button";
import useTheme from "../../hooks/useTheme";

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [notifications, setNotifications] = useState(3);
  
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const token = localStorage.getItem("access_token") || localStorage.getItem("token");
  const userName = localStorage.getItem("user_name") || "User";

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenu(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenu]);

  // Close dropdown on route change
  useEffect(() => {
    setIsDropdownOpen(false);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("user_name");
    navigate("/");
    setMobileMenu(false);
    setIsDropdownOpen(false);
  };

  const navLinks = [
    { to: "/", label: "Home", icon: Home },
    { to: "/features", label: "Features", icon: Sparkles },
    { to: "/pricing", label: "Pricing", icon: CreditCard },
    { to: "/contact", label: "Contact", icon: Mail },
  ];

  const protectedLinks = [
    { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { to: "/chat", label: "AI Chat", icon: Zap },
    { to: "/image-generator", label: "Image Generator", icon: Sparkles },
    { to: "/resume-builder", label: "Resume Builder", icon: User },
  ];

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-slate-800/50 bg-slate-950/95 backdrop-blur-xl shadow-2xl shadow-black/20"
          : "bg-slate-950/80 backdrop-blur-md"
      } ${
        theme === "light" 
          ? "border-gray-200 bg-white/95 backdrop-blur-xl" 
          : "border-slate-800 bg-slate-950/80"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
        
        {/* ================= LOGO ================= */}
        <div
          onClick={() => navigate("/")}
          className="group flex cursor-pointer items-center gap-3 transition-all duration-300 hover:scale-105"
        >
          <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-xl font-bold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 group-hover:shadow-blue-500/50 group-hover:scale-110">
            N
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-50"></div>
          </div>
          <div>
            <h1 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-400">
              NeuroDesk AI
            </h1>
            <p className="text-xs text-gray-400">AI SaaS Platform</p>
          </div>
        </div>

        {/* ================= DESKTOP MENU ================= */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            return (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                    isActive
                      ? "text-cyan-400 bg-cyan-400/10"
                      : `${
                          theme === "light" 
                            ? "text-gray-700 hover:text-cyan-600" 
                            : "text-gray-300 hover:text-cyan-400"
                        } hover:bg-cyan-400/5`
                  }`
                }
              >
                <div className="flex items-center gap-2">
                  <link.icon className="h-4 w-4" />
                  {link.label}
                </div>
                <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </NavLink>
            );
          })}
        </nav>

        {/* ================= RIGHT SIDE ================= */}
        <div className="hidden items-center gap-3 lg:flex">
          {token ? (
            <>
              {/* Quick Actions */}
              <button
                onClick={() => navigate("/dashboard")}
                className="relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-blue-500/50 hover:scale-105"
              >
                <span className="relative z-10">Dashboard</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
              </button>
              
              {/* Notification Bell */}
              <button
                onClick={() => navigate("/notifications")}
                className="relative rounded-lg p-2 transition-all duration-300 hover:bg-white/5"
              >
                <Bell className="h-5 w-5 text-gray-400 hover:text-white" />
                {notifications > 0 && (
                  <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                    {notifications}
                  </span>
                )}
              </button>
              
              {/* User Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-all duration-300 hover:bg-white/5"
                >
                  <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white font-semibold">
                    {userName.charAt(0).toUpperCase()}
                  </div>
                  <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`} />
                </button>
                
                {/* Dropdown */}
                <div
                  className={`absolute right-0 mt-2 w-56 overflow-hidden rounded-xl border border-slate-700/50 bg-slate-900/95 backdrop-blur-xl shadow-2xl transition-all duration-300 ${
                    isDropdownOpen
                      ? "opacity-100 scale-100 translate-y-0"
                      : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                  }`}
                >
                  <div className="p-2">
                    {/* User Info */}
                    <div className="mb-2 rounded-lg bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-3">
                      <p className="font-semibold text-white">{userName}</p>
                      <p className="text-xs text-gray-400">Pro Plan</p>
                    </div>
                    
                    <hr className="my-2 border-slate-700/50" />
                    
                    {/* Protected Links */}
                    {protectedLinks.map((link) => (
                      <button
                        key={link.to}
                        onClick={() => {
                          navigate(link.to);
                          setIsDropdownOpen(false);
                        }}
                        className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-300 transition-all duration-200 hover:bg-white/5 hover:text-white"
                      >
                        <link.icon className="h-4 w-4" />
                        {link.label}
                      </button>
                    ))}
                    
                    <hr className="my-2 border-slate-700/50" />
                    
                    <button
                      onClick={() => {
                        navigate("/settings");
                        setIsDropdownOpen(false);
                      }}
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-300 transition-all duration-200 hover:bg-white/5 hover:text-white"
                    >
                      <Settings className="h-4 w-4" />
                      Settings
                    </button>
                    
                    <button
                      onClick={() => {
                        navigate("/help");
                        setIsDropdownOpen(false);
                      }}
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-300 transition-all duration-200 hover:bg-white/5 hover:text-white"
                    >
                      <HelpCircle className="h-4 w-4" />
                      Help & Support
                    </button>
                    
                    <hr className="my-2 border-slate-700/50" />
                    
                    <button
                      onClick={handleLogout}
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-red-400 transition-all duration-200 hover:bg-red-500/10 hover:text-red-300"
                    >
                      <LogOut className="h-4 w-4" />
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <button
                onClick={() => navigate("/login")}
                className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                  theme === "light"
                    ? "text-gray-700 hover:text-cyan-600 hover:bg-cyan-50"
                    : "text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/5"
                }`}
              >
                Login
              </button>
              <Button
                onClick={() => navigate("/register")}
                className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-blue-500/50 hover:scale-105"
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
              </Button>
            </>
          )}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`relative h-10 w-10 overflow-hidden rounded-lg border transition-all duration-300 ${
              theme === "dark"
                ? "border-slate-700 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/25"
                : "border-gray-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/25"
            }`}
          >
            <div className={`absolute inset-0 transition-transform duration-500 ${
              theme === "dark" ? "translate-y-0" : "-translate-y-full"
            }`}>
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-700 to-slate-800">
                <Moon className="h-5 w-5 text-cyan-400" />
              </div>
            </div>
            <div className={`absolute inset-0 transition-transform duration-500 ${
              theme === "light" ? "translate-y-0" : "translate-y-full"
            }`}>
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-yellow-100 to-yellow-200">
                <Sun className="h-5 w-5 text-yellow-600" />
              </div>
            </div>
          </button>
        </div>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className={`relative h-10 w-10 rounded-lg transition-all duration-300 lg:hidden ${
            theme === "light" ? "hover:bg-gray-100" : "hover:bg-white/5"
          }`}
        >
          <div className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${
            mobileMenu ? "rotate-90 scale-90" : "rotate-0 scale-100"
          }`}>
            {mobileMenu ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </div>
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`lg:hidden transition-all duration-500 ease-in-out ${
          mobileMenu
            ? "max-h-screen opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-4 pointer-events-none"
        } overflow-hidden`}
      >
        <div className={`border-t ${
          theme === "light" ? "border-gray-200 bg-white" : "border-slate-800 bg-slate-900"
        }`}>
          <div className="flex flex-col gap-1 p-4">
            {/* Main Links */}
            {navLinks.map((link) => {
              return (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenu(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-cyan-400/10 text-cyan-400"
                        : theme === "light"
                          ? "text-gray-700 hover:bg-gray-100"
                          : "text-gray-300 hover:bg-white/5"
                    }`
                  }
                >
                  <link.icon className="h-5 w-5" />
                  {link.label}
                </NavLink>
              );
            })}
            
            <hr className={`my-2 ${
              theme === "light" ? "border-gray-200" : "border-slate-800"
            }`} />
            
            {token ? (
              <>
                {/* Protected Links in Mobile */}
                {protectedLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileMenu(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? "bg-cyan-400/10 text-cyan-400"
                          : theme === "light"
                            ? "text-gray-700 hover:bg-gray-100"
                            : "text-gray-300 hover:bg-white/5"
                      }`
                    }
                  >
                    <link.icon className="h-5 w-5" />
                    {link.label}
                  </NavLink>
                ))}
                
                <hr className={`my-2 ${
                  theme === "light" ? "border-gray-200" : "border-slate-800"
                }`} />
                
                <button
                  onClick={() => {
                    navigate("/settings");
                    setMobileMenu(false);
                  }}
                  className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm transition-all duration-300 ${
                    theme === "light"
                      ? "text-gray-700 hover:bg-gray-100"
                      : "text-gray-300 hover:bg-white/5"
                  }`}
                >
                  <Settings className="h-5 w-5" />
                  Settings
                </button>
                
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-red-400 transition-all duration-300 hover:bg-red-500/10"
                >
                  <LogOut className="h-5 w-5" />
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    navigate("/login");
                    setMobileMenu(false);
                  }}
                  className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-300 ${
                    theme === "light"
                      ? "text-gray-700 hover:bg-gray-100"
                      : "text-gray-300 hover:bg-white/5"
                  }`}
                >
                  Login
                </button>
                <Button
                  onClick={() => {
                    navigate("/register");
                    setMobileMenu(false);
                  }}
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/25"
                >
                  Get Started
                </Button>
              </>
            )}
            
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`flex items-center justify-center gap-3 rounded-lg px-4 py-3 text-sm transition-all duration-300 ${
                theme === "light"
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-gray-300 hover:bg-white/5"
              }`}
            >
              {theme === "dark" ? (
                <>
                  <Sun className="h-5 w-5 text-yellow-400" />
                  Light Mode
                </>
              ) : (
                <>
                  <Moon className="h-5 w-5 text-cyan-400" />
                  Dark Mode
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;