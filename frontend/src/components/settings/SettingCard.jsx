function SettingCard({ 
  icon: Icon, 
  title, 
  description, 
  children,
  className = "",
  gradient = false
}) {
  return (
    <div className={`rounded-2xl border border-slate-700/50 bg-white/5 p-5 backdrop-blur-sm transition-all hover:border-slate-600 sm:p-6 ${gradient ? 'bg-gradient-to-r from-blue-500/5 to-purple-500/5' : ''} ${className}`}>
      <div className="flex flex-col gap-4">
        <div className="flex items-start gap-3">
          <div className="rounded-lg bg-blue-500/10 p-2.5">
            <Icon className="h-5 w-5 text-blue-400" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-white">{title}</h3>
            <p className="text-sm text-gray-400">{description}</p>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default SettingCard;