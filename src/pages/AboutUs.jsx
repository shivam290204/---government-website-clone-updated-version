import React from 'react';
import { Landmark } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <div className="animate-fade-in-up">
      <section className="about-hero">
        <div className="container">
          <div className="about-title-row">
            <div className="about-icon-wrapper">
              <Landmark size={40} />
            </div>
            <h1 className="about-title gradient-text">{t('aboutUs.title')}</h1>
          </div>
          <p className="about-subtitle">{t('aboutUs.subtitle')}</p>
        </div>
      </section>

      <section className="container about-content-wrapper">
        <div className="glass-panel about-content-card">
          <div className="about-badge">{t('aboutUs.overview')}</div>
          
          <div className="about-text">
            <p>
              राज्य के युवा/युवतियों को उद्योग स्थापित करने में अभिरूची पैदा करने तथा सूक्ष्म एवं
              लघु उद्योग को बढ़ावा देने के उद्देश्य से राज्य सरकार द्वारा वर्ष 2018 में मुख्यमंत्री
              अनुसूचित जाति/अनुसूचित जनजाति उद्यमी योजना, वर्ष 2020 में मुख्यमंत्री अति पिछड़ा वर्ग
              उद्यमी योजना, वर्ष 2021 में मुख्यमंत्री महिला उद्यमी योजना एवं युवा उद्यमी योजना तथा
              वर्ष 2023 में मुख्यमंत्री अल्पसंख्यक उद्यमी योजना लागू की गयी है।
            </p>

            <p>{t('aboutUs.para2')}</p>

            <div className="about-highlight-box">
              <p>{t('aboutUs.para3')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
