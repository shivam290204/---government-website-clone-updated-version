import React from 'react';
import { AlertCircle, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ImportantNotices = () => {
  const { t } = useTranslation();

  const notices = [
    {
      id: 1,
      text: t('home.notice1Text'),
      linkText: t('home.notice1Link'),
      linkUrl: "https://udyamiuser.bihar.gov.in/"
    },
    {
      id: 2,
      text: t('home.notice2Text'),
      linkText: t('home.notice2Link'),
      linkUrl: "https://udyami.bihar.gov.in/pdf/MMUY-2025/Annexture - II - Guideline for MMUY 2025-26.pdf"
    },
    {
      id: 3,
      text: t('home.notice3Text'),
      linkText: t('home.notice3Link'),
      linkUrl: "https://udyami.bihar.gov.in/result-waiting"
    },
    {
      id: 4,
      text: t('home.notice4Text'),
      linkText: t('home.notice4Link'),
      linkUrl: "https://udyamiuser.bihar.gov.in/"
    },
    {
      id: 5,
      text: t('home.notice5Text'),
      linkText: t('home.notice5Link'),
      linkUrl: "https://udyami.bihar.gov.in/result-randomization"
    }
  ];

  return (
    <div className="card glass notice-card">
      <div className="card-header danger-header">
        <AlertCircle className="header-icon" />
        <h3 className="card-title">{t('home.noticesTitle')}</h3>
      </div>
      
      <div className="card-body custom-scrollbar">
        <ul className="notice-list">
          {notices.map((notice, index) => (
            <li key={notice.id} className="notice-item animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="notice-number">{notice.id}.</div>
              <div className="notice-content">
                <p>{notice.text}</p>
                {notice.linkUrl && (
                  <a href={notice.linkUrl} target="_blank" rel="noreferrer" className="notice-link">
                    {notice.linkText} <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ImportantNotices;
