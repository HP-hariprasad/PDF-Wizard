import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom'; // Changed to HashRouter
import App from './App';
import store from './store';

// PrimeReact styles
import 'primereact/resources/themes/saga-blue/theme.css'; // Choose a theme
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css'; // Ensure PrimeIcons is imported
import 'primeflex/primeflex.css'; // Optional for layout utilities

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  );
}
