import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { TOKEN_ICO_Provider } from '../context/index.tsx';
import { ethers } from 'ethers';

createRoot(document.getElementById('root')!).render(
  <TOKEN_ICO_Provider>
    <StrictMode>
      <App />
    </StrictMode>
  </TOKEN_ICO_Provider>
);
