import Header from "../components/header/Header";
import Message from "../components/chat/Message";
import ChatInput from "../components/chat/ChatInput";
import TypingIndicator from "../components/chat/TypingIndicator";

import useChat from "../hooks/useChat";

function Chat() {
  const {
    message,
    setMessage,
    messages,
    loading,
    bottomRef,
    sendMessage,
  } = useChat();

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-[#212121] text-white">

      {/* Header */}
      <div className="sticky top-0 z-30">
        <Header />
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto">
        <div className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">

          {messages.length === 0 && (
            <div className="flex min-h-[65vh] flex-col items-center justify-center text-center">

              <h1
                className="
                  mb-4
                  text-3xl
                  font-semibold
                  leading-tight
                  sm:text-4xl
                  md:text-5xl
                "
              >
                How can I help you today?
              </h1>

              <p
                className="
                  max-w-xl
                  text-sm
                  text-gray-400
                  sm:text-base
                  md:text-lg
                "
              >
                Ask anything to NeuroDesk AI
              </p>
            </div>
          )}

          <div className="space-y-6">
            {messages.map((msg, index) => (
              <Message
                key={index}
                message={msg}
              />
            ))}

            {loading && <TypingIndicator />}

            <div ref={bottomRef}></div>
          </div>
        </div>
      </div>

      {/* Bottom Input */}
      <div className="sticky bottom-0 z-30 bg-[#212121]">
        <ChatInput
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
          loading={loading}
        />
      </div>
    </div>
  );
}

export default Chat;