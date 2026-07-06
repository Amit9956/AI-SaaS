import { useState, useRef } from "react";
import FilePreview from "./FilePreview";
import { uploadFile } from "../../api/uploadApi";
import { FaMicrophone, FaStop } from "react-icons/fa";

function ChatInput({
  message,
  setMessage,
  sendMessage,
  loading,
}) {
  // ==========================
  // STATES
  // ==========================
  const [listening, setListening] = useState(false);
  const [file, setFile] = useState(null);
  const textareaRef = useRef(null);
  const recognitionRef = useRef(null);

  // ==========================
  // FILE UPLOAD
  // ==========================
  const chooseFile = async (e) => {
    const selected = e.target.files[0];
    if (!selected) return;
    try {
      const upload = await uploadFile(selected);
      setFile({
        name: selected.name,
        size: selected.size,
        type: upload.file_type,
        filepath: upload.filepath,
        content: upload.content,
        raw: selected,
      });
      console.log(upload);
    } catch (err) {
      console.log(err);
      alert("Upload failed.");
    }
  };

  // ==========================
  // REMOVE FILE
  // ==========================
  const removeFile = () => {
    setFile(null);
  };

  // ==========================
  // AUTO RESIZE TEXTAREA
  // ==========================
  const handleInput = (e) => {
    setMessage(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = Math.min(e.target.scrollHeight, 160) + "px";
  };

  // ==========================
  // VOICE INPUT
  // ==========================
  const startVoice = () => {
    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert(
        "Speech Recognition is not supported in this browser."
      );
      return;
    }

    const recognition = new SpeechRecognition();
    recognitionRef.current = recognition;
    recognition.lang = "en-US";
    recognition.interimResults = true;
    recognition.continuous = false;

    recognition.onstart = () => {
      setListening(true);
    };

    recognition.onresult = (event) => {
      let transcript = "";
      for (let i = 0; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
      }
      setMessage(transcript);
    };

    recognition.onerror = () => {
      setListening(false);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognition.start();
  };

  // ==========================
  // UI
  // ==========================
  return (
    <>
      {/* File Preview */}
      <FilePreview file={file} removeFile={removeFile} />

      <div className="border-t border-[#2f2f2f] bg-[#212121] px-3 py-4 sm:px-4 md:px-6 md:py-5">
        
        <div className="mx-auto flex max-w-4xl items-end gap-1.5 rounded-[30px] border border-[#3a3a3a] bg-[#2b2b2b] px-2 py-1.5 sm:gap-2 sm:px-3 sm:py-2 md:gap-3 md:px-4 md:py-3">
          
          {/* Upload Button */}
          <label
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-lg text-gray-400 transition hover:bg-[#3a3a3a] hover:text-white sm:h-10 sm:w-10 sm:text-xl"
          >
            📎
            <input
              type="file"
              hidden
              accept=".pdf,.png,.jpg,.jpeg,.webp,.docx,.txt"
              onChange={chooseFile}
            />
          </label>

          {/* Textarea */}
          <textarea
            ref={textareaRef}
            rows={1}
            value={message}
            placeholder="Message NeuroDesk AI..."
            onChange={handleInput}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                sendMessage(message, file);
                setFile(null);
                setMessage("");
                if (textareaRef.current) {
                  textareaRef.current.style.height = "auto";
                }
              }
            }}
            className="max-h-40 flex-1 resize-none overflow-y-auto bg-transparent py-1.5 text-sm text-white outline-none placeholder:text-gray-500 sm:py-2 sm:text-[15px] md:text-[16px]"
          />

          {/* Voice Button */}
          <button
            onClick={startVoice}
            className={`flex h-9 w-9 items-center justify-center rounded-full text-lg transition sm:h-10 sm:w-10 sm:text-xl ${
              listening
                ? "bg-red-600 text-white hover:bg-red-700"
                : "text-gray-400 hover:bg-[#3a3a3a] hover:text-white"
            }`}
          >
            {listening ? "🔴" : "🎤"}
          </button>

          {/* Send Button */}
          <button
            onClick={() => {
              sendMessage(message, file);
              setFile(null);
              setMessage("");
              if (textareaRef.current) {
                textareaRef.current.style.height = "auto";
              }
            }}
            disabled={
              loading ||
              (!message.trim() && !file)
            }
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg font-bold text-black transition hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-40 sm:h-10 sm:w-10 sm:text-xl md:h-11 md:w-11"
          >
            {loading ? (
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-black border-t-transparent sm:h-5 sm:w-5"></div>
            ) : (
              "↑"
            )}
          </button>
        </div>

        <p className="mt-2 text-center text-[10px] text-gray-500 sm:mt-2.5 sm:text-xs md:mt-3">
          NeuroDesk AI can make mistakes. Verify important information.
        </p>
      </div>
    </>
  );
}

export default ChatInput;