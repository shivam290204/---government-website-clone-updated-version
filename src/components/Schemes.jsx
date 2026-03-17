import React from 'react';
import { FileText, Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';


const Schemes = () => {
  const { t } = useTranslation();

  const schemes = [
    {
      id: 1,
      name: t('home.scheme1Name'),
      desc: t('home.scheme1Desc'),
      link: "https://udyami.bihar.gov.in/pdf/MMUY%202024-25%20Selection%20Process%20&%20Guidelines.pdf"
    },
    {
      id: 2,
      name: t('home.scheme2Name'),
      desc: t('home.scheme2Desc'),
      link: "/pdf/docs/bihar laghu udyami yojna (1).pdf"
    }
  ];

  return (
    <div className="card glass schemes-card">
      <div className="card-header success-header">
        <FileText className="header-icon" />
        <h3 className="card-title">{t('home.schemesTitle')}</h3>
      </div>
      
      <div className="card-body">
        <div className="schemes-list">
          {schemes.map((scheme, index) => (
            <div key={scheme.id} className="scheme-item glass-panel animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="scheme-info">
                <h4>{scheme.name}</h4>
                <p>{scheme.desc}</p>
              </div>
              <a href={scheme.link} target="_blank" rel="noreferrer" className="btn btn-secondary scheme-download-btn">
                <Download size={16} /> {t('home.btnDownload')}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schemes;
