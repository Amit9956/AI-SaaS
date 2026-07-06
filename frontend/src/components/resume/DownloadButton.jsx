import { useState } from "react";

import {
    downloadPDF,
    downloadDOCX,
} from "../../api/resumeApi";

import useResume from "../../hooks/useResume";

export default function DownloadButton({
    previewRef,
}) {

    const { resume } = useResume();

    const [loading, setLoading] = useState(false);

    // ==========================
    // PRINT
    // ==========================

    const printResume = () => {

        window.print();

    };

    // ==========================
    // PDF
    // ==========================

    const handlePDF = async () => {

        try {

            setLoading(true);

            const blob = await downloadPDF(
                resume
            );

            const url =
                window.URL.createObjectURL(
                    blob
                );

            const a =
                document.createElement("a");

            a.href = url;

            a.download =
                `${
                    resume.personal.fullName ||
                    "Resume"
                }.pdf`;

            a.click();

            window.URL.revokeObjectURL(
                url
            );

        }

        catch (err) {

            console.log(err);

            alert(
                "Unable to download PDF."
            );

        }

        finally {

            setLoading(false);

        }

    };

    // ==========================
    // DOCX
    // ==========================

    const handleDOCX = async () => {

        try {

            setLoading(true);

            const blob = await downloadDOCX(
                resume
            );

            const url =
                window.URL.createObjectURL(
                    blob
                );

            const a =
                document.createElement("a");

            a.href = url;

            a.download =
                `${
                    resume.personal.fullName ||
                    "Resume"
                }.docx`;

            a.click();

            window.URL.revokeObjectURL(
                url
            );

        }

        catch (err) {

            console.log(err);

            alert(
                "Unable to download DOCX."
            );

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <div className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap">

            <button

                disabled={loading}

                onClick={handlePDF}

                className="w-full rounded-xl bg-red-600 px-5 py-3 text-white transition hover:bg-red-700 sm:w-auto"

            >

                {
                    loading
                        ? "Generating..."
                        : "📄 PDF"
                }

            </button>

            <button

                disabled={loading}

                onClick={handleDOCX}

                className="w-full rounded-xl bg-blue-700 px-5 py-3 text-white transition hover:bg-blue-800 sm:w-auto"

            >

                📝 DOCX

            </button>

            <button

                onClick={printResume}

                className="w-full rounded-xl bg-green-600 px-5 py-3 text-white transition hover:bg-green-700 sm:w-auto"

            >

                🖨 Print

            </button>

        </div>

    );

}