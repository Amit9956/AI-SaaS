import { NavLink } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

import {
    getConversations,
    deleteConversation,
    renameConversation,
} from "../../api/chatApi";

function Sidebar({ closeSidebar }) {
    const [conversations, setConversations] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [editingTitle, setEditingTitle] = useState("");
    const [search, setSearch] = useState("");

    const inputRef = useRef(null);

    useEffect(() => {
        loadConversations();

        const refresh = () => {
            loadConversations();
        };

        window.addEventListener(
            "refresh-conversations",
            refresh
        );

        return () => {
            window.removeEventListener(
                "refresh-conversations",
                refresh
            );
        };
    }, []);

    useEffect(() => {
        if (editingId && inputRef.current) {
            inputRef.current.focus();
            inputRef.current.select();
        }
    }, [editingId]);

    const loadConversations = async () => {
        try {
            const data = await getConversations();
            setConversations(data);
        } catch (err) {
            console.log(err);
        }
    };

    const filteredConversations =
        conversations.filter((chat) =>
            chat.title
                .toLowerCase()
                .includes(search.toLowerCase())
        );

    const startRename = (e, chat) => {
        e.stopPropagation();
        setEditingId(chat.id);
        setEditingTitle(chat.title);
    };

    const saveRename = async (chat) => {
        if (!editingTitle.trim()) {
            setEditingId(null);
            return;
        }

        try {
            await renameConversation(
                chat.id,
                editingTitle
            );
            setEditingId(null);
            loadConversations();
        } catch (err) {
            console.log(err);
        }
    };

    const cancelRename = () => {
        setEditingId(null);
        setEditingTitle("");
    };

    const handleDelete = async (e, id) => {
        e.stopPropagation();

        if (!window.confirm("Delete this chat?")) return;

        try {
            await deleteConversation(id);

            if (
                Number(
                    localStorage.getItem(
                        "conversation_id"
                    )
                ) === id
            ) {
                localStorage.removeItem(
                    "conversation_id"
                );
                window.dispatchEvent(
                    new Event("new-chat")
                );
            }

            loadConversations();
        } catch (err) {
            console.log(err);
        }
    };

    const menuItems = [
        {
            name: "Dashboard",
            path: "/dashboard",
            icon: "🏠",
        },
        {
            name: "AI Chat",
            path: "/chat",
            icon: "💬",
        },
        {
            name: "AI Image",
            path: "/chat",
            icon: "🖼️",
        },
        {
            name: "PDF AI",
            path: "/resume-builder",
            icon: "📄",
        },
        {
            name: "Resume Builder",
            path: "/resume-builder",
            icon: "📋",
        },
        {
            name: "Profile",
            path: "/profile",
            icon: "👤",
        },
        {
            name: "Settings",
            path: "/settings",
            icon: "⚙️",
        },
    ];

    const handleClose = () => {
        if (closeSidebar) {
            closeSidebar();
        }
    };

    return (
        <div className="flex h-full w-full flex-col bg-[#171717] text-white lg:h-screen lg:w-[320px] lg:border-r lg:border-[#2f2f2f]">
            {/* Logo */}
            <div className="border-b border-[#2f2f2f] p-5">
                <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#2b2b2b] text-2xl">
                        🧠
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">
                            NeuroDesk AI
                        </h1>
                        <p className="text-sm text-gray-400">
                            AI SaaS Platform
                        </p>
                    </div>
                </div>
            </div>

            <div className="p-5">
                {/* New Chat */}
                <button
                    onClick={() => {
                        localStorage.removeItem(
                            "conversation_id"
                        );
                        window.dispatchEvent(
                            new Event("new-chat")
                        );
                        handleClose();
                    }}
                    className="mb-4 flex w-full items-center justify-center rounded-2xl bg-[#2b2b2b] py-3 font-semibold transition hover:bg-[#343434]"
                >
                    + New Chat
                </button>

                {/* Search */}
                <input
                    value={search}
                    onChange={(e) =>
                        setSearch(e.target.value)
                    }
                    placeholder="Search chats..."
                    className="mb-6 w-full rounded-2xl border border-[#3a3a3a] bg-[#242424] px-4 py-3 outline-none placeholder:text-gray-500"
                />
            </div>

            <nav className="flex-1 overflow-y-auto px-4">
                {/* Menu */}
                <ul className="mb-6 space-y-1">
                    {menuItems.map((item) => (
                        <li key={item.path}>
                            <NavLink
                                to={item.path}
                                onClick={handleClose}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                                        isActive
                                            ? "bg-[#2d2d2d]"
                                            : "hover:bg-[#242424]"
                                    }`
                                }
                            >
                                <span>
                                    {item.icon}
                                </span>
                                <span>
                                    {item.name}
                                </span>
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <p className="mb-3 px-2 text-xs uppercase tracking-wider text-gray-500">
                    Chats
                </p>

                <div className="space-y-2">
                    {filteredConversations.length === 0 && (
                        <p className="px-2 text-sm text-gray-500">
                            No conversations
                        </p>
                    )}

                    {filteredConversations.map((chat) => (
                        <div
                            key={chat.id}
                            onClick={() => {
                                if (editingId) return;
                                localStorage.setItem(
                                    "conversation_id",
                                    chat.id
                                );
                                window.dispatchEvent(
                                    new Event("load-chat")
                                );
                                handleClose();
                            }}
                            className="group flex cursor-pointer items-center justify-between rounded-xl px-3 py-3 transition hover:bg-[#242424]"
                        >
                            <div className="flex-1 overflow-hidden">
                                {editingId === chat.id ? (
                                    <input
                                        ref={inputRef}
                                        value={editingTitle}
                                        onClick={(e) =>
                                            e.stopPropagation()
                                        }
                                        onChange={(e) =>
                                            setEditingTitle(
                                                e.target.value
                                            )
                                        }
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                saveRename(chat);
                                            }
                                            if (e.key === "Escape") {
                                                cancelRename();
                                            }
                                        }}
                                        className="w-full rounded-lg bg-[#303030] px-2 py-1 text-white outline-none"
                                    />
                                ) : (
                                    <p className="truncate text-sm">
                                        {chat.title}
                                    </p>
                                )}
                            </div>

                            {editingId === chat.id ? (
                                <div className="ml-2 flex gap-2">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            saveRename(chat);
                                        }}
                                        className="text-green-400 hover:text-green-500"
                                    >
                                        ✔
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            cancelRename();
                                        }}
                                        className="text-red-400 hover:text-red-500"
                                    >
                                        ✖
                                    </button>
                                </div>
                            ) : (
                                <div className="ml-3 hidden items-center gap-2 group-hover:flex">
                                    <button
                                        onClick={(e) =>
                                            startRename(
                                                e,
                                                chat
                                            )
                                        }
                                        className="text-gray-400 hover:text-white"
                                    >
                                        ✏️
                                    </button>
                                    <button
                                        onClick={(e) =>
                                            handleDelete(
                                                e,
                                                chat.id
                                            )
                                        }
                                        className="text-gray-400 hover:text-red-500"
                                    >
                                        🗑️
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </nav>

            <div className="border-t border-[#2f2f2f] p-5">
                <p className="text-center text-xs text-gray-500">
                    NeuroDesk AI • v1.0
                </p>
            </div>
        </div>
    );
}

export default Sidebar;