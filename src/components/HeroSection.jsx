import React from 'react';
import { ArrowRight, Download, Users, Briefcase, TrendingUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  return (
    <section className="hero-section">
      <div className="hero-background"></div>
      <div className="container hero-content">
        <div className="hero-text-content animate-fade-in-up">
          <h1 className="hero-title">
            {i18n.language === 'en' ? (
              <>{t('home.heroTitle1')}<span className="highlight-text">{t('home.heroTitle2')}</span></>
            ) : (
              <><span className="highlight-text">{t('home.heroTitle1')}</span>{t('home.heroTitle2')}</>
            )}
          </h1>
          <p className="hero-subtitle">
            {t('home.heroSubtitle')}
          </p>
          
          <div className="hero-actions">
            <a href="https://udyamiuser.bihar.gov.in/" className="btn btn-primary primary-glow">
              {t('home.btnApply')} <ArrowRight size={18} />
            </a>
            <a href="/pdf/FAQ.pdf" className="btn btn-secondary glass">
              {t('home.btnInfo')} <Download size={18} />
            </a>
          </div>
          
          <div className="hero-stats glass-panel">
            <div className="stat-item">
              <Users className="stat-icon" />
              <div className="stat-info">
                <h4>10,000+</h4>
                <p>{t('home.statsBenefited')}</p>
              </div>
            </div>
            <div className="stat-separator"></div>
            <div className="stat-item">
              <Briefcase className="stat-icon" />
              <div className="stat-info">
                <h4>50+</h4>
                <p>{t('home.statsApproved')}</p>
              </div>
            </div>
            <div className="stat-separator"></div>
            <div className="stat-item">
              <TrendingUp className="stat-icon" />
              <div className="stat-info">
                <h4>₹10 Lakh</h4>
                <p>{t('home.statsMaxAsst')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
