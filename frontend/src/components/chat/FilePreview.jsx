function FilePreview({
    file,
    removeFile,
}) {
    if (!file) return null;

    return (
        <div className="mx-auto mb-3 flex max-w-4xl items-center justify-between rounded-xl border border-[#3a3a3a] bg-[#2b2b2b] p-3 sm:p-4">
            <div className="flex-1 min-w-0">
                <p className="truncate text-sm font-semibold sm:text-base">
                    {file.name}
                </p>
                <p className="text-xs text-gray-400 sm:text-sm">
                    {(file.size / 1024).toFixed(1)} KB
                </p>
            </div>
            <button
                onClick={removeFile}
                className="ml-2 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-red-600 text-sm text-white transition hover:bg-red-700 active:scale-95 sm:h-9 sm:w-9 sm:text-base"
            >
                ✕
            </button>
        </div>
    );
}

export default FilePreview;