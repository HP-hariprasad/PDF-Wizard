import React from 'react';
import { FileUpload } from 'primereact/fileupload';
import './LoadPdf.css';

interface LoadPdfProps {
  loadPdf: (file: File) => void;
}

const LoadPdf: React.FC<LoadPdfProps> = ({ loadPdf }) => {
  const handleUpload = (event: any) => {
    const files = event.files;
    if (files && files.length > 0) {
      files.forEach((file: File) => loadPdf(file));
    }
  };

  return (
    <div className="p-card load-pdf-container">
      <h2 className="load-pdf-title">Upload PDF</h2>
      <FileUpload
        name="pdf"
        accept="application/pdf"
        customUpload
        uploadHandler={handleUpload}
        multiple
        chooseLabel="Choose"
        uploadLabel="Upload"
        cancelLabel="Cancel"
        emptyTemplate={<p className="p-m-0">Drag and drop files here to upload.</p>}
      />
    </div>
  );
};

export default LoadPdf;
