import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import WatermarkPage from './pages/WatermarkPage';

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/watermark" element={<WatermarkPage />} />
        {/* Add other feature pages here */}
      </Routes>
    </Layout>
  );
};

export default App;
