import { useState } from "react";
import { generateImage } from "../api/imageApi";

function ImageGenerator() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");

  const generate = async () => {
    if (!prompt.trim()) return;

    try {
      setLoading(true);

      const data = await generateImage(prompt);

      setImage(data.image);
    } catch (err) {
      console.log(err);
      alert("Image generation failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#212121] px-4 py-6 text-white sm:px-6 lg:px-8">

      <div className="mx-auto w-full max-w-5xl">

        {/* Heading */}
        <h1 className="mb-8 text-center text-3xl font-bold sm:text-4xl lg:text-5xl">
          AI Image Generator
        </h1>

        {/* Input + Button */}
        <div className="flex flex-col gap-3 sm:flex-row">

          <input
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe your image..."
            className="w-full flex-1 rounded-xl bg-[#2d2d2d] px-5 py-4 text-sm outline-none transition focus:ring-2 focus:ring-blue-500 sm:text-base"
          />

          <button
            onClick={generate}
            disabled={loading}
            className="w-full rounded-xl bg-blue-600 px-6 py-4 font-semibold transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {loading ? "Generating..." : "Generate"}
          </button>

        </div>

        {/* Generated Image */}
        {image && (
          <div className="mt-10 flex justify-center">

            <img
              src={image}
              alt="AI Generated"
              className="
                w-full
                max-w-4xl
                rounded-2xl
                border
                border-slate-700
                object-contain
                shadow-2xl
                max-h-[70vh]
              "
            />

          </div>
        )}

      </div>
    </div>
  );
}

export default ImageGenerator;