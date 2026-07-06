function TypingIndicator() {
  return (
    <div className="mb-8 flex justify-start">
      <div className="rounded-3xl bg-[#2f2f2f] px-4 py-3 sm:px-5 sm:py-4">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-white sm:h-2 sm:w-2"></div>
          <div
            className="h-1.5 w-1.5 animate-bounce rounded-full bg-white sm:h-2 sm:w-2"
            style={{
              animationDelay: "0.2s",
            }}
          ></div>
          <div
            className="h-1.5 w-1.5 animate-bounce rounded-full bg-white sm:h-2 sm:w-2"
            style={{
              animationDelay: "0.4s",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default TypingIndicator;