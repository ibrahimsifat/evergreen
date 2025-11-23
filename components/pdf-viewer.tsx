"use client";

interface PDFViewerProps {
  src: string;
  title: string;
  downloadName?: string;
}

export default function PDFViewer({
  src,
  title,
  downloadName,
}: PDFViewerProps) {
  return (
    <div className="w-full h-full bg-white rounded-lg shadow-lg overflow-hidden">
      <iframe
        src={src}
        width="100%"
        height="100%"
        className="border-0 w-full h-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px]"
        title={title}
        style={{ minHeight: "400px" }}
      >
        <div className="flex flex-col items-center justify-center h-full text-center p-4 sm:p-8">
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-8 max-w-sm sm:max-w-md">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">
              PDF Viewer Not Supported
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              Your browser doesn't support PDF viewing. You can download the PDF
              file to view it.
            </p>
            <a
              href={src}
              download={downloadName || "document.pdf"}
              className="inline-flex items-center px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors text-sm sm:text-base"
            >
              Download PDF
            </a>
          </div>
        </div>
      </iframe>
    </div>
  );
}
