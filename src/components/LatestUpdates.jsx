import React, { useState } from 'react';
import { Calendar, ChevronDown, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';


const LatestUpdates = () => {
  const { t } = useTranslation();
  
  const updatesData = {
    "2026": [
      { date: "25-02-2026", text: t('home.update1_2026'), link: "https://udyamiuser.bihar.gov.in/" },
      { date: "25-02-2026", text: t('home.update2_2026'), link: "https://udyami.bihar.gov.in/pdf/MMUY-2025/Annexture - II - Guideline for MMUY 2025-26.pdf" },
    ],
    "2025": [
      { date: "08-08-2025", text: t('home.update1_2025'), link: "https://udyamiuser.bihar.gov.in/" },
      { date: "24-03-2025", text: t('home.update2_2025'), link: "https://udyami.bihar.gov.in/result-randomization" },
      { date: "07-03-2025", text: t('home.update3_2025'), link: "https://udyami.bihar.gov.in/result" },
      { date: "19-02-2025", text: t('home.update4_2025'), link: "https://laghuudyami.bihar.gov.in/new-registration/register" }
    ],
    "2024": [
      { date: "04-01-2024", text: t('home.update1_2024'), link: null }
    ]
  };

  const [selectedYear, setSelectedYear] = useState('2026');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const years = Object.keys(updatesData).reverse();
  
  const currentUpdates = updatesData[selectedYear] || [];

  return (
    <div className="card glass updates-card">
      <div className="card-header primary-header">
        <div className="header-title-wrap">
          <Calendar className="header-icon" />
          <h3 className="card-title">{t('home.updatesTitle')}</h3>
        </div>
        
        <div className="year-selector relative-dropdown" onMouseLeave={() => setIsDropdownOpen(false)}>
          <span className="year-label">{t('home.updatesYearLabel')}</span>
          <button className="year-dropdown-btn" onMouseEnter={() => setIsDropdownOpen(true)}>
            {selectedYear} <ChevronDown size={14} />
          </button>
          {isDropdownOpen && (
            <ul className="year-dropdown-menu glass">
              {years.map(y => (
                <li key={y} className={y === selectedYear ? 'active' : ''} onClick={() => { setSelectedYear(y); setIsDropdownOpen(false); }}>
                  {y}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      
      <div className="card-body custom-scrollbar">
        {currentUpdates.length > 0 ? (
          <div className="timeline-container">
            {currentUpdates.map((update, idx) => (
              <div key={idx} className="timeline-item animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="timeline-date">
                  <span className="date-badge">{update.date}</span>
                </div>
                <div className="timeline-content">
                  <p>{update.text}</p>
                  {update.link && (
                    <a href={update.link} target="_blank" rel="noreferrer" className="timeline-link">
                      {t('home.updatesLink')} <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-data">{t('home.updatesNoData')}</div>
        )}
      </div>
    </div>
  );
};

export default LatestUpdates;
