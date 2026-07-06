import { useState, useEffect, useRef } from "react";

import {
    createConversation,
    saveMessage,
    askAI,
    askFile,
    getMessages,
} from "../api/chatApi";

import { generateImage } from "../api/imageApi";

export default function useChat() {

    // ==============================
    // STATES
    // ==============================

    const [message, setMessage] = useState("");

    const [messages, setMessages] = useState([]);

    const [loading, setLoading] = useState(false);

    const [conversationId, setConversationId] = useState(
        localStorage.getItem("conversation_id")
    );

    const bottomRef = useRef(null);

    // ==============================
    // AUTO SCROLL
    // ==============================

    useEffect(() => {

        bottomRef.current?.scrollIntoView({
            behavior: "smooth",
        });

    }, [messages]);

    // ==============================
    // LOAD CONVERSATION
    // ==============================

    const loadConversation = async () => {

        const id = localStorage.getItem("conversation_id");

        if (!id) {
            setMessages([]);
            return;
        }

        try {

            const data = await getMessages(id);

            setConversationId(id);

            setMessages(

                data.map((item) => ({

                    role: item.role,

                    text: item.content,

                }))

            );

        }

        catch (err) {

            console.log(err);

            setMessages([]);

        }

    };

    // ==============================
    // LOAD SELECTED CHAT
    // ==============================

    useEffect(() => {

        loadConversation();

        const listener = () => {

            setConversationId(
                localStorage.getItem("conversation_id")
            );

            loadConversation();

        };

        window.addEventListener(
            "load-chat",
            listener
        );

        return () => {

            window.removeEventListener(
                "load-chat",
                listener
            );

        };

    }, []);

    // ==============================
    // NEW CHAT
    // ==============================

    useEffect(() => {

        const listener = () => {

            localStorage.removeItem(
                "conversation_id"
            );

            setConversationId(null);

            setMessages([]);

            setMessage("");

        };

        window.addEventListener(
            "new-chat",
            listener
        );

        return () => {

            window.removeEventListener(
                "new-chat",
                listener
            );

        };

    }, []);

    // ==============================
    // SEND MESSAGE
    // ==============================

    const sendMessage = async (

        text = message,

        file = null

    ) => {

        if (loading) return;

        if (!file && !text.trim()) return;

        const userMessage = text.trim();

        // Show User Message

        setMessages((prev) => [

            ...prev,

            {

                role: "user",

                text:

                    userMessage ||

                    `[${file?.type || "File"}]`,

            },

        ]);

        setMessage("");

        setLoading(true);

        try {

            let currentId = conversationId;

            // Create Conversation

            if (!currentId) {

                const conversation = await createConversation(

                    (userMessage || file?.name || "New Chat")

                        .substring(0, 40)

                );

                currentId = conversation.id;

                setConversationId(currentId);

                localStorage.setItem(
                    "conversation_id",
                    currentId
                );

                window.dispatchEvent(
                    new Event("refresh-conversations")
                );

            }

            // Save User Message

            await saveMessage(

                currentId,

                "user",

                userMessage ||

                `[${file?.type || "File"}]`

            );

            // ===== CONTINUE IN PART 2 =====

                       // ==============================
            // AI RESPONSE
            // ==============================

            let ai;

            const lowerMessage = userMessage.toLowerCase();

            const isImagePrompt =
                lowerMessage.startsWith("generate image") ||
                lowerMessage.startsWith("generate an image") ||
                lowerMessage.startsWith("create image") ||
                lowerMessage.startsWith("create an image") ||
                lowerMessage.startsWith("draw") ||
                lowerMessage.startsWith("make image") ||
                lowerMessage.startsWith("design") ||
                lowerMessage.includes("image of") ||
                lowerMessage.includes("picture of");

            // ==============================
            // FILE AI
            // ==============================

            if (file) {

                console.log("FILE AI");

                ai = await askFile(
                    file.type,
                    file.filepath,
                    file.content,
                    userMessage
                );

            }

            // ==============================
            // IMAGE GENERATOR
            // ==============================

            else if (isImagePrompt) {

                console.log("IMAGE GENERATOR");

                ai = await generateImage(userMessage);

                console.log("IMAGE RESPONSE:", ai);

            }

            // ==============================
            // NORMAL CHAT
            // ==============================

            else {

                console.log("TEXT AI");

                ai = await askAI(userMessage);

            }

            // ==============================
            // SHOW AI RESPONSE
            // ==============================

           if (ai.images) {

    setMessages((prev) => [

        ...prev,

        {

            role: "assistant",

            images: ai.images,

            text: "",

        },

    ]);

    await saveMessage(

        currentId,

        "assistant",

        "[AI Images]"

    );

}

            else {

                const responseText =
                    typeof ai?.response === "string"
                        ? ai.response
                        : JSON.stringify(ai?.response ?? "No response");

                setMessages((prev) => [

                    ...prev,

                    {

                        role: "assistant",

                        text: responseText,

                    },

                ]);

                await saveMessage(
                    currentId,
                    "assistant",
                    responseText
                );

            }

        }

        catch (err) {

            console.log("========== ERROR ==========");
            console.log(err.response?.data);
            console.log(err);
            console.log("===========================");

            setMessages((prev) => [

                ...prev,

                {

                    role: "assistant",

                    text:
                        err.response?.data?.detail
                            ? JSON.stringify(err.response.data.detail)
                            : err.message,

                },

            ]);

        }

        finally {

            setLoading(false);

            window.dispatchEvent(
                new Event("clear-file")
            );

        }

    };

    // ===== CONTINUE IN PART 3 =====
         // ==============================
    // RETURN
    // ==============================

    return {

        message,

        setMessage,

        messages,

        loading,

        bottomRef,

        sendMessage,

        loadConversation,

        conversationId,

    };

}