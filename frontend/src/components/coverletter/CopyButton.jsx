import { useState } from "react";

export default function CopyButton({

    text,

}) {

    const [copied, setCopied] = useState(false);

    const copy = async () => {

        if (!text) return;

        await navigator.clipboard.writeText(text);

        setCopied(true);

        setTimeout(() => {

            setCopied(false);

        }, 2000);

    };

    return (

        <button

            onClick={copy}

            className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"

        >

            {

                copied

                ?

                "✅ Copied"

                :

                "📋 Copy"

            }

        </button>

    );

}