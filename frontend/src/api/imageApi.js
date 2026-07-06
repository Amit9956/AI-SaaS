import api from "./axios";

// =========================
// Generate AI Images
// =========================

export const generateImage = async (
    prompt
) => {

    const response = await api.post(

        "/image/generate",

        {

            prompt,

            count: 4,

        }

    );

    return response.data;

};