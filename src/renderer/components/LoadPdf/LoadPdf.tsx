import React from 'react';
import styles from './LoadPdf.module.css';

interface LoadPdfProps {
  loadPdf: (file: File) => void;
}

const LoadPdf: React.FC<LoadPdfProps> = ({ loadPdf }) => {
  const handleLoadPdf = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      loadPdf(file);
    }
  };

  return (
    <div>
      <label htmlFor="load-pdf" className={styles.uploadLabel}>
        <input
          id="load-pdf"
          type="file"
          accept="application/pdf"
          className={styles.hiddenInput}
          onChange={handleLoadPdf}
        />
        <div className={styles.uploadBox}>
          <span className={styles.uploadIcon}>⬆️</span>
          <p>Drag & drop your PDF here</p>
          <p>or click to browse files</p>
          <p className={styles.supportText}>Only PDF files are supported</p>
        </div>
      </label>
    </div>
  );
};

export default LoadPdf;
