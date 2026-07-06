import { createContext, useContext, useState, useEffect } from 'react';

const SettingsContext = createContext();

export function SettingsProvider({ children }) {
  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem('settings');
    return saved ? JSON.parse(saved) : {
      language: 'english',
      emailNotifications: true,
      pushNotifications: true,
      messageNotifications: true,
      twoFactorAuth: false,
      compactMode: false,
      autoSave: true,
      fontSize: 'medium',
      animations: true,
      selectedModel: 'gpt-4',
    };
  });

  useEffect(() => {
    localStorage.setItem('settings', JSON.stringify(settings));
  }, [settings]);

  const updateSetting = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const toggleSetting = (key) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const resetSettings = () => {
    const defaults = {
      language: 'english',
      emailNotifications: true,
      pushNotifications: true,
      messageNotifications: true,
      twoFactorAuth: false,
      compactMode: false,
      autoSave: true,
      fontSize: 'medium',
      animations: true,
      selectedModel: 'gpt-4',
    };
    setSettings(defaults);
    localStorage.setItem('settings', JSON.stringify(defaults));
  };

  return (
    <SettingsContext.Provider value={{ 
      settings, 
      updateSetting, 
      toggleSetting, 
      resetSettings 
    }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
}