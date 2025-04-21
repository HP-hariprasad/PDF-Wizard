import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import Watermark from '../components/Watermark/Watermark';
import FeaturePage from './FeaturePage';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: 'Convert PDFs',
      description: 'Convert PDFs to various formats like Word, Excel, and more.',
      icon: 'pi pi-refresh',
      route: '/convert',
    },
    {
      title: 'Efficient Compression',
      description: 'Reduce file sizes without losing quality for easier sharing and storage.',
      icon: 'pi pi-compress-alt',
      route: '/compress',
    },
    {
      title: 'Watermark',
      description: 'Protect your documents by adding custom watermarks effortlessly.',
      icon: 'pi pi-image',
      route: '/watermark',
    },
    {
      title: 'Batch Processing',
      description: 'Process multiple PDF files simultaneously to save time.',
      icon: 'pi pi-list',
      route: '/batch',
    },
    {
      title: 'Split PDFs',
      description: 'Easily split PDF files to suit your needs.',
      icon: 'pi pi-columns',
      route: '/split',
    },
    {
      title: 'Merge PDFs',
      description: 'Easily merge multiple PDF files into one.',
      icon: 'pi pi-clone',
      route: '/merge',
    },
    {
      title: 'Digital Signing',
      description: 'Digitally sign documents with legally binding electronic signatures.',
      icon: 'pi pi-pencil',
      route: '/sign',
    },
    {
      title: 'OCR Scanning',
      description: 'Extract text from scanned documents with Optical Character Recognition.',
      icon: 'pi pi-search',
      route: '/ocr',
    },
  ];

  return (
    <div className="home-main">
      <div className="features-grid">
        {features.map((feature, index) => (
          <div
            key={index}
            className="feature-card"
            onClick={() => navigate(feature.route)}
          >
            <i className={`feature-icon ${feature.icon}`} />
            <h2 className="feature-title">{feature.title}</h2>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
