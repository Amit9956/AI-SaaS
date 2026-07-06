import { useState, useEffect, useRef } from "react";

const models = [
  {
    id: "gemini-2.5-flash",
    name: "Gemini 2.5 Flash",
    icon: "⚡",
  },
  {
    id: "gemini-2.5-pro",
    name: "Gemini 2.5 Pro",
    icon: "💎",
  },
  {
    id: "gpt-4o",
    name: "OpenAI GPT-4o",
    icon: "🧠",
  },
  {
    id: "openrouter",
    name: "OpenRouter",
    icon: "🌐",
  },
];

function ModelSelector({ onChange }) {
  const menuRef = useRef(null);

  const [open, setOpen] = useState(false);

  const getDefaultModel = () => {
    const saved = localStorage.getItem("selected_model");

    return models.find((m) => m.id === saved)
      ? saved
      : models[0].id;
  };

  const [selectedModel, setSelectedModel] = useState(getDefaultModel);

  const current =
    models.find((m) => m.id === selectedModel) || models[0];

  useEffect(() => {
    const handleOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutside);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleOutside
      );
  }, []);

  const chooseModel = (model) => {
    setSelectedModel(model.id);

    localStorage.setItem("selected_model", model.id);

    onChange?.(model.id);

    setOpen(false);
  };

  return (
    <div ref={menuRef} className="relative w-full sm:w-auto">

      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="
          flex
          w-full
          items-center
          justify-between
          gap-2
          rounded-xl
          border
          border-[#3a3a3a]
          bg-[#2b2b2b]
          px-4
          py-2.5
          text-sm
          text-white
          transition
          hover:bg-[#343434]
          sm:min-w-[220px]
        "
      >
        <div className="flex min-w-0 items-center gap-2">

          <span className="text-lg">
            {current.icon}
          </span>

          <span className="truncate">
            {current.name}
          </span>

        </div>

        <span className={`transition ${open ? "rotate-180" : ""}`}>
          ▼
        </span>

      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="
            absolute
            left-0
            right-0
            z-50
            mt-2
            overflow-hidden
            rounded-xl
            border
            border-[#3a3a3a]
            bg-[#2b2b2b]
            shadow-2xl
            sm:left-auto
            sm:right-0
            sm:w-72
          "
        >
          {models.map((model) => (
            <button
              key={model.id}
              onClick={() => chooseModel(model)}
              className={`flex w-full items-center justify-between px-4 py-3 text-left transition hover:bg-[#383838] ${
                selectedModel === model.id
                  ? "bg-[#383838]"
                  : ""
              }`}
            >
              <div className="flex min-w-0 items-center gap-3">

                <span className="text-lg">
                  {model.icon}
                </span>

                <span className="truncate text-sm sm:text-base">
                  {model.name}
                </span>

              </div>

              {selectedModel === model.id && (
                <span className="ml-3 text-green-400">
                  ✓
                </span>
              )}

            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default ModelSelector;