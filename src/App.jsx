import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  useEffect(() => {
    document.title = 'Business Support Portal | Empowering Entrepreneurs';
  }, []);

  return (
    <Router>
      <div className="app-container">
        <Header />
        <main id="main">
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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
