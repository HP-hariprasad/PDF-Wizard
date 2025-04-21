import React from 'react';
import { connect } from 'react-redux';
import { setMergeFiles } from '../../store/features/mergeFiles/mergeFilesReducer';
import styles from './MergePdfs.module.css';
import { Button } from '@fluentui/react-components';

// Interface for props
interface MergePdfsProps {
  mergeFiles: File[];
  setMergeFiles: (files: File[]) => void;
}

const MergePdfs: React.FC<MergePdfsProps> = ({ mergeFiles, setMergeFiles }) => {
  const handleMergePdfs = async () => {
    const { PDFDocument } = await import('pdf-lib');
    const mergedPdf = await PDFDocument.create();
    for (const file of mergeFiles) {
      const arrayBuffer = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(arrayBuffer);
      const copiedPages = await mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
      copiedPages.forEach((page) => mergedPdf.addPage(page));
    }
    const pdfBytes = await mergedPdf.save();
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'merged.pdf';
    a.click();
  };
 
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files ? Array.from(event.target.files) : [];
    setMergeFiles(files);
  };

  return (
    <div className="card">
      <label htmlFor="merge-pdfs">
        <input
          id="merge-pdfs"
          type="file"
          accept="application/pdf"
          className={styles.hiddenInput}
          onChange={handleFileChange}
        />
        <Button appearance="primary" onClick={handleMergePdfs}>📑 Select PDFs to Merge</Button>
      </label>
      <Button appearance="primary" onClick={handleMergePdfs}>
        ➕ Merge PDFs
      </Button>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  mergeFiles: state.mergeFiles.mergeFiles, // Ensure this matches the state structure
});

const mapDispatchToProps = (dispatch: any) => ({
  setMergeFiles: (files: File[]) => dispatch(setMergeFiles(files)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MergePdfs);
