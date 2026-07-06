import { useState } from 'react';
import {
  User, Bell, Globe, Palette, Lock, CreditCard,
  Save, RefreshCw, Mail, Smartphone, MessageSquare,
  Shield, Zap, Clock, Download, Trash2, CheckCircle,
  AlertCircle, Sparkles, Crown
} from 'lucide-react';

import { useTheme } from '../context/ThemeContext';
import { useSettings } from '../context/SettingsContext';
import SettingItem from '../components/settings/SettingItem';
import SettingCard from '../components/settings/SettingCard';
import ThemeToggle from '../components/settings/ThemeToggle';
import ModelSelector from '../components/settings/ModelSelector';

export default function Settings() {
  const { theme, setThemeMode } = useTheme(); // ✅ Use setThemeMode
  const { settings, toggleSetting, updateSetting, resetSettings } = useSettings();
  
  const [isSaving, setIsSaving] = useState(false);
  const [activeTab, setActiveTab] = useState('general');
  const [saveMessage, setSaveMessage] = useState(null);

  const handleSave = async () => {
    setIsSaving(true);
    setSaveMessage(null);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSaveMessage({ type: 'success', text: 'Settings saved successfully! ✅' });
      setTimeout(() => setSaveMessage(null), 3000);
    } catch (error) {
      setSaveMessage({ type: 'error', text: 'Failed to save settings ❌' });
      setTimeout(() => setSaveMessage(null), 3000);
    } finally {
      setIsSaving(false);
    }
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all settings to default?')) {
      resetSettings();
      setThemeMode('dark'); // ✅ This will work now
      setSaveMessage({ type: 'success', text: 'Settings reset to default! 🔄' });
      setTimeout(() => setSaveMessage(null), 3000);
    }
  };

  const handleModelChange = (modelId) => {
    updateSetting('selectedModel', modelId);
  };

  const tabs = [
    { id: 'general', label: 'General', icon: User },
    { id: 'appearance', label: 'Appearance', icon: Palette },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'privacy', label: 'Privacy', icon: Shield },
    { id: 'ai', label: 'AI Model', icon: Zap },
    { id: 'billing', label: 'Billing', icon: CreditCard },
  ];

  return (
    <div className={`min-h-screen p-4 sm:p-6 lg:p-8 ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' 
        : 'bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100'
    }`}>
      <div className="mx-auto max-w-5xl">
        
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className={`flex items-center gap-3 text-3xl font-bold sm:text-4xl lg:text-5xl ${
              theme === 'dark' ? 'text-white' : 'text-gray-800'
            }`}>
              ⚙ Settings
              <span className="text-sm font-normal text-gray-400">v2.0</span>
            </h1>
            <p className={`mt-2 text-sm sm:text-base ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Manage your application preferences and account settings
            </p>
          </div>
          <div className="flex w-full gap-2 sm:w-auto">
            <button
              onClick={handleReset}
              className={`flex-1 rounded-lg border px-4 py-2 text-sm transition sm:flex-none ${
                theme === 'dark'
                  ? 'border-slate-700 text-gray-300 hover:bg-slate-800 hover:text-white'
                  : 'border-gray-300 text-gray-600 hover:bg-gray-200 hover:text-gray-800'
              }`}
            >
              <RefreshCw className="mr-2 inline h-4 w-4" />
              Reset
            </button>
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="flex-1 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-2 text-sm font-semibold text-white transition hover:shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 sm:flex-none"
            >
              {isSaving ? (
                <>
                  <RefreshCw className="mr-2 inline h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="mr-2 inline h-4 w-4" />
                  Save Changes
                </>
              )}
            </button>
          </div>
        </div>

        {/* Save Message */}
        {saveMessage && (
          <div className={`mt-4 rounded-lg p-4 ${
            saveMessage.type === 'success' 
              ? 'bg-green-500/10 border border-green-500/20 text-green-400'
              : 'bg-red-500/10 border border-red-500/20 text-red-400'
          }`}>
            <div className="flex items-center gap-2">
              {saveMessage.type === 'success' ? (
                <CheckCircle className="h-5 w-5" />
              ) : (
                <AlertCircle className="h-5 w-5" />
              )}
              {saveMessage.text}
            </div>
          </div>
        )}

        {/* Tabs */}
        <div className="mt-6 overflow-x-auto pb-2">
          <div className="flex gap-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 whitespace-nowrap rounded-lg px-4 py-2.5 text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                      : theme === 'dark'
                        ? 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                        : 'bg-gray-200/50 text-gray-600 hover:bg-gray-200 hover:text-gray-800'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Settings Content */}
        <div className="mt-6 space-y-4">
          
          {/* General Tab */}
          {activeTab === 'general' && (
            <>
              <SettingCard 
                icon={Globe} 
                title="Language" 
                description="Select your preferred language"
                gradient
              >
                <select
                  value={settings.language}
                  onChange={(e) => updateSetting('language', e.target.value)}
                  className={`w-full rounded-lg border px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 ${
                    theme === 'dark'
                      ? 'border-slate-700 bg-slate-800/50 text-white'
                      : 'border-gray-300 bg-white text-gray-800'
                  }`}
                >
                  <option value="english">🇺🇸 English</option>
                  <option value="hindi">🇮🇳 Hindi</option>
                  <option value="spanish">🇪🇸 Spanish</option>
                  <option value="french">🇫🇷 French</option>
                  <option value="german">🇩🇪 German</option>
                </select>
              </SettingCard>

              <SettingCard 
                icon={Clock} 
                title="Timezone" 
                description="Set your timezone"
              >
                <select
                  className={`w-full rounded-lg border px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 ${
                    theme === 'dark'
                      ? 'border-slate-700 bg-slate-800/50 text-white'
                      : 'border-gray-300 bg-white text-gray-800'
                  }`}
                >
                  <option>Asia/Kolkata (UTC +5:30)</option>
                  <option>America/New_York (UTC -5:00)</option>
                  <option>Europe/London (UTC +0:00)</option>
                  <option>Australia/Sydney (UTC +11:00)</option>
                </select>
              </SettingCard>

              <SettingItem
                icon={Save}
                label="Auto-Save"
                description="Automatically save your work"
                enabled={settings.autoSave}
                onChange={() => toggleSetting('autoSave')}
              />
            </>
          )}

          {/* Appearance Tab */}
          {activeTab === 'appearance' && (
            <>
              <ThemeToggle
                theme={theme}
                onChange={setThemeMode} // ✅ Now this works
              />

              <SettingItem
                icon={Zap}
                label="Compact Mode"
                description="Reduce spacing for more content"
                enabled={settings.compactMode}
                onChange={() => toggleSetting('compactMode')}
              />

              <SettingItem
                icon={Sparkles}
                label="Animations"
                description="Enable smooth animations throughout the app"
                enabled={settings.animations}
                onChange={() => toggleSetting('animations')}
              />
            </>
          )}

          {/* Notifications Tab */}
          {activeTab === 'notifications' && (
            <>
              <SettingItem
                icon={Mail}
                label="Email Notifications"
                description="Receive notifications via email"
                enabled={settings.emailNotifications}
                onChange={() => toggleSetting('emailNotifications')}
              />

              <SettingItem
                icon={Smartphone}
                label="Push Notifications"
                description="Get notifications on your device"
                enabled={settings.pushNotifications}
                onChange={() => toggleSetting('pushNotifications')}
              />

              <SettingItem
                icon={MessageSquare}
                label="Message Notifications"
                description="Get notified about new messages"
                enabled={settings.messageNotifications}
                onChange={() => toggleSetting('messageNotifications')}
              />
            </>
          )}

          {/* Privacy Tab */}
          {activeTab === 'privacy' && (
            <>
              <SettingItem
                icon={Lock}
                label="Two-Factor Authentication"
                description="Add an extra layer of security"
                enabled={settings.twoFactorAuth}
                onChange={() => toggleSetting('twoFactorAuth')}
              />

              <SettingCard 
                icon={Download} 
                title="Export Data" 
                description="Download all your data"
              >
                <button className={`w-full rounded-lg border px-4 py-2.5 text-sm transition sm:w-auto ${
                  theme === 'dark'
                    ? 'border-slate-700 bg-slate-800/50 text-white hover:bg-slate-700'
                    : 'border-gray-300 bg-white text-gray-800 hover:bg-gray-100'
                }`}>
                  <Download className="mr-2 inline h-4 w-4" />
                  Export All Data
                </button>
              </SettingCard>

              {/* Danger Zone */}
              <div className={`rounded-2xl border border-red-500/20 p-5 backdrop-blur-sm sm:p-6 ${
                theme === 'dark' ? 'bg-red-500/5' : 'bg-red-50'
              }`}>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-red-500/20 p-2.5">
                      <Trash2 className="h-5 w-5 text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-red-400">Delete Account</h3>
                      <p className="text-sm text-gray-400">Permanently delete your account and all data</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => {
                      if (window.confirm('Are you sure you want to delete your account? This action cannot be undone!')) {
                        alert('Account deletion request submitted');
                      }
                    }}
                    className="w-full rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/25 sm:w-auto"
                  >
                    Delete Account
                  </button>
                </div>
              </div>
            </>
          )}

          {/* AI Model Tab */}
          {activeTab === 'ai' && (
            <ModelSelector
              value={settings.selectedModel || 'gpt-4'}
              onChange={handleModelChange}
              className="w-full"
            />
          )}

          {/* Billing Tab */}
          {activeTab === 'billing' && (
            <>
              <div className={`rounded-2xl border p-6 backdrop-blur-sm ${
                theme === 'dark'
                  ? 'border-slate-700/50 bg-gradient-to-r from-blue-500/10 to-purple-500/10'
                  : 'border-gray-300 bg-gradient-to-r from-blue-50 to-purple-50'
              }`}>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className={`text-lg font-semibold ${
                      theme === 'dark' ? 'text-white' : 'text-gray-800'
                    }`}>Current Plan</h3>
                    <p className={`text-sm ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>You are on the Pro plan</p>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-blue-500/20 px-4 py-2">
                    <Crown className="h-4 w-4 text-yellow-400" />
                    <span className="font-semibold text-blue-400">Pro</span>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className={`rounded-lg p-4 text-center ${
                    theme === 'dark' ? 'bg-slate-800/50' : 'bg-white/50'
                  }`}>
                    <p className="text-sm text-gray-400">Messages</p>
                    <p className="text-2xl font-bold text-white">10,000</p>
                    <p className="text-xs text-gray-500">/ month</p>
                  </div>
                  <div className={`rounded-lg p-4 text-center ${
                    theme === 'dark' ? 'bg-slate-800/50' : 'bg-white/50'
                  }`}>
                    <p className="text-sm text-gray-400">AI Models</p>
                    <p className="text-2xl font-bold text-white">6</p>
                    <p className="text-xs text-gray-500">available</p>
                  </div>
                </div>
              </div>

              <button className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 py-3.5 font-semibold text-white transition hover:shadow-lg hover:shadow-blue-500/25">
                <CreditCard className="mr-2 inline h-5 w-5" />
                Upgrade to Enterprise
              </button>
            </>
          )}

        </div>

        {/* Footer */}
        <div className={`mt-8 border-t pt-6 ${
          theme === 'dark' ? 'border-slate-800' : 'border-gray-300'
        }`}>
          <div className={`flex flex-col items-center justify-between gap-4 text-sm sm:flex-row ${
            theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
          }`}>
            <p className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-green-500"></span>
              NeuroDesk AI v2.0.1
            </p>
            <div className="flex gap-6">
              <button className={`transition ${
                theme === 'dark' ? 'hover:text-white' : 'hover:text-gray-800'
              }`}>Privacy Policy</button>
              <button className={`transition ${
                theme === 'dark' ? 'hover:text-white' : 'hover:text-gray-800'
              }`}>Terms of Service</button>
              <button className={`transition ${
                theme === 'dark' ? 'hover:text-white' : 'hover:text-gray-800'
              }`}>Help Center</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}