import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const BLUY_PORTAL = 'https://udyami.bihar.gov.in/bluy';
const BLUY_2024 = 'https://udyami.bihar.gov.in/bluy2024';

const BluyLogin = () => {
  const { t } = useTranslation();
  const [aadhaar, setAadhaar] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [resendMsg, setResendMsg] = useState('');

  useEffect(() => {
    document.title = t('bluyLogin.pageTitle');
  }, [t]);

  const formatAadhaar = (val) => {
    const digits = val.replace(/\D/g, '').slice(0, 12);
    return digits.replace(/(\d{4})(?=\d)/g, '$1 ');
  };

  const handleGetOtp = (e) => {
    e.preventDefault();
    const raw = aadhaar.replace(/\s/g, '');
    if (raw.length !== 12) {
      setError(t('bluyLogin.aadhaarError'));
      return;
    }
    setError('');
    setOtpSent(true);
    setResendMsg('');
  };

  const handleResend = () => {
    setResendMsg(t('bluyLogin.otpResent'));
    setOtp('');
    setTimeout(() => setResendMsg(''), 3000);
  };

  const handleVerify = (e) => {
    e.preventDefault();
    if (!otp.trim() || otp.length < 4) {
      setError(t('bluyLogin.otpError'));
      return;
    }
    setError('');
    window.open(BLUY_PORTAL, '_blank', 'noopener,noreferrer');
  };

  const panelLinks = [
    t('bluyLogin.navHome'),
    t('bluyLogin.navGuidelines'),
    t('bluyLogin.navNetwork'),
    t('bluyLogin.navCatalog'),
    t('bluyLogin.navSupport'),
    t('bluyLogin.navHelpDocs')
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#f0f2f5', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 16px' }}>
      <div style={{ display: 'flex', width: '100%', maxWidth: 940, borderRadius: 16, overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,0,0,0.15)' }}>
        <div style={{ background: '#3600a0', color: '#fff', padding: '44px 36px', width: '40%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <a href={BLUY_PORTAL} target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '1rem', fontWeight: 700, lineHeight: 1.55, textDecoration: 'underline', display: 'block', marginBottom: 36 }}>
              {t('bluyLogin.portalName')}
            </a>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {panelLinks.map((item) => (
                <a key={item} href={BLUY_PORTAL} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.88)', textDecoration: 'none' }}>
                  {item}
                </a>
              ))}
            </nav>
          </div>

          <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.65)', marginTop: 40, lineHeight: 1.8 }}>
            <p style={{ margin: 0 }}>{t('bluyLogin.copyright')}</p>
            <p style={{ margin: 0 }}>{t('bluyLogin.brandTitle')}</p>
            <p style={{ margin: 0 }}>{t('bluyLogin.brandSubtitle')}</p>
          </div>
        </div>

        <div style={{ background: '#fff', padding: '52px 56px', width: '60%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <h2 style={{ fontSize: '1.55rem', fontWeight: 700, color: '#3600a0', marginBottom: 40, textAlign: 'center' }}>{t('bluyLogin.heading')}</h2>

          {error && <div style={{ width: '100%', maxWidth: 420, background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 8, padding: '10px 14px', fontSize: '0.83rem', color: '#dc2626', marginBottom: 18 }}>{error}</div>}
          {resendMsg && <div style={{ width: '100%', maxWidth: 420, background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 8, padding: '10px 14px', fontSize: '0.83rem', color: '#15803d', marginBottom: 18 }}>{resendMsg}</div>}

          <form onSubmit={otpSent ? handleVerify : handleGetOtp} style={{ width: '100%', maxWidth: 420 }}>
            <div style={{ marginBottom: 28 }}>
              <label style={{ display: 'block', fontSize: '0.85rem', color: '#3600a0', fontWeight: 600, marginBottom: 6 }}>{t('bluyLogin.aadhaarLabel')}</label>
              <input type="text" inputMode="numeric" placeholder={t('bluyLogin.aadhaarPlaceholder')} value={aadhaar} onChange={(e) => setAadhaar(formatAadhaar(e.target.value))} disabled={otpSent} style={{ width: '100%', border: '1.5px solid #c4b5fd', borderRadius: 8, padding: '12px 14px', fontSize: '1rem', outline: 'none', boxSizing: 'border-box', letterSpacing: '0.08em', background: otpSent ? '#f8f8ff' : '#fff' }} />
            </div>

            {otpSent && (
              <div style={{ marginBottom: 28 }}>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#3600a0', fontWeight: 600, marginBottom: 6 }}>{t('bluyLogin.otpLabel')}</label>
                <input type="text" inputMode="numeric" placeholder={t('bluyLogin.otpPlaceholder')} value={otp} onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))} style={{ width: '100%', border: '1.5px solid #c4b5fd', borderRadius: 8, padding: '12px 14px', fontSize: '1.1rem', outline: 'none', boxSizing: 'border-box', letterSpacing: '0.2em' }} autoFocus />
              </div>
            )}

            <button type="submit" style={{ width: '100%', background: '#3600a0', color: '#fff', fontWeight: 700, fontSize: '1rem', padding: '14px', borderRadius: 10, border: 'none', cursor: 'pointer', marginBottom: 18 }}>
              {otpSent ? t('bluyLogin.loginButton') : t('bluyLogin.getOtpButton')}
            </button>

            <div style={{ textAlign: 'center', marginBottom: 28 }}>
              <button type="button" onClick={otpSent ? handleResend : undefined} style={{ background: 'none', border: 'none', color: '#3600a0', fontSize: '0.88rem', textDecoration: 'underline', cursor: 'pointer', padding: 0 }}>
                {t('bluyLogin.resendOtp')}
              </button>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', marginBottom: 24 }} />

            <div style={{ textAlign: 'center' }}>
              <a href={BLUY_2024} target="_blank" rel="noopener noreferrer" style={{ color: '#3600a0', fontSize: '0.85rem', textDecoration: 'underline', lineHeight: 1.5 }}>
                {t('bluyLogin.login2024')}
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BluyLogin;
