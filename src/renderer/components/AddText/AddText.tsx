import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@mui/material';
import { PDFDocument } from 'pdf-lib';
import styles from './AddText.module.css';

// Interface for props
interface AddTextProps {
  pdfFile: PDFDocument | null;
}

const AddText: React.FC<AddTextProps> = ({ pdfFile }) => {
  const handleAddText = async () => {
    if (!pdfFile) return;
    const page = pdfFile.getPage(0);
    page.drawText('Hello, PDF!', { x: 50, y: 700 });
    console.log('Text added');
  };

  return (
    <Button variant="contained" className={styles.button} onClick={handleAddText}>
      ✏️ Add Text
    </Button>
  );
};

const mapStateToProps = (state: any) => ({
  pdfFile: state.loadPdf.pdfFile, // Ensure this matches the state structure
});

export default connect(mapStateToProps)(AddText);
