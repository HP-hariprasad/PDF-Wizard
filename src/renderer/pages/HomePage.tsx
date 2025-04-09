import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from '@reduxjs/toolkit';
import LoadPdf from '../components/LoadPdf/LoadPdf';
import AddText from '../components/AddText/AddText';
import MergePdfs from '../components/MergePdfs/MergePdfs';
import { loadPdf } from '../store/common/actions';
import { APP_TITLE } from '../store/common/constants';
import styles from './HomePage.module.css';

interface HomePageProps {
  loadPdf: (file: File) => void;
}

const HomePage: React.FC<HomePageProps> = ({ loadPdf }) => {
  const [activeTab, setActiveTab] = useState<'upload' | 'view' | 'merge'>('upload');

  const renderContent = () => {
    switch (activeTab) {
      case 'upload':
        return (
          <div className={styles.card}>
            <h2>Upload your PDF document</h2>
            <p>Drag and drop your PDF file or click to browse</p>
            <LoadPdf loadPdf={loadPdf} />
          </div>
        );
      case 'view':
        return (
          <div className={styles.card}>
            <h2>View and Edit PDF</h2>
            <p>Add text to your PDF document</p>
            <AddText />
          </div>
        );
      case 'merge':
        return (
          <div className={styles.card}>
            <h2>Merge PDF Documents</h2>
            <p>Select multiple PDF files to merge them into one</p>
            <MergePdfs />
          </div>
        );
      default:
        return (
          <div className={styles.card}>
            <h2>Error</h2>
            <p>Invalid tab selected. Please refresh the page.</p>
          </div>
        );
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>{APP_TITLE}</h1>
        <p className={styles.subtitle}>A simple and modern PDF utility tool</p>
      </header>
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${activeTab === 'upload' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('upload')}
        >
          Upload PDF
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'view' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('view')}
        >
          View PDF
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'merge' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('merge')}
        >
          Merge PDFs
        </button>
      </div>
      <main className={styles.main}>{renderContent()}</main>
      <footer className={styles.footer}>
        © 2025 PDF Wizard - A modern PDF utility tool
      </footer>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  loadPdf: (file: File) => dispatch(loadPdf()),
});

export default connect(null, mapDispatchToProps)(HomePage);
