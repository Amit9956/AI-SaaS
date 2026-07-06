import api from "./axios";

export const loadPDF = async (content) => {

    const response = await api.post(

        "/pdf/load",

        {

            content,

        }

    );

    return response.data;

};

export const askPDF = async (question) => {

    const response = await api.post(

        "/pdf/ask",

        {

            question,

        }

    );

    return response.data;

};