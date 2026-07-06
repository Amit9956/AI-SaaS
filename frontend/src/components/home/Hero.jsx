import { useNavigate } from "react-router-dom";
import Button from "../common/Button";

export default function Hero() {

    const navigate = useNavigate();

    const token =
        localStorage.getItem("access_token") ||
        localStorage.getItem("token");

    const goDashboard = () => {

        if (token) {

            navigate("/dashboard");

        } else {

            navigate("/login");

        }

    };

    return (

        <section className="relative overflow-hidden bg-[#020617] text-white">

            {/* Background */}

            <div className="absolute inset-0">

                <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-cyan-500/20 blur-[170px]" />

                <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-blue-600/20 blur-[170px]" />

                <div className="absolute left-1/2 top-1/3 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[150px]" />

            </div>

            <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:flex-row lg:gap-16 lg:px-8 lg:pt-28 lg:pb-20">

                {/* LEFT */}

                <div className="flex-1">

                    <div className="inline-flex items-center rounded-full border mt-6 border-cyan-500/30 bg-cyan-500/10 px-6 py-2 text-sm text-cyan-300">

                        🚀 AI Powered Productivity Platform

                    </div>

                    <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">

                        Build Smarter

                        <br />

                        <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-cyan-500 bg-clip-text text-transparent">

                            with NeuroDesk AI

                        </span>

                    </h1>

                    <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">

                        Chat with AI, generate images,

                        build ATS-friendly resumes,

                        improve resumes,

                        create cover letters,

                        match jobs,

                        prepare for interviews,

                        summarize PDFs,

                        and boost your productivity—

                        all from one powerful AI platform.

                    </p>

                    {/* PART 2 */}

                                        {/* ================= BUTTONS ================= */}

                    <div className="mt-8 flex flex-col gap-4 sm:flex-row">

                        <Button
                            onClick={() => navigate("/register")}
                            className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 text-lg font-semibold shadow-xl transition duration-300 hover:scale-105"
                        >
                            🚀 Get Started Free
                        </Button>

                        <button
                            onClick={goDashboard}
                            className="rounded-xl border border-slate-600 px-8 py-4 text-lg font-semibold transition duration-300 hover:border-cyan-400 hover:bg-slate-900"
                        >
                            ▶ Live Demo
                        </button>

                    </div>

                    {/* ================= STATS ================= */}

                    <div className="mt-14 grid grid-cols-3 gap-8 max-w-xl">

                        <div>

                            <h2 className="text-4xl font-bold text-cyan-400">

                                50K+

                            </h2>

                            <p className="mt-2 text-slate-400">

                                Active Users

                            </p>

                        </div>

                        <div>

                            <h2 className="text-4xl font-bold text-cyan-400">

                                25+

                            </h2>

                            <p className="mt-2 text-slate-400">

                                AI Tools

                            </p>

                        </div>

                        <div>

                            <h2 className="text-4xl font-bold text-cyan-400">

                                99.9%

                            </h2>

                            <p className="mt-2 text-slate-400">

                                Uptime

                            </p>

                        </div>

                    </div>

                    {/* ================= TRUSTED ================= */}

                    <div className="mt-14">

                        <p className="mb-5 text-sm uppercase tracking-[4px] text-slate-500">

                            Trusted By

                        </p>

                        <div className="flex flex-wrap items-center gap-8 text-lg font-semibold text-slate-400">

                            <span>Google</span>

                            <span>Microsoft</span>

                            <span>Amazon</span>

                            <span>Meta</span>

                            <span>OpenAI</span>

                        </div>

                    </div>

                </div>

                {/* ================= RIGHT SIDE ================= */}

                <div className="flex w-full justify-center lg:w-[45%]">

                    <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900/80 p-5 shadow-2xl backdrop-blur-xl sm:max-w-xl sm:p-8">

                        {/* Window Header */}

                        <div className="mb-8 flex items-center">

                            <div className="flex gap-2">

                                <span className="h-3 w-3 rounded-full bg-red-500"></span>
                                <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
                                <span className="h-3 w-3 rounded-full bg-green-500"></span>

                            </div>

                            <span className="ml-auto text-sm text-slate-400">

                                NeuroDesk Dashboard

                            </span>

                        </div>

                        <h2 className="text-3xl font-bold">

                            AI Workspace

                        </h2>

                        <p className="mt-2 text-slate-400">

                            Everything you need in one place.

                        </p>

                        <div className="mt-8 grid grid-cols-2 gap-5">

                            <button
                                onClick={() => navigate("/chat")}
                                className="rounded-2xl bg-slate-800 p-6 transition hover:-translate-y-1 hover:bg-blue-600"
                            >
                                <div className="text-5xl">🤖</div>

                                <h3 className="mt-4 text-xl font-bold">

                                    AI Chat

                                </h3>

                                <p className="mt-2 text-sm text-slate-300">

                                    Ask anything instantly.

                                </p>

                            </button>

                            <button
                                onClick={() => navigate("/image-generator")}
                                className="rounded-2xl bg-slate-800 p-6 transition hover:-translate-y-1 hover:bg-cyan-600"
                            >
                                <div className="text-5xl">🎨</div>

                                <h3 className="mt-4 text-xl font-bold">

                                    AI Images

                                </h3>

                                <p className="mt-2 text-sm text-slate-300">

                                    Generate beautiful images.

                                </p>

                            </button>

                            <button
                                onClick={() => navigate("/resume-builder")}
                                className="rounded-2xl bg-slate-800 p-6 transition hover:-translate-y-1 hover:bg-green-600"
                            >
                                <div className="text-5xl">📄</div>

                                <h3 className="mt-4 text-xl font-bold">

                                    Resume Builder

                                </h3>

                                <p className="mt-2 text-sm text-slate-300">

                                    Build ATS Resume.

                                </p>

                            </button>

                            <button
                                onClick={() => navigate("/cover-letter")}
                                className="rounded-2xl bg-slate-800 p-6 transition hover:-translate-y-1 hover:bg-purple-600"
                            >
                                <div className="text-5xl">✉️</div>

                                <h3 className="mt-4 text-xl font-bold">

                                    Cover Letter

                                </h3>

                                <p className="mt-2 text-sm text-slate-300">

                                    AI Generated.

                                </p>

                            </button>

                            <button
                                onClick={() => navigate("/job-match")}
                                className="rounded-2xl bg-slate-800 p-6 transition hover:-translate-y-1 hover:bg-orange-600"
                            >
                                <div className="text-5xl">🎯</div>

                                <h3 className="mt-4 text-xl font-bold">

                                    Job Match

                                </h3>

                                <p className="mt-2 text-sm text-slate-300">

                                    Match your Resume.

                                </p>

                            </button>

                            <button
                                onClick={goDashboard}
                                className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-6 transition hover:scale-105"
                            >
                                <div className="text-5xl">🚀</div>

                                <h3 className="mt-4 text-xl font-bold">

                                    Dashboard

                                </h3>

                                <p className="mt-2 text-sm">

                                    Open Workspace

                                </p>

                            </button>

                        </div>

                        {/* Bottom Status */}

                        <div className="mt-8 rounded-2xl border border-slate-700 bg-slate-800 p-5">

                            <div className="flex items-center justify-between">

                                <span className="font-semibold">

                                    System Status

                                </span>

                                <span className="rounded-full bg-green-500 px-3 py-1 text-xs font-bold">

                                    ONLINE

                                </span>

                            </div>

                            <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-700">

                                <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"></div>

                            </div>

                        </div>

                    </div>

                </div>

                                {/* ================= Floating Cards ================= */}

                <div className="mt-8 grid grid-cols-3 gap-4">

                    <div className="rounded-xl border border-slate-700 bg-slate-800 p-4 text-center">

                        <div className="text-2xl">⚡</div>

                        <p className="mt-2 text-sm text-slate-300">

                            Fast AI

                        </p>

                    </div>

                    <div className="rounded-xl border border-slate-700 bg-slate-800 p-4 text-center">

                        <div className="text-2xl">🔒</div>

                        <p className="mt-2 text-sm text-slate-300">

                            Secure

                        </p>

                    </div>

                    <div className="rounded-xl border border-slate-700 bg-slate-800 p-4 text-center">

                        <div className="text-2xl">☁️</div>

                        <p className="mt-2 text-sm text-slate-300">

                            Cloud Sync

                        </p>

                    </div>

                </div>

            </div>


    </section>

);

}

