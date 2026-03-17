import React, { useState, useEffect } from 'react';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin, UserCheck, ShieldCheck, Eye, Activity } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const [visitorCount, setVisitorCount] = useState(1405928);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisitorCount((prev) => prev + Math.floor(Math.random() * 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col brand-col" style={{ gridColumn: 'span 2' }}>
            <div className="footer-logo-row">
              <div className="footer-logo-box">
                <div className="h-14 w-14 rounded-full bg-gradient-to-br from-[#1a2b5f] to-[#2f5ea8] text-white flex items-center justify-center font-extrabold">
                  EE
                </div>
              </div>
              <div className="footer-brand-text">
                <h3>Empowering Entrepreneurs</h3>
                <p>Business Support Portal</p>
              </div>
            </div>

            <p className="mt-4 text-sm" style={{ opacity: 0.8, maxWidth: '300px' }}>
              <MapPin size={14} className="inline mr-1" />
              2nd Floor, Growth Hub, Startup Lane, Patna, Bihar 800015
            </p>

            <div className="social-connect mt-4">
              <span>{t('footer.connectWithUs')}</span>
              <div className="social-icons">
                <a href="#" className="social-icon fb"><Facebook size={18} /></a>
                <a href="#" className="social-icon insta"><Instagram size={18} /></a>
                <a href="#" className="social-icon tw"><Twitter size={18} /></a>
              </div>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Important Links</h4>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about-us">About Us</a></li>
              <li><a href="/success-stories">Success Stories</a></li>
              <li><a href="/contact-us">Contact Us</a></li>
              <li><a href="/pdf/FAQ.pdf" target="_blank" rel="noreferrer">FAQ</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Platform Help</h4>
            <ul className="footer-links">
              <li><a href="/terms-and-conditions">Terms of Use</a></li>
              <li><a href="/sitemap">Sitemap</a></li>
              <li><a href="/accessibility">Accessibility</a></li>
              <li><a href="/website-policies">Website Policies</a></li>
              <li><a href="/contact-us">Support</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-compliance">
          <div className="compliance-logos">
            <div className="badge-item hover-glow">
              <ShieldCheck size={24} className="text-success" />
              <span>Secure Platform</span>
            </div>
            <div className="badge-item hover-glow">
              <Activity size={24} className="text-secondary" />
              <span>99.9% Uptime</span>
            </div>
          </div>

          <div className="compliance-text">
            <p>Built for modern founders, creators, and growing businesses.</p>
            <p className="font-bold text-secondary mt-1">Launch. Learn. Scale.</p>
          </div>

          <div className="visitor-stats">
            <div className="stat-card">
              <Eye size={16} />
              <span>Visitor Count: <strong>{visitorCount.toLocaleString('en-IN')}</strong></span>
            </div>
            <div className="stat-card">
              <span>Last Updated: <strong>15 Mar 2026</strong></span>
            </div>
          </div>
        </div>

        <div className="footer-bottom flex-between">
          <div className="dept-logins">
            <a href="/login/mmuy" className="dept-link">
              <UserCheck size={16} /> Partner Login (MMUY)
            </a>
            <span className="divider">|</span>
            <a href="/login/bluy" className="dept-link">
              <UserCheck size={16} /> Partner Login (BLUY)
            </a>
          </div>
          <p className="copyright">{`© ${new Date().getFullYear()} Empowering Entrepreneurs, Business Support Portal. All rights reserved.`}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
