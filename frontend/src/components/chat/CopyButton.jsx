import { useState } from "react";

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`
        rounded-lg px-2.5 py-1.5 text-xs font-medium 
        transition-all duration-200 
        hover:bg-[#303030] hover:text-white 
        active:scale-95
        sm:px-3 sm:py-1 sm:text-xs 
        md:px-3.5 md:py-1.5 md:text-sm
        ${
          copied 
            ? "bg-green-600/20 text-green-400 hover:bg-green-600/30" 
            : "text-gray-400 hover:text-white"
        }
      `}
    >
      <span className="flex items-center justify-center gap-1.5 whitespace-nowrap">
        {copied ? (
          <>
            <svg 
              className="h-3.5 w-3.5 text-green-400 sm:h-4 sm:w-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2.5" 
                d="M5 13l4 4L19 7" 
              />
            </svg>
            <span>Copied!</span>
          </>
        ) : (
          <>
            <svg 
              className="h-3.5 w-3.5 sm:h-4 sm:w-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" 
              />
            </svg>
            <span>Copy</span>
          </>
        )}
      </span>
    </button>
  );
}

export default CopyButton;