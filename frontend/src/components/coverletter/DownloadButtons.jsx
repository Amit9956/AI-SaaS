import { saveAs } from "file-saver";

export default function DownloadButtons({
  coverLetter,
}) {
  const downloadTXT = () => {
    const blob = new Blob(
      [coverLetter],
      {
        type: "text/plain;charset=utf-8",
      }
    );
    saveAs(
      blob,
      "CoverLetter.txt"
    );
  };

  const printLetter = () => {
    const win = window.open("", "_blank");
    win.document.write(
      `
      <html>
      <head>
        <title>Cover Letter</title>
        <style>
          body {
            font-family: Arial, Helvetica, sans-serif;
            padding: 40px;
            max-width: 800px;
            margin: 0 auto;
            line-height: 1.6;
          }
          pre {
            white-space: pre-wrap;
            font-size: 16px;
            font-family: Arial, Helvetica, sans-serif;
            margin: 0;
          }
          @media print {
            body { padding: 20px; }
            pre { font-size: 14px; }
          }
        </style>
      </head>
      <body>
        <pre style="white-space:pre-wrap;font-size:16px;font-family:Arial,Helvetica,sans-serif;">
${coverLetter}
        </pre>
      </body>
      </html>
      `
    );
    win.document.close();
    win.focus();
    win.print();
    win.close();
  };

  const sendEmail = () => {
    const subject = encodeURIComponent(
      "Application"
    );
    const body = encodeURIComponent(
      coverLetter
    );
    window.location.href =
      `mailto:?subject=${subject}&body=${body}`;
  };

  return (
    <div className="flex flex-wrap gap-2 sm:gap-3">
      <button
        onClick={downloadTXT}
        className="flex-1 rounded-lg bg-green-600 px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700 hover:shadow-lg active:scale-95 sm:flex-none sm:px-4 sm:py-2.5 sm:text-base md:px-5 md:py-2"
      >
        <span className="flex items-center justify-center gap-1.5 sm:gap-2">
          <span className="text-base sm:text-lg">📄</span>
          Download TXT
        </span>
      </button>

      <button
        onClick={printLetter}
        className="flex-1 rounded-lg bg-blue-600 px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 hover:shadow-lg active:scale-95 sm:flex-none sm:px-4 sm:py-2.5 sm:text-base md:px-5 md:py-2"
      >
        <span className="flex items-center justify-center gap-1.5 sm:gap-2">
          <span className="text-base sm:text-lg">🖨</span>
          Print
        </span>
      </button>

      <button
        onClick={sendEmail}
        className="flex-1 rounded-lg bg-purple-600 px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-purple-700 hover:shadow-lg active:scale-95 sm:flex-none sm:px-4 sm:py-2.5 sm:text-base md:px-5 md:py-2"
      >
        <span className="flex items-center justify-center gap-1.5 sm:gap-2">
          <span className="text-base sm:text-lg">📧</span>
          Email
        </span>
      </button>
    </div>
  );
}