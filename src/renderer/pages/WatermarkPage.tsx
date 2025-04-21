import React from 'react';
import { BreadCrumb } from 'primereact/breadcrumb';
import { useNavigate } from 'react-router-dom';
import Watermark from '../components/Watermark/Watermark';

const WatermarkPage: React.FC = () => {
  const navigate = useNavigate();

  const breadcrumbItems = [
    { label: 'Home', command: () => navigate('/') },
    { label: 'Watermark' },
  ];

  return (
    <div>
      <BreadCrumb model={breadcrumbItems} />
      <Watermark />
    </div>
  );
};

export default WatermarkPage;
