import React from 'react';
import './Layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout-container">
      <header className="layout-header">
        <div className="header-content">
          <i className="pi pi-file-pdf header-icon" />
          <h1 className="layout-title">PDF Utility</h1>
        </div>
      </header>
      <main className="layout-main">{children}</main>
    </div>
  );
};

export default Layout;
