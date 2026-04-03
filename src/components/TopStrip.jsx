import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const TopStrip = () => {
  const { t, i18n } = useTranslation();
  const [time, setTime] = useState('');
  const isHindi = (i18n.resolvedLanguage || i18n.language || 'en').startsWith('hi');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const optionsDate = { day: '2-digit', month: 'short', year: 'numeric' };
      const dateStr = now.toLocaleDateString('en-IN', optionsDate).toUpperCase();
      const timeStr = now.toLocaleTimeString('en-IN', { hour12: false });
      setTime(`${dateStr} | ${timeStr}`);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const toggleLanguage = () => {
    const newLang = isHindi ? 'en' : 'hi';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="w-full flex items-center justify-between px-4 bg-[#1a2b5f] text-white h-[32px] text-xs font-sans">
      <div className="flex items-center gap-3">
        <span className="font-semibold tracking-wide">{t('topStrip.portalName')}</span>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-1.5 opacity-90 font-mono tracking-widest">
          <span>{time}</span>
        </div>

        <a href="#main-content" className="hover:underline opacity-90 hidden md:block">{t('topStrip.skipToMain')}</a>

        <div className="flex items-center gap-2">
          <Link to="/login" className="bg-[#f5a623] hover:bg-[#e69b20] transition-colors text-[#1a2b5f] px-2 py-0.5 font-bold rounded-sm inline-block">
            {t('topStrip.signIn')}
          </Link>

          <button
            type="button"
            onClick={toggleLanguage}
            title={isHindi ? t('topStrip.switchToEnglish') : t('topStrip.switchToHindi')}
            className="relative group flex items-center gap-1 bg-white/10 hover:bg-white/20 border border-white/20 rounded-sm px-2 py-0.5 text-white transition-colors cursor-pointer"
          >
            <span className="font-bold text-[11px] tracking-wide">
              {isHindi ? 'EN' : 'HI'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopStrip;
