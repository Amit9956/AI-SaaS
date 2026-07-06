import { useState, useEffect } from 'react';
import { Brain, Sparkles, Zap, Cpu, CheckCircle, Layers, Award } from 'lucide-react';

const models = [
  { 
    id: 'gpt-4', 
    name: 'GPT-4', 
    icon: Brain, 
    description: 'Most capable model for complex tasks',
    price: 'Pro',
    color: 'purple',
    features: ['Advanced reasoning', 'Creative writing', 'Complex problem solving'],
    speed: 'Medium',
    context: '8K tokens',
    badge: 'Recommended',
    popular: true
  },
  { 
    id: 'gpt-3.5', 
    name: 'GPT-3.5', 
    icon: Sparkles, 
    description: 'Fast and efficient for everyday tasks',
    price: 'Free',
    color: 'blue',
    features: ['Quick responses', 'Cost-effective', 'Basic reasoning'],
    speed: 'Fast',
    context: '4K tokens',
    badge: 'Fastest',
    popular: false
  },
  { 
    id: 'claude-2', 
    name: 'Claude 2', 
    icon: Cpu, 
    description: "Anthropic's advanced AI model",
    price: 'Pro',
    color: 'green',
    features: ['Natural conversations', 'Long context', 'Strong ethics'],
    speed: 'Medium',
    context: '100K tokens',
    badge: 'Best for long text',
    popular: true
  },
  { 
    id: 'gemini', 
    name: 'Gemini Pro', 
    icon: Zap, 
    description: "Google's latest multimodal model",
    price: 'Pro',
    color: 'yellow',
    features: ['Multimodal', 'Google integration', 'Real-time data'],
    speed: 'Medium',
    context: '32K tokens',
    badge: 'Google AI',
    popular: false
  },
  { 
    id: 'llama-2', 
    name: 'Llama 2', 
    icon: Layers, 
    description: 'Open-source model from Meta',
    price: 'Free',
    color: 'orange',
    features: ['Open source', 'Customizable', 'Community support'],
    speed: 'Medium',
    context: '4K tokens',
    badge: 'Open Source',
    popular: false
  },
  { 
    id: 'mistral', 
    name: 'Mistral', 
    icon: Award, 
    description: 'High-performance open-source model',
    price: 'Free',
    color: 'teal',
    features: ['High performance', 'Lightweight', 'Fast inference'],
    speed: 'Fast',
    context: '8K tokens',
    badge: 'Efficient',
    popular: false
  }
];

