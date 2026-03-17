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
          <div className="footer-col brand-col">
            <div className="footer-logo-row">
              <div className="footer-logo-box">
                <div className="h-14 w-14 rounded-full bg-gradient-to-br from-[#1a2b5f] to-[#2f5ea8] text-white flex items-center justify-center font-extrabold">
                  EE
                </div>
              </div>
              <div className="footer-brand-text">
                <h3>{t('footer.udyogVibhag')}</h3>
                <p>{t('footer.biharSarkar')}</p>
              </div>
            </div>

            <p className="mt-4 text-sm" style={{ opacity: 0.8, maxWidth: '300px' }}>
              <MapPin size={14} className="inline mr-1" />
              {t('footer.addressLine2')}
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
            <h4 className="footer-heading">{t('footer.importantLinks')}</h4>
            <ul className="footer-links">
              <li><a href="/">{t('footer.home')}</a></li>
              <li><a href="/about-us">{t('footer.aboutUs')}</a></li>
              <li><a href="/success-stories">{t('footer.successStories')}</a></li>
              <li><a href="/contact-us">{t('footer.contactUs')}</a></li>
              <li><a href="/pdf/FAQ.pdf" target="_blank" rel="noreferrer">{t('footer.faq')}</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">{t('footer.helpAndPolicies')}</h4>
            <ul className="footer-links">
              <li><a href="/terms-and-conditions">{t('footer.terms')}</a></li>
              <li><a href="/sitemap">{t('footer.sitemap')}</a></li>
              <li><a href="/accessibility">{t('footer.accessibility')}</a></li>
              <li><a href="/website-policies">{t('footer.websitePolicies')}</a></li>
              <li><a href="/contact-us">{t('footer.support')}</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-compliance">
          <div className="compliance-logos">
            <div className="badge-item hover-glow">
              <ShieldCheck size={24} className="text-success" />
              <span>{t('footer.securePlatform')}</span>
            </div>
            <div className="badge-item hover-glow">
              <Activity size={24} className="text-secondary" />
              <span>{t('footer.uptime')}</span>
            </div>
          </div>

          <div className="compliance-text">
            <p>{t('footer.builtFor')}</p>
            <p className="font-bold text-secondary mt-1">{t('footer.launchLearnScale')}</p>
          </div>

          <div className="visitor-stats">
            <div className="stat-card">
              <Eye size={16} />
              <span>{t('footer.visitorCount')} <strong>{visitorCount.toLocaleString('en-IN')}</strong></span>
            </div>
            <div className="stat-card">
              <span>{t('footer.lastUpdated')} <strong>15 Mar 2026</strong></span>
            </div>
          </div>
        </div>

        <div className="footer-bottom flex-between">
          <div className="dept-logins">
            <a href="/login/mmuy" className="dept-link">
              <UserCheck size={16} /> {t('footer.partnerLogin')} (MMUY)
            </a>
            <span className="divider">|</span>
            <a href="/login/bluy" className="dept-link">
              <UserCheck size={16} /> {t('footer.partnerLogin')} (BLUY)
            </a>
          </div>
          <p className="copyright">{t('footer.copyright', { year: new Date().getFullYear() })}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
