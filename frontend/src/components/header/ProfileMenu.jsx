import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProfileMenu() {
  const [open, setOpen] = useState(false);

  const menuRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("conversation_id");

    navigate("/login");
  };

  return (
    <div ref={menuRef} className="relative">

      {/* Avatar */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          bg-gradient-to-r
          from-blue-500
          to-cyan-500
          text-sm
          font-semibold
          text-white
          transition
          hover:scale-105
          sm:h-11
          sm:w-11
          sm:text-base
        "
      >
        A
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="
            absolute
            right-0
            z-50
            mt-3
            w-56
            max-w-[90vw]
            overflow-hidden
            rounded-xl
            border
            border-[#3a3a3a]
            bg-[#2b2b2b]
            shadow-2xl
          "
        >
          <button
            onClick={() => {
              navigate("/profile");
              setOpen(false);
            }}
            className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm transition hover:bg-[#383838] sm:text-base"
          >
            <span>👤</span>
            <span>My Profile</span>
          </button>

          <button
            onClick={() => {
              navigate("/settings");
              setOpen(false);
            }}
            className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm transition hover:bg-[#383838] sm:text-base"
          >
            <span>⚙️</span>
            <span>Settings</span>
          </button>

          <button
            className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm transition hover:bg-[#383838] sm:text-base"
          >
            <span>⭐</span>
            <span>Upgrade Plan</span>
          </button>

          <hr className="border-[#3a3a3a]" />

          <button
            onClick={logout}
            className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm text-red-400 transition hover:bg-[#383838] sm:text-base"
          >
            <span>🚪</span>
            <span>Logout</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default ProfileMenu;