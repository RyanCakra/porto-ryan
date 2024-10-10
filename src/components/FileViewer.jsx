import React from 'react';

function FileViewer({ fileLink, onClose }) {
  // Close the viewer when clicking on the overlay background
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50" onClick={handleOverlayClick}>
      <div className="relative bg-transparent w-11/12 h-5/6 md:w-3/4 md:h-3/4 lg:w-1/2 lg:h-3/5 rounded-lg shadow-lg overflow-hidden">
        <iframe src={fileLink} className="rounded-lg w-full h-full" allow="autoplay" title="File Viewer"></iframe>
        {/* <button onClick={onClose} className="absolute top-2 right-2 text-white bg-gray-800 bg-opacity-70 rounded-full p-1 focus:outline-none" aria-label="Close">
          ✕
        </button> */}
      </div>
    </div>
  );
}

export default FileViewer;
