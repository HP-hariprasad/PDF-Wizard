import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BreadCrumb } from 'primereact/breadcrumb';
import './FeaturePage.css';

interface FeaturePageProps {
  title: string;
  children: React.ReactNode;
}

const FeaturePage: React.FC<FeaturePageProps> = ({ title, children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const breadcrumbItems = [
    { label: 'Home', command: () => navigate('/') },
    { label: title },
  ];

  return (
    <div className="feature-page-container">
      <BreadCrumb model={breadcrumbItems} className="feature-breadcrumb" />
      <h1 className="feature-page-title">{title}</h1>
      <div className="feature-page-content">{children}</div>
    </div>
  );
};

export default FeaturePage;
