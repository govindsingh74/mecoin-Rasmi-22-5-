import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { TOKEN_ICO_Provider } from '../context/index.tsx';
import { ethers } from 'ethers';
import process from 'process';
import { Buffer } from 'buffer';

window.global = window;      // ⬅️ Important: define `global`
window.Buffer = Buffer;
window.process = process;

createRoot(document.getElementById('root')!).render(
  <TOKEN_ICO_Provider>
    <StrictMode>
      <App />
    </StrictMode>
  </TOKEN_ICO_Provider>
);