function ModelSelector({ value, onChange, className = '' }) {
  const [selected, setSelected] = useState(value || 'gpt-4');
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (value) {
      setSelected(value);
    }
  }, [value]);

  const handleSelect = (modelId) => {
    setSelected(modelId);
    onChange(modelId);
    setIsExpanded(false);
  };

  const getColorClasses = (color) => {
    const colors = {
      purple: 'border-purple-500 bg-purple-500/10 text-purple-400 hover:bg-purple-500/20',
      blue: 'border-blue-500 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20',
      green: 'border-green-500 bg-green-500/10 text-green-400 hover:bg-green-500/20',
      yellow: 'border-yellow-500 bg-yellow-500/10 text-yellow-400 hover:bg-yellow-500/20',
      orange: 'border-orange-500 bg-orange-500/10 text-orange-400 hover:bg-orange-500/20',
      teal: 'border-teal-500 bg-teal-500/10 text-teal-400 hover:bg-teal-500/20',
    };
    return colors[color] || colors.blue;
  };

  const getBadgeColor = (badge) => {
    const badges = {
      'Recommended': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      'Fastest': 'bg-green-500/20 text-green-400 border-green-500/30',
      'Best for long text': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      'Google AI': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      'Open Source': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
      'Efficient': 'bg-teal-500/20 text-teal-400 border-teal-500/30',
    };
    return badges[badge] || 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  };

  const filteredModels = models.filter(model => {
    const matchesSearch = model.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          model.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || 
                          (filter === 'free' && model.price === 'Free') ||
                          (filter === 'pro' && model.price === 'Pro');
    return matchesSearch && matchesFilter;
  });

  const selectedModel = models.find(m => m.id === selected);

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Selected Model Display */}
      {selectedModel && (
        <div className="rounded-2xl border border-slate-700/50 bg-gradient-to-r from-blue-500/5 to-purple-500/5 p-4 backdrop-blur-sm sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <div className={`rounded-xl p-3 ${getColorClasses(selectedModel.color)}`}>
                <selectedModel.icon className="h-6 w-6" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-semibold text-white">{selectedModel.name}</h3>
                  <span className={`rounded-full px-2 py-0.5 text-xs ${getBadgeColor(selectedModel.badge)}`}>
                    {selectedModel.badge}
                  </span>
                  <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                    selectedModel.price === 'Free' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                  }`}>
                    {selectedModel.price}
                  </span>
                </div>
                <p className="text-sm text-gray-400">{selectedModel.description}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {selectedModel.features.map((feature, i) => (
                    <span key={i} className="rounded-full bg-white/5 px-2 py-0.5 text-xs text-gray-400">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-right">
                <p className="text-xs text-gray-500">Speed: {selectedModel.speed}</p>
                <p className="text-xs text-gray-500">Context: {selectedModel.context}</p>
              </div>
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="rounded-lg bg-white/5 px-4 py-2 text-sm text-gray-400 transition hover:bg-white/10 hover:text-white"
              >
                {isExpanded ? 'Hide Models' : 'Change Model'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Model List */}
      {isExpanded && (
        <div className="rounded-2xl border border-slate-700/50 bg-white/5 p-4 backdrop-blur-sm sm:p-6">
          {/* Search and Filter */}
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search models..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-2 pl-10 text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
              <Brain className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`rounded-lg px-3 py-1.5 text-sm transition ${
                  filter === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter('free')}
                className={`rounded-lg px-3 py-1.5 text-sm transition ${
                  filter === 'free'
                    ? 'bg-green-600 text-white'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                Free
              </button>
              <button
                onClick={() => setFilter('pro')}
                className={`rounded-lg px-3 py-1.5 text-sm transition ${
                  filter === 'pro'
                    ? 'bg-yellow-600 text-white'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                Pro
              </button>
            </div>
          </div>

          {/* Model Grid */}
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {filteredModels.map((model) => {
              const Icon = model.icon;
              const isSelected = selected === model.id;
              const colorClass = getColorClasses(model.color);
              
              return (
                <button
                  key={model.id}
                  onClick={() => handleSelect(model.id)}
                  className={`group relative rounded-xl border-2 p-4 text-left transition-all ${
                    isSelected
                      ? `${colorClass} shadow-lg shadow-${model.color}-500/20`
                      : 'border-slate-700 hover:border-slate-500 hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`rounded-lg p-2 ${
                      isSelected ? 'bg-white/10' : 'bg-slate-800'
                    }`}>
                      <Icon className={`h-5 w-5 ${
                        isSelected ? `text-${model.color}-400` : 'text-gray-400 group-hover:text-white'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className={`font-semibold ${
                          isSelected ? 'text-white' : 'text-gray-300 group-hover:text-white'
                        }`}>
                          {model.name}
                        </span>
                        {isSelected && (
                          <CheckCircle className="h-4 w-4 text-blue-400" />
                        )}
                      </div>
                      <p className="mt-0.5 text-xs text-gray-400">{model.description}</p>
                      <div className="mt-2 flex flex-wrap items-center gap-2">
                        <span className={`rounded-full px-2 py-0.5 text-xs ${
                          model.price === 'Free' 
                            ? 'bg-green-500/20 text-green-400'
                            : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {model.price}
                        </span>
                        <span className="text-xs text-gray-500">⚡ {model.speed}</span>
                        <span className="text-xs text-gray-500">📝 {model.context}</span>
                      </div>
                      {model.badge && (
                        <span className={`mt-1 inline-block rounded-full px-2 py-0.5 text-xs ${getBadgeColor(model.badge)}`}>
                          {model.badge}
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {filteredModels.length === 0 && (
            <div className="py-8 text-center">
              <Brain className="mx-auto h-12 w-12 text-gray-600" />
              <p className="mt-2 text-gray-400">No models found matching your criteria</p>
            </div>
          )}
        </div>
      )}

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div className="rounded-lg border border-slate-700/50 bg-white/5 p-3 text-center backdrop-blur-sm">
          <p className="text-xs text-gray-500">Available Models</p>
          <p className="text-lg font-bold text-white">{models.length}</p>
        </div>
        <div className="rounded-lg border border-slate-700/50 bg-white/5 p-3 text-center backdrop-blur-sm">
          <p className="text-xs text-gray-500">Free Models</p>
          <p className="text-lg font-bold text-green-400">{models.filter(m => m.price === 'Free').length}</p>
        </div>
        <div className="rounded-lg border border-slate-700/50 bg-white/5 p-3 text-center backdrop-blur-sm">
          <p className="text-xs text-gray-500">Pro Models</p>
          <p className="text-lg font-bold text-yellow-400">{models.filter(m => m.price === 'Pro').length}</p>
        </div>
        <div className="rounded-lg border border-slate-700/50 bg-white/5 p-3 text-center backdrop-blur-sm">
          <p className="text-xs text-gray-500">Popular</p>
          <p className="text-lg font-bold text-purple-400">{models.filter(m => m.popular).length}</p>
        </div>
      </div>
    </div>
  );
}

export default ModelSelector;