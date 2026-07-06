import { useEffect } from "react";

function SearchButton() {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key.toLowerCase() === "k") {
        e.preventDefault();
        alert("Search feature coming soon 🚀");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <button
      title="Search (Ctrl + K)"
      className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-lg
        text-lg
        text-gray-300
        transition-all
        duration-200
        hover:bg-[#303030]
        hover:text-white
        active:scale-95
        sm:h-11
        sm:w-11
        sm:text-xl
      "
    >
      <span className="select-none">🔍</span>

      {/* Desktop Shortcut */}
      <span className="ml-2 hidden rounded border border-slate-600 px-2 py-0.5 text-xs text-slate-400 lg:inline">
        Ctrl + K
      </span>
    </button>
  );
}

export default SearchButton;