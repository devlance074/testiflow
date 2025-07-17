import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navigation from './components/Navigation';
import LandingPage from './pages/LandingPage';
import SubmitTestimonial from './pages/SubmitTestimonial';
import Dashboard from './pages/Dashboard';
import DisplayWidget from './pages/DisplayWidget';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'submit':
        return <SubmitTestimonial onNavigate={setCurrentPage} />;
      case 'dashboard':
        return <Dashboard />;
      case 'display':
        return <DisplayWidget />;
      default:
        return <LandingPage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors">
        <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
        {renderPage()}
      </div>
    </ThemeProvider>
  );
}

export default App;