import { useState } from "react";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [showSaveMessage, setShowSaveMessage] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  
  const [userData, setUserData] = useState({
    name: "Amit Kumar",
    email: "amit@neurodesk.ai",
    phone: "+91 98765 43210",
    location: "Mumbai, India",
    role: "Full Stack Developer",
    company: "NeuroDesk AI",
    bio: "Passionate about AI and building innovative solutions. Full Stack Developer with 5+ years of experience.",
    joinDate: "January 2024",
    website: "https://neurodesk.ai"
  });

  const [stats, setStats] = useState({
    projects: 24,
    followers: 1250,
    following: 340,
    stars: 89,
    contributions: 120,
    aiCredits: 1500
  });

  const [activity, setActivity] = useState([
    { id: 1, title: "AI Chat", time: "2 hours ago", icon: "💬", color: "text-blue-400" },
    { id: 2, title: "Resume Analyzer", time: "5 hours ago", icon: "📄", color: "text-green-400" },
    { id: 3, title: "Image Generator", time: "1 day ago", icon: "🎨", color: "text-yellow-400" },
  ]);

  const [editingData, setEditingData] = useState(userData);

  const handleEdit = () => {
    setIsEditing(true);
    setEditingData(userData);
  };

  const handleSave = () => {
    setUserData(editingData);
    setIsEditing(false);
    setShowSaveMessage(true);
    setTimeout(() => setShowSaveMessage(false), 3000);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditingData(userData);
  };

  const tabs = [
    { id: "overview", label: "Overview", icon: "👤" },
    { id: "activity", label: "Activity", icon: "📊" },
    { id: "settings", label: "Settings", icon: "⚙️" },
    { id: "security", label: "Security", icon: "🛡️" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl flex items-center gap-3">
              👤 My Profile
              <span className="text-sm font-normal text-gray-400">• {userData.role}</span>
            </h1>
            <p className="mt-2 text-gray-400">Manage your profile and account settings</p>
          </div>
          <div className="flex gap-3">
            {!isEditing ? (
              <button
                onClick={handleEdit}
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-2.5 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                ✏️ Edit Profile
              </button>
            ) : (
              <>
                <button
                  onClick={handleCancel}
                  className="rounded-lg border border-slate-700 px-6 py-2.5 font-semibold text-gray-300 transition-all duration-300 hover:bg-slate-800"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-2.5 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
                >
                  💾 Save Changes
                </button>
              </>
            )}
          </div>
        </div>

        {/* Save Message */}
        {showSaveMessage && (
          <div className="mt-4 animate-fadeIn rounded-lg border border-green-500/20 bg-green-500/10 p-4 text-green-400">
            <div className="flex items-center gap-2">
              ✅ Profile updated successfully!
            </div>
          </div>
        )}

        {/* Profile Grid */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          
          {/* Left Column - Profile Card */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl border border-slate-800/50 bg-slate-900/50 p-6 backdrop-blur-sm">
              {/* Avatar Section */}
              <div className="flex flex-col items-center">
                <div className="group relative">
                  <div className="relative h-28 w-28 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 p-1 shadow-lg shadow-blue-500/25">
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-800 text-5xl font-bold text-white">
                      {userData.name.charAt(0)}
                    </div>
                  </div>
                  <button className="absolute bottom-0 right-0 rounded-full bg-blue-500 p-2 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25">
                    📷
                  </button>
                </div>
                <h2 className="mt-4 text-2xl font-bold text-white">{userData.name}</h2>
                <p className="text-cyan-400">{userData.role}</p>
                <p className="text-sm text-gray-400">{userData.company}</p>
              </div>

              {/* Stats */}
              <div className="mt-6 grid grid-cols-3 gap-2 border-t border-slate-800 pt-6">
                <div className="text-center">
                  <p className="text-lg font-bold text-white">{stats.projects}</p>
                  <p className="text-xs text-gray-400">Projects</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-white">{stats.followers}</p>
                  <p className="text-xs text-gray-400">Followers</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-white">{stats.stars}</p>
                  <p className="text-xs text-gray-400">Stars</p>
                </div>
              </div>

              {/* AI Credits */}
              <div className="mt-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-4 border border-blue-500/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-400">⚡</span>
                    <span className="font-semibold text-white">AI Credits</span>
                  </div>
                  <span className="text-lg font-bold text-cyan-400">{stats.aiCredits}</span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-slate-700">
                  <div className="h-1.5 w-3/4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="mt-6 space-y-3 border-t border-slate-800 pt-6">
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-gray-400">📧</span>
                  <span className="text-gray-300">{userData.email}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-gray-400">📱</span>
                  <span className="text-gray-300">{userData.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-gray-400">📍</span>
                  <span className="text-gray-300">{userData.location}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-gray-400">📅</span>
                  <span className="text-gray-300">Joined {userData.joinDate}</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-6 flex justify-center gap-3 border-t border-slate-800 pt-6">
                <button className="rounded-lg bg-slate-800 p-2.5 text-lg transition-all duration-300 hover:bg-slate-700 hover:scale-110">
                  🐦
                </button>
                <button className="rounded-lg bg-slate-800 p-2.5 text-lg transition-all duration-300 hover:bg-slate-700 hover:scale-110">
                  🔗
                </button>
                <button className="rounded-lg bg-slate-800 p-2.5 text-lg transition-all duration-300 hover:bg-slate-700 hover:scale-110">
                  💻
                </button>
                <button className="rounded-lg bg-slate-800 p-2.5 text-lg transition-all duration-300 hover:bg-slate-700 hover:scale-110">
                  🌐
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="flex gap-2 overflow-x-auto border-b border-slate-800 pb-2">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 whitespace-nowrap rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                        : "text-gray-400 hover:bg-slate-800 hover:text-white"
                    }`}
                  >
                    <span>{tab.icon}</span>
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Tab Content */}
            <div className="mt-6 space-y-6">
              {/* Overview Tab */}
              {activeTab === "overview" && (
                <>
                  {/* Bio */}
                  <div className="rounded-2xl border border-slate-800/50 bg-slate-900/50 p-6 backdrop-blur-sm">
                    <h3 className="text-lg font-semibold text-white">📝 About Me</h3>
                    <p className="mt-3 text-gray-300 leading-relaxed">
                      {isEditing ? (
                        <textarea
                          value={editingData.bio}
                          onChange={(e) => setEditingData({...editingData, bio: e.target.value})}
                          rows={4}
                          className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-white outline-none focus:border-blue-500"
                        />
                      ) : (
                        userData.bio
                      )}
                    </p>
                  </div>

                  {/* Activity Feed */}
                  <div className="rounded-2xl border border-slate-800/50 bg-slate-900/50 p-6 backdrop-blur-sm">
                    <h3 className="text-lg font-semibold text-white">📊 Recent Activity</h3>
                    <div className="mt-4 space-y-4">
                      {activity.map((item) => (
                        <div key={item.id} className="flex items-center gap-4 rounded-xl border border-slate-800 p-4 transition-all duration-300 hover:border-slate-700">
                          <div className={`rounded-lg bg-slate-800 p-2.5 text-2xl ${item.color}`}>
                            {item.icon}
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-white">{item.title}</p>
                            <p className="text-sm text-gray-400">{item.time}</p>
                          </div>
                          <button className="text-gray-400 transition-all duration-300 hover:text-white hover:scale-110">
                            →
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* Activity Tab */}
              {activeTab === "activity" && (
                <div className="rounded-2xl border border-slate-800/50 bg-slate-900/50 p-6 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold text-white">📋 All Activities</h3>
                  <div className="mt-4 space-y-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="flex items-center gap-4 rounded-xl border border-slate-800 p-4 transition-all duration-300 hover:border-slate-700">
                        <div className="rounded-lg bg-slate-800 p-2.5 text-2xl text-blue-400">
                          💬
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-white">AI Chat Conversation #{i}</p>
                          <p className="text-sm text-gray-400">2 hours ago</p>
                        </div>
                        <span className="text-xs text-gray-500">✅ Completed</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Settings Tab */}
              {activeTab === "settings" && (
                <div className="space-y-4">
                  <div className="rounded-2xl border border-slate-800/50 bg-slate-900/50 p-6 backdrop-blur-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">🔔</span>
                        <div>
                          <h4 className="font-medium text-white">Notifications</h4>
                          <p className="text-sm text-gray-400">Receive email notifications</p>
                        </div>
                      </div>
                      <div className="relative h-7 w-14 cursor-pointer rounded-full bg-blue-600 transition-all duration-300">
                        <div className="absolute right-1 top-1 h-5 w-5 rounded-full bg-white transition-all duration-300"></div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-800/50 bg-slate-900/50 p-6 backdrop-blur-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">🎨</span>
                        <div>
                          <h4 className="font-medium text-white">Theme</h4>
                          <p className="text-sm text-gray-400">Dark mode enabled</p>
                        </div>
                      </div>
                      <span className="text-sm text-cyan-400">🌙 Dark</span>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-800/50 bg-slate-900/50 p-6 backdrop-blur-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">💳</span>
                        <div>
                          <h4 className="font-medium text-white">Subscription</h4>
                          <p className="text-sm text-gray-400">Pro Plan</p>
                        </div>
                      </div>
                      <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-semibold text-green-400">✅ Active</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Security Tab */}
              {activeTab === "security" && (
                <div className="space-y-4">
                  <div className="rounded-2xl border border-slate-800/50 bg-slate-900/50 p-6 backdrop-blur-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">🔒</span>
                        <div>
                          <h4 className="font-medium text-white">Two-Factor Authentication</h4>
                          <p className="text-sm text-gray-400">Secure your account</p>
                        </div>
                      </div>
                      <div className="relative h-7 w-14 cursor-pointer rounded-full bg-slate-700 transition-all duration-300">
                        <div className="absolute left-1 top-1 h-5 w-5 rounded-full bg-white transition-all duration-300"></div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-800/50 bg-slate-900/50 p-6 backdrop-blur-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">🛡️</span>
                        <div>
                          <h4 className="font-medium text-white">Login Sessions</h4>
                          <p className="text-sm text-gray-400">Manage active sessions</p>
                        </div>
                      </div>
                      <button className="text-sm text-blue-400 hover:text-blue-300">View All →</button>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6 backdrop-blur-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">🗑️</span>
                        <div>
                          <h4 className="font-medium text-red-400">Delete Account</h4>
                          <p className="text-sm text-gray-400">Permanently delete your account</p>
                        </div>
                      </div>
                      <button className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-red-700">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

export default Profile;