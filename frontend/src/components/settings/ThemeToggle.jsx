import { Moon, Sun, Monitor, Check } from 'lucide-react';

function ThemeToggle({ theme = 'dark', onChange }) {
  // Default handler if onChange is not provided
  const handleThemeChange = (themeId) => {
    if (onChange && typeof onChange === 'function') {
      onChange(themeId);
    } else {
      console.warn('ThemeToggle: onChange prop is required and must be a function');
      // Fallback: Save to localStorage directly
      try {
        localStorage.setItem('theme', themeId);
        const root = document.documentElement;
        if (themeId === 'dark') {
          root.classList.add('dark');
          root.classList.remove('light');
        } else if (themeId === 'light') {
          root.classList.add('light');
          root.classList.remove('dark');
        } else {
          // system theme
          const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          if (prefersDark) {
            root.classList.add('dark');
            root.classList.remove('light');
          } else {
            root.classList.add('light');
            root.classList.remove('dark');
          }
        }
        // Force re-render
        window.dispatchEvent(new Event('themechange'));
      } catch (error) {
        console.error('Failed to save theme:', error);
      }
    }
  };

  const themes = [
    { id: 'light', icon: Sun, label: 'Light', color: 'yellow' },
    { id: 'dark', icon: Moon, label: 'Dark', color: 'blue' },
    { id: 'system', icon: Monitor, label: 'System', color: 'purple' },
  ];

  return (
    <div className="rounded-2xl border border-slate-700/50 bg-white/5 p-5 backdrop-blur-sm sm:p-6">
      <div className="flex flex-col gap-4">
        <div className="flex items-start gap-3">
          <div className="rounded-lg bg-purple-500/10 p-2.5">
            <Monitor className="h-5 w-5 text-purple-400" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-white">Theme</h3>
            <p className="text-sm text-gray-400">Choose your preferred theme</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {themes.map((t) => {
            const Icon = t.icon;
            const isActive = theme === t.id;
            
            return (
              <button
                key={t.id}
                onClick={() => handleThemeChange(t.id)}
                className={`group relative rounded-xl border-2 p-4 text-center transition-all ${
                  isActive
                    ? `border-${t.color}-500 bg-${t.color}-500/10 shadow-lg shadow-${t.color}-500/20`
                    : 'border-slate-700 hover:border-slate-500 hover:bg-white/5'
                }`}
              >
                <Icon className={`mx-auto h-6 w-6 transition-all ${
                  isActive ? `text-${t.color}-400` : 'text-gray-400 group-hover:text-white'
                }`} />
                <span className={`mt-2 block text-sm font-medium ${
                  isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'
                }`}>
                  {t.label}
                </span>
                {isActive && (
                  <div className="absolute -right-1 -top-1 rounded-full bg-blue-500 p-0.5">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ThemeToggle;