import { useState } from "react";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { FaVolumeUp, FaStop } from "react-icons/fa";

import CodeBlock from "./CodeBlock";
import CopyButton from "./CopyButton";

function Message({ message }) {
  const isUser = message.role === "user";

  // ==========================
  // STATES
  // ==========================
  const [speaking, setSpeaking] = useState(false);
  const [voiceLang, setVoiceLang] = useState("auto");

  // ==========================
  // DOWNLOAD IMAGE
  // ==========================
  const downloadImage = (image, index = 1) => {
    const link = document.createElement("a");
    link.href = image;
    link.download = `image-${index}.png`;
    link.click();
  };

  // ==========================
  // TEXT TO SPEECH
  // ==========================
  const speakMessage = () => {
    if (!message.text) return;

    window.speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(
      message.text
    );

    speech.rate = 1;
    speech.pitch = 1;
    speech.volume = 1;

    // ==========================
    // Voice Language
    // ==========================
    let lang = "en-US";

    switch (voiceLang) {
      case "english":
        lang = "en-US";
        break;
      case "hindi":
        lang = "hi-IN";
        break;
      case "hinglish":
        lang = "hi-IN";
        break;
      default:
        if (/[\u0900-\u097F]/.test(message.text)) {
          lang = "hi-IN";
        } else {
          lang = "en-US";
        }
    }

    speech.lang = lang;

    // ==========================
    // Voice Selection
    // ==========================
    const voices = window.speechSynthesis.getVoices();
    const selectedVoice = voices.find(
      (voice) => voice.lang === lang
    );

    if (selectedVoice) {
      speech.voice = selectedVoice;
    }

    speech.onstart = () => {
      setSpeaking(true);
    };

    speech.onend = () => {
      setSpeaking(false);
    };

    window.speechSynthesis.speak(speech);
  };

  // ==========================
  // STOP SPEAKING
  // ==========================
  const stopSpeaking = () => {
    window.speechSynthesis.cancel();
    setSpeaking(false);
  };

  return (
    <div
      className={`mb-8 flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {/* ==========================
          USER MESSAGE
      ========================== */}
      {isUser ? (
        <div className="max-w-[85%] whitespace-pre-wrap rounded-3xl bg-[#303030] px-4 py-3 text-[15px] leading-6 text-white sm:max-w-[75%] sm:px-5 sm:py-4 sm:text-[16px] sm:leading-7">
          {message.text}
        </div>
      ) : (
        <div className="w-full max-w-full sm:max-w-[95%] md:max-w-[90%] lg:max-w-4xl">
          {/* ==========================
              AI IMAGES
          ========================== */}
          {message.images && (
            <div className="mb-4 grid grid-cols-1 gap-3 sm:mb-6 sm:grid-cols-2 sm:gap-4">
              {message.images.map((img, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-2xl border border-[#3a3a3a] bg-[#262626]"
                >
                  <img
                    src={img}
                    alt={`AI ${index}`}
                    className="w-full rounded-t-2xl object-cover transition duration-300 hover:scale-105"
                  />
                  <button
                    onClick={() =>
                      downloadImage(img, index + 1)
                    }
                    className="w-full bg-blue-600 py-2 text-sm text-white transition hover:bg-blue-700 sm:py-2.5 sm:text-base"
                  >
                    📥 Download
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* ==========================
              AI TEXT
          ========================== */}
          {message.text && (
            <div className="prose prose-invert max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  code({
                    className,
                    children,
                    ...props
                  }) {
                    const match =
                      /language-(\w+)/.exec(
                        className || ""
                      );
                    if (match) {
                      return (
                        <CodeBlock
                          language={match[1]}
                          value={String(
                            children
                          ).replace(
                            /\n$/,
                            ""
                          )}
                        />
                      );
                    }
                    return (
                      <code
                        className="rounded bg-[#303030] px-1 py-0.5 text-sm"
                        {...props}
                      >
                        {children}
                      </code>
                    );
                  },
                }}
              >
                {typeof message.text === "string"
                  ? message.text
                  : ""}
              </ReactMarkdown>
            </div>
          )}

          {/* ==========================
              ACTION BUTTONS
          ========================== */}
          {message.text && (
            <div className="mt-4 flex flex-wrap items-center justify-end gap-2 sm:mt-5 sm:gap-3">
              {/* Copy */}
              <CopyButton
                text={
                  typeof message.text === "string"
                    ? message.text
                    : ""
                }
              />

              {/* Speak / Stop */}
              {speaking ? (
                <button
                  onClick={stopSpeaking}
                  className="flex items-center gap-1.5 rounded-lg bg-red-600 px-3 py-1.5 text-xs text-white transition hover:bg-red-700 sm:gap-2 sm:px-4 sm:py-2 sm:text-sm"
                >
                  <FaStop className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="hidden xs:inline">Stop</span>
                </button>
              ) : (
                <button
                  onClick={speakMessage}
                  className="flex items-center gap-1.5 rounded-lg bg-green-600 px-3 py-1.5 text-xs text-white transition hover:bg-green-700 sm:gap-2 sm:px-4 sm:py-2 sm:text-sm"
                >
                  <FaVolumeUp className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="hidden xs:inline">Speak</span>
                </button>
              )}

              <select
                value={voiceLang}
                onChange={(e) => setVoiceLang(e.target.value)}
                className="rounded-lg bg-[#303030] px-2 py-1.5 text-xs text-white sm:px-3 sm:py-2 sm:text-sm"
              >
                <option value="auto">🌐 Auto</option>
                <option value="english">🇺🇸 English</option>
                <option value="hindi">🇮🇳 Hindi</option>
                <option value="hinglish">🇮🇳 Hinglish</option>
              </select>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Message;