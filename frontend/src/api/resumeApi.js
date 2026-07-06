import api from "./axios";

// ========================================
// AI Resume Generator
// ========================================

export const generateResume = async (data) => {

    const response = await api.post(

        "/resume-ai/generate",

        data

    );

    return response.data;

};

// ========================================
// Improve Resume
// ========================================

export const improveResume = async (resume) => {

    const response = await api.post(

        "/resume-improve/generate",

        {

            resume,

        }

    );

    return response.data;

};

// ========================================
// ATS Score
// ========================================

export const getATSScore = async (data) => {

    const response = await api.post(

        "/ats/score",

        data

    );

    return response.data;

};

// ========================================
// Generate Cover Letter
// ========================================

export const generateCoverLetter = async (data) => {

    const response = await api.post(

        "/cover-letter/generate",

        data

    );

    return response.data;

};

// ========================================
// Download Resume PDF
// ========================================

export const downloadPDF = async (resume) => {

    const response = await api.post(

        "/resume/pdf",

        resume,

        {

            responseType: "blob",

        }

    );

    return response.data;

};

// ========================================
// Download Resume DOCX
// ========================================

export const downloadDOCX = async (resume) => {

    const response = await api.post(

        "/resume/docx",

        resume,

        {

            responseType: "blob",

        }

    );

    return response.data;

};

// ========================================
// Upload Resume
// ========================================

export const uploadResume = async (file) => {

    const formData = new FormData();

    formData.append(

        "file",

        file

    );

    const response = await api.post(

        "/resume/upload",

        formData,

        {

            headers: {

                "Content-Type":

                    "multipart/form-data",

            },

        }

    );

    return response.data;

};

// ========================================
// Extract Resume
// ========================================

export const extractResume = async (file) => {

    const formData = new FormData();

    formData.append("file", file);

    const response = await api.post(
        "/resume/extract",
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    );

    return response.data;
};

// ========================================
// Job Match Analyzer
// ========================================

export const analyzeJobMatch = async (resume, jobDescription) => {

    const response = await api.post(

        "/job-match/analyze",

        {
            resume,
            job_description: jobDescription,
        }

    );

    return response.data;

};

// ========================================
// LinkedIn Resume Import
// ========================================

export const importLinkedIn = async (profile_url) => {

    const response = await api.post(

        "/linkedin/import",

        {
            profile_url,
        }

    );

    return response.data;

};

// ========================================
// Interview Questions
// ========================================

export const generateInterview = async (data) => {

    const response = await api.post(

        "/interview/generate",

        data

    );

    return response.data;

};

// ========================================
// AI Career Chat
// ========================================

export const careerChat = async (data) => {

    const response = await api.post(

        "/chat/career",

        data

    );

    return response.data;

};

