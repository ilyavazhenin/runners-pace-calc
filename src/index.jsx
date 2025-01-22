import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      let reg;

      if (import.meta.env?.DEV) {
        reg = await navigator.serviceWorker.register('/sw.js', {
          type: 'module',
        });
      } else {
        reg = await navigator.serviceWorker.register('/sw.js');
      }

      console.log('Service worker registered! 😎', reg);
    } catch (err) {
      console.log('😥 Service worker registration failed: ', err);
    }
  });
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
