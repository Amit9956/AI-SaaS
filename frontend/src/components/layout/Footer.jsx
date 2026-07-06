function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-4 py-6 text-gray-400 sm:px-6 sm:py-8 lg:px-8 lg:py-10">

      <div className="mx-auto max-w-7xl text-center">

        <p className="text-sm leading-6 sm:text-base">
          © 2026 <span className="font-semibold text-white">NeuroDesk AI</span>
          <span className="hidden sm:inline"> • </span>
          <br className="sm:hidden" />
          Built with React + FastAPI
        </p>

      </div>

    </footer>
  );
}

export default Footer;