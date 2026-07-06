import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4">

      <div className="text-center">

        {/* 404 */}
        <h1 className="text-7xl font-extrabold text-white sm:text-8xl md:text-9xl">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mx-auto mt-3 max-w-md text-sm text-slate-400 sm:text-base">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>

        {/* Home Button */}
        <Link
          to="/"
          className="mt-8 inline-flex rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Go Back Home
        </Link>

      </div>

    </div>
  );
}

export default NotFound;