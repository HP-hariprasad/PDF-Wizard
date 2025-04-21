import React from 'react';
import { PanelMenu } from 'primereact/panelmenu';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  const navigate = useNavigate();

  const items = [
    { label: 'Upload PDF', icon: 'pi pi-upload', command: () => navigate('/') },
    { label: 'View PDF', icon: 'pi pi-eye', command: () => navigate('/view') },
    { label: 'Merge PDFs', icon: 'pi pi-clone', command: () => navigate('/merge') },
    { label: 'Split PDF', icon: 'pi pi-columns', command: () => navigate('/split') }, // Updated icon
    { label: 'Compress PDF', icon: 'pi pi-compress-alt', command: () => navigate('/compress') }, // Updated icon
    { label: 'Convert PDF', icon: 'pi pi-refresh', command: () => navigate('/convert') },
    { label: 'Edit PDF', icon: 'pi pi-pencil', command: () => navigate('/edit') },
    { label: 'Security Tools', icon: 'pi pi-lock', command: () => navigate('/security') },
    { label: 'Advanced Utilities', icon: 'pi pi-cog', command: () => navigate('/advanced') },
  ];

  return <PanelMenu model={items} className="sidebar-menu" />;
};

export default Sidebar;
