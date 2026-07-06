import { useState } from 'react';

function SettingItem({ 
  icon: Icon, 
  label, 
  description, 
  enabled, 
  onChange,
  disabled = false,
  loading = false
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="flex flex-col gap-4 rounded-2xl border border-slate-700/50 bg-white/5 p-5 backdrop-blur-sm transition-all hover:border-slate-600 sm:flex-row sm:items-center sm:justify-between sm:p-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start gap-3">
        <div className="rounded-lg bg-blue-500/10 p-2.5">
          <Icon className="h-5 w-5 text-blue-400" />
        </div>
        <div>
          <h3 className="text-base font-semibold text-white">{label}</h3>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
      </div>
      
      <button
        onClick={onChange}
        disabled={disabled || loading}
        className={`relative h-7 w-14 rounded-full transition-all duration-300 ${
          enabled 
            ? 'bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg shadow-blue-500/25' 
            : 'bg-slate-700'
        } ${disabled || loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
      >
        <div
          className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow-md transition-all duration-300 ${
            enabled ? 'translate-x-8' : 'translate-x-1'
          } ${isHovered && !disabled ? 'scale-110' : ''}`}
        />
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
          </div>
        )}
      </button>
    </div>
  );
}

export default SettingItem;