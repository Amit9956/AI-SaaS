import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Dashboard() {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-[#202123] px-4 py-6 text-white sm:px-6 lg:px-8">

      {/* Heading */}
      <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
        Dashboard
      </h1>

      {/* Profile Card */}
      <div className="mt-6 rounded-2xl border border-slate-700 bg-slate-900 p-5 shadow-lg sm:mt-8 sm:p-8">

        <h2 className="text-xl font-semibold sm:text-2xl">
          Welcome 👋
        </h2>

        <div className="mt-6 space-y-5">

          {/* Name */}
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center">
            <span className="text-gray-400">Name :</span>

            <span className="font-semibold text-blue-400 break-words">
              {user?.name || "N/A"}
            </span>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center">
            <span className="text-gray-400">Email :</span>

            <span className="font-semibold text-blue-400 break-all">
              {user?.email || "N/A"}
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;