function Header({ title, subtitle }) {
  return (
    <header className="border-b border-slate-200 bg-white px-4 py-4 shadow-sm sm:px-6 lg:px-8">

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        {/* Left */}
        <div className="min-w-0">

          <h1 className="truncate text-2xl font-bold text-slate-800 sm:text-3xl lg:text-4xl">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-1 text-sm text-gray-500 sm:text-base">
              {subtitle}
            </p>
          )}

        </div>

        {/* Right */}
        <div className="flex w-full justify-start sm:w-auto sm:justify-end">

          <button
            className="
              w-full
              rounded-lg
              bg-blue-600
              px-5
              py-3
              font-medium
              text-white
              transition
              hover:bg-blue-700
              sm:w-auto
            "
          >
            Upgrade
          </button>

        </div>

      </div>

    </header>
  );
}

export default Header;