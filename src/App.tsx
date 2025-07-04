import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { WalletProvider } from './providers/WalletProvider';
import { TOKEN_ICO_Provider } from '../context/index';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ToolsPage from './pages/ToolsPage';
import UtilityPage from './pages/UtilityPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

function App() {
  return (
    <HelmetProvider>
      <WalletProvider>
        <TOKEN_ICO_Provider>
          <Router>
            <div className="app min-h-screen bg-gray-900">
              <Navbar />
              <main className="pt-16">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/tools" element={<ToolsPage />} />
                  <Route path="/utility" element={<UtilityPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/terms-of-service" element={<TermsOfService />} />
                  {/* Catch all route for 404 */}
                  <Route path="*" element={<HomePage />} />
                </Routes>
              </main>
              <Footer />
              <Toaster 
                position="top-right"
                toastOptions={{
                  duration: 4000,
                  style: {
                    background: '#1e40af',
                    color: '#fff',
                  },
                }}
              />
            </div>
          </Router>
        </TOKEN_ICO_Provider>
      </WalletProvider>
    </HelmetProvider>
  );
}

export default App;