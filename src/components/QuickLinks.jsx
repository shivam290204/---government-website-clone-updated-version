import React from 'react';
import { ExternalLink, Link2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const links = [
  { id: 1, name: "PMEGP", url: "https://www.kviconline.gov.in/pmegpeportal/pmegphome/index.jsp" },
  { id: 2, name: "PMFME", url: "https://pmfme.mofpi.gov.in" },
  { id: 3, name: "MSME Mart", url: "https://www.msmemart.com" },
  { id: 4, name: "UDYAM Reg.", url: "https://udyamregistration.gov.in/Government-India/Ministry-MSME-registration.htm" },
  { id: 5, name: "GEM", url: "https://gem.gov.in" },
  { id: 6, name: "Zed", url: "http://www.zed.msme.gov.in" },
  { id: 7, name: "Lean", url: "https://lean.msme.gov.in" },
  { id: 8, name: "ONDC", url: "https://ondc.org" },
  { id: 9, name: "IID", url: "https://iid.org.in" }
];

const QuickLinks = () => {
  const { t } = useTranslation();
  return (
    <div className="card glass quick-links-card">
      <div className="card-header default-header">
        <Link2 className="header-icon" />
        <h3 className="card-title">{t('home.quickLinksTitle')}</h3>
      </div>
      
      <div className="card-body">
        <div className="links-grid">
          {links.map((link, index) => (
            <a 
              key={link.id} 
              href={link.url} 
              target="_blank" 
              rel="noreferrer" 
              className="quick-link-item animate-fade-in-up" 
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <span className="link-name">{link.name}</span>
              <ExternalLink size={14} className="link-icon" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
