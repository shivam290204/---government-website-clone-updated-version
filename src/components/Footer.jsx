import React, { useState, useEffect } from 'react';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin, UserCheck, ShieldCheck, Eye, Activity } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const [visitorCount, setVisitorCount] = useState(1405928);

  useEffect(() => {
    // Simulate active visitor count increment
    const interval = setInterval(() => {
      setVisitorCount(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="footer-wrapper">
      <div className="container">
        
        {/* Main Footer Grid */}
        <div className="footer-grid">
          
          {/* Brand & Socials & Contacts */}
          <div className="footer-col brand-col" style={{ gridColumn: 'span 2' }}>
            <div className="footer-logo-row">
              <div className="footer-logo-box">
                <img src="/assets/images/logo2.png" alt="Bihar Logo" className="footer-logo-img" />
              </div>
              <div className="footer-brand-text">
                <h3>{t('footer.udyogVibhag')}</h3>
                <p>{t('footer.biharSarkar')}</p>
              </div>
            </div>
            
            <p className="mt-4 text-sm" style={{ opacity: 0.8, maxWidth: '300px' }}>
              <MapPin size={14} className="inline mr-1" />
              {t('footer.addressLine1')} {t('footer.addressLine2')} {t('footer.addressLine3')} {t('footer.addressLine4')}
            </p>

            <div className="social-connect mt-4">
              <span>{t('footer.connectWithUs')}</span>
              <div className="social-icons">
                <a href="https://www.facebook.com/BiharIndustriesDept" target="_blank" rel="noreferrer" className="social-icon fb"><Facebook size={18} /></a>
                <a href="https://www.instagram.com/industriesdeptbihar/" target="_blank" rel="noreferrer" className="social-icon insta"><Instagram size={18} /></a>
                <a href="https://x.com/IndustriesBihar" target="_blank" rel="noreferrer" className="social-icon tw"><Twitter size={18} /></a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
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

          {/* Gov Policies */}
          <div className="footer-col">
            <h4 className="footer-heading">{t('footer.govLinks')}</h4>
            <ul className="footer-links">
              <li><a href="/rti">{t('footer.rti')}</a></li>
              <li><a href="/terms-and-conditions">{t('footer.terms')}</a></li>
              <li><a href="/sitemap">{t('footer.sitemap')}</a></li>
              <li><a href="/accessibility">{t('footer.accessibility')}</a></li>
              <li><a href="/website-policies">{t('footer.websitePolicies')}</a></li>
            </ul>
          </div>
        </div>

        {/* Separator */}
        <div className="footer-divider"></div>

        {/* Gov Compliance & Badges */}
        <div className="footer-compliance">
          <div className="compliance-logos">
            {/* Emblems/Badges */}
            <div className="badge-item hover-glow">
              <ShieldCheck size={24} className="text-success" />
              <span>{t('footer.gigwBadgeAlt')}</span>
            </div>
            <div className="badge-item hover-glow">
              <Activity size={24} className="text-secondary" />
              <span>{t('footer.sslBadgeAlt')}</span>
            </div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" alt="National Emblem" className="emblem-img opacity-80" style={{ height: '40px' }} />
          </div>

          <div className="compliance-text">
            <p>{t('footer.nicBranding')}</p>
            <p className="font-bold text-secondary mt-1">{t('footer.jaiHind')}</p>
          </div>

          <div className="visitor-stats">
            <div className="stat-card">
              <Eye size={16} /> 
              <span>{t('footer.visitorCount')} <strong>{visitorCount.toLocaleString('en-IN')}</strong></span>
            </div>
            <div className="stat-card">
              <span>{t('footer.lastUpdated')} <strong>15 {t('home.btnApply') === 'Apply Now' ? 'Mar' : 'मार्च'} 2026</strong></span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Dept Logins & Copyright */}
        <div className="footer-bottom flex-between">
          <div className="dept-logins">
            <a href="https://udyamiadmin.bihar.gov.in/" target="_blank" rel="noreferrer" className="dept-link">
              <UserCheck size={16} /> {t('footer.deptMmuyLogin')}
            </a>
            <span className="divider">|</span>
            <a href="https://laghuudyamiadmin.bihar.gov.in/" target="_blank" rel="noreferrer" className="dept-link">
              <UserCheck size={16} /> {t('footer.deptBluyLogin')}
            </a>
          </div>
          <p className="copyright">{t('footer.copyright', { year: new Date().getFullYear() })}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
