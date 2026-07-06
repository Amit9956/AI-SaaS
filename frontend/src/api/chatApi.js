import api from "./axios";

// =========================
// Create Conversation
// =========================
export const createConversation = async (title) => {

    const response = await api.post(
        "/conversations",
        {
            title,
        }
    );

    return response.data;
};

// =========================
// Get All Conversations
// =========================
export const getConversations = async () => {

    const response = await api.get(
        "/conversations"
    );

    return response.data;
};

// =========================
// Delete Conversation
// =========================
export const deleteConversation = async (conversationId) => {

    const response = await api.delete(
        `/conversations/${conversationId}`
    );

    return response.data;
};

// =========================
// Save Message
// =========================
export const saveMessage = async (
    conversationId,
    role,
    content
) => {

    const response = await api.post(
        `/messages/${conversationId}`,
        {
            role,
            content,
        }
    );

    return response.data;
};

// =========================
// Get Messages
// =========================
export const getMessages = async (
    conversationId
) => {

    const response = await api.get(
        `/messages/${conversationId}`
    );

    return response.data;
};

// =========================
// AI Chat
// =========================
export const askAI = async (message) => {

    const response = await api.post(
        "/chat",
        {
            message,
        }
    );

    return response.data;
};

// =========================
// AI File Chat
// =========================
export const askFile = async (

    file_type,

    filepath,

    content,

    question

) => {

    const response = await api.post(

        "/chat/file",

        {

            file_type,

            filepath,

            content,

            question,

        }

    );

    return response.data;

};

// =========================
// Rename Conversation
// =========================
export const renameConversation = async (

    conversationId,

    title

) => {

    const response = await api.put(

        `/conversations/${conversationId}`,

        {

            title,

        }

    );

    return response.data;

};