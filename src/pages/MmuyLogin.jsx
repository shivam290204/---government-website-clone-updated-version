import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const MMUY_PORTAL = 'https://udyamiuser.bihar.gov.in';

const MmuyLogin = () => {
  const { t } = useTranslation();
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    document.title = t('mmuyLogin.pageTitle');
  }, [t]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!mobile.trim() || mobile.length !== 10) {
      setError(t('mmuyLogin.mobileError'));
      return;
    }
    if (!password.trim()) {
      setError(t('mmuyLogin.passwordError'));
      return;
    }
    setError('');
    window.open(MMUY_PORTAL, '_blank', 'noopener,noreferrer');
  };

  const panelLinks = [
    t('mmuyLogin.navHome'),
    t('mmuyLogin.navGuidelines'),
    t('mmuyLogin.navCatalog'),
    t('mmuyLogin.navSupport'),
    t('mmuyLogin.navContact')
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#f0f2f5', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 16px' }}>
      <div style={{ display: 'flex', width: '100%', maxWidth: 940, borderRadius: 16, overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,0,0,0.15)' }}>
        <div style={{ background: '#3600a0', color: '#fff', padding: '44px 36px', width: '40%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <a href={MMUY_PORTAL} target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '1rem', fontWeight: 700, lineHeight: 1.55, textDecoration: 'underline', display: 'block', marginBottom: 36 }}>
              {t('mmuyLogin.portalName')}
            </a>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {panelLinks.map((item) => (
                <a key={item} href={MMUY_PORTAL} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.88)', textDecoration: 'none' }}>
                  {item}
                </a>
              ))}
            </nav>
            <div style={{ marginTop: 40, fontSize: '0.82rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.9 }}>
              <p style={{ margin: 0 }}>{t('mmuyLogin.helpText')}</p>
              <p style={{ margin: 0 }}>{t('mmuyLogin.supportLine')}</p>
              <p style={{ margin: 0 }}>{t('mmuyLogin.emailLine')}</p>
            </div>
          </div>
          <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.65)', marginTop: 40, lineHeight: 1.8 }}>
            <p style={{ margin: 0 }}>{t('mmuyLogin.copyright')}</p>
            <p style={{ margin: 0 }}>{t('mmuyLogin.brandTitle')}</p>
            <p style={{ margin: 0 }}>{t('mmuyLogin.brandSubtitle')}</p>
          </div>
        </div>

        <div style={{ background: '#fff', padding: '52px 56px', width: '60%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <h2 style={{ fontSize: '1.55rem', fontWeight: 700, color: '#3600a0', marginBottom: 36, textAlign: 'center' }}>{t('mmuyLogin.heading')}</h2>

          {error && <div style={{ width: '100%', maxWidth: 420, background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 8, padding: '10px 14px', fontSize: '0.83rem', color: '#dc2626', marginBottom: 18 }}>{error}</div>}

          <form onSubmit={handleLogin} style={{ width: '100%', maxWidth: 420 }}>
            <div style={{ marginBottom: 22 }}>
              <label style={{ display: 'block', fontSize: '0.82rem', color: '#3600a0', fontWeight: 600, marginBottom: 6, lineHeight: 1.5 }}>
                {t('mmuyLogin.mobileLabel')}
              </label>
              <input type="tel" placeholder={t('mmuyLogin.mobilePlaceholder')} value={mobile} onChange={(e) => setMobile(e.target.value.replace(/\D/g, '').slice(0, 10))} style={{ width: '100%', border: '1.5px solid #c4b5fd', borderRadius: 8, padding: '12px 14px', fontSize: '1rem', outline: 'none', boxSizing: 'border-box' }} />
            </div>

            <div style={{ marginBottom: 28, position: 'relative' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', color: '#3600a0', fontWeight: 600, marginBottom: 6 }}>{t('mmuyLogin.passwordLabel')}</label>
              <input type={showPassword ? 'text' : 'password'} placeholder={t('mmuyLogin.passwordPlaceholder')} value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '100%', border: '1.5px solid #c4b5fd', borderRadius: 8, padding: '12px 44px 12px 14px', fontSize: '1rem', outline: 'none', boxSizing: 'border-box' }} />
              <button type="button" onClick={() => setShowPassword((p) => !p)} style={{ position: 'absolute', right: 12, bottom: 13, background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af', fontSize: '0.78rem' }}>
                {showPassword ? t('mmuyLogin.hidePassword') : t('mmuyLogin.showPassword')}
              </button>
            </div>

            <button type="submit" style={{ width: '100%', background: '#3600a0', color: '#fff', fontWeight: 700, fontSize: '1rem', padding: '14px', borderRadius: 10, border: 'none', cursor: 'pointer', marginBottom: 20 }}>{t('mmuyLogin.loginButton')}</button>

            <div style={{ textAlign: 'center', marginBottom: 24 }}>
              <a href={MMUY_PORTAL} target="_blank" rel="noopener noreferrer" style={{ color: '#3600a0', fontSize: '0.88rem', textDecoration: 'underline' }}>{t('mmuyLogin.changePassword')}</a>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', marginBottom: 24 }} />

            <div style={{ textAlign: 'center' }}>
              <a href={`${MMUY_PORTAL}/grievance`} target="_blank" rel="noopener noreferrer" style={{ color: '#3600a0', fontSize: '0.88rem', textDecoration: 'underline' }}>{t('mmuyLogin.reportIssue')}</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MmuyLogin;
