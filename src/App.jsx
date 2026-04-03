import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './i18n';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Mmuy from './pages/Mmuy';
import Bluy from './pages/Bluy';
import SuccessStories from './pages/SuccessStories';
import Resources from './pages/Resources';
import ContactUs from './pages/ContactUs';
import Chat from './pages/Chat';
import MmuyLogin from './pages/MmuyLogin';
import BluyLogin from './pages/BluyLogin';
import Login from './pages/Login';
import SearchResults from './pages/SearchResults';

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.title = t('app.documentTitle');
  }, [t, i18n.language]);

  return (
    <Router>
      <div className="app-container">
        <Header />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/mmuy" element={<Mmuy />} />
            <Route path="/bluy" element={<Bluy />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/login/mmuy" element={<MmuyLogin />} />
            <Route path="/login/bluy" element={<BluyLogin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/search" element={<SearchResults />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
