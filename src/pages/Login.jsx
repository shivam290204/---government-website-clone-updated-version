import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Login = () => {
  const { t } = useTranslation();
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    document.title = `${t('topStrip.signIn')} | ${t('app.documentTitle')}`;
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
    // Mock successful login redirection to home
    window.location.href = '/'; 
  };

  const panelLinks = [
    t('header.home'),
    t('header.aboutUs'),
    t('header.successStories'),
    t('header.resources'),
    t('header.contactUs')
  ];

  return (
    <div className="auth-shell" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 16px' }}>
      <div className="auth-card" style={{ display: 'flex', width: '100%', maxWidth: 940, borderRadius: 16, overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,0,0,0.15)' }}>
        <div className="auth-side relative" style={{ background: '#1a2b5f', color: '#fff', padding: '44px 36px', width: '40%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflow: 'hidden' }}>
          {/* Decorative background element overlay */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 100% 100%, #ffffff 0%, transparent 50%)' }}></div>
          <div className="relative z-10">
            <a href="/" style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 700, lineHeight: 1.55, textDecoration: 'none', display: 'block', marginBottom: 36 }}>
              {t('header.biharSarkar')}
            </a>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {panelLinks.map((item) => (
                <a key={item} href="/" style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.88)', textDecoration: 'none', transition: 'color 0.2s ease-in-out' }} onMouseOver={(e) => e.target.style.color = '#fff'} onMouseOut={(e) => e.target.style.color = 'rgba(255,255,255,0.88)'}>
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
          <div className="relative z-10" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.65)', marginTop: 40, lineHeight: 1.8 }}>
            <p style={{ margin: 0 }}>Copyright © 2026</p>
            <p style={{ margin: 0 }}>{t('header.udyogVibhag')}</p>
          </div>
        </div>

        <div className="auth-main" style={{ background: '#fff', padding: '52px 56px', width: '60%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#1a2b5f', marginBottom: 36, textAlign: 'center' }}>Official Central Login</h2>

          {error && <div style={{ width: '100%', maxWidth: 420, background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 8, padding: '10px 14px', fontSize: '0.83rem', color: '#dc2626', marginBottom: 18 }}>{error}</div>}

          <form className="auth-form" onSubmit={handleLogin} style={{ width: '100%', maxWidth: 420 }}>
            <div style={{ marginBottom: 22 }}>
              <label style={{ display: 'block', fontSize: '0.85rem', color: '#1a2b5f', fontWeight: 600, marginBottom: 6, lineHeight: 1.5 }}>
                {t('mmuyLogin.mobileLabel')}
              </label>
              <input type="tel" placeholder={t('mmuyLogin.mobilePlaceholder')} value={mobile} onChange={(e) => setMobile(e.target.value.replace(/\D/g, '').slice(0, 10))} style={{ width: '100%', border: '1.5px solid #cbd5e1', borderRadius: 8, padding: '14px 16px', fontSize: '1rem', outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.2s', ':focus': { borderColor: '#1a2b5f' } }} />
            </div>

            <div style={{ marginBottom: 28, position: 'relative' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', color: '#1a2b5f', fontWeight: 600, marginBottom: 6 }}>{t('mmuyLogin.passwordLabel')}</label>
              <input type={showPassword ? 'text' : 'password'} placeholder={t('mmuyLogin.passwordPlaceholder')} value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '100%', border: '1.5px solid #cbd5e1', borderRadius: 8, padding: '14px 44px 14px 16px', fontSize: '1rem', outline: 'none', boxSizing: 'border-box' }} />
              <button type="button" onClick={() => setShowPassword((p) => !p)} style={{ position: 'absolute', right: 12, bottom: 15, background: 'none', border: 'none', cursor: 'pointer', color: '#64748b', fontSize: '0.8rem', fontWeight: 600 }}>
                {showPassword ? t('mmuyLogin.hidePassword') : t('mmuyLogin.showPassword')}
              </button>
            </div>

            <button type="submit" className="transition-transform active:scale-[0.98]" style={{ width: '100%', background: '#1a2b5f', color: '#fff', fontWeight: 700, fontSize: '1rem', padding: '14px', borderRadius: 10, border: 'none', cursor: 'pointer', marginBottom: 20 }}>{t('topStrip.signIn')}</button>

            <div style={{ textAlign: 'center', marginBottom: 24 }}>
              <a href="#" style={{ color: '#1a2b5f', fontSize: '0.88rem', fontWeight: 600, textDecoration: 'none' }} onMouseOver={(e) => e.target.style.textDecoration = 'underline'} onMouseOut={(e) => e.target.style.textDecoration = 'none'}>Forgot your password?</a>
            </div>
            
            <hr style={{ border: 'none', borderTop: '1px solid #e2e8f0', margin: '24px 0' }} />
            
            <div style={{ textAlign: 'center', fontSize: '0.88rem', color: '#64748b' }}>
              Don't have an account? <a href="#" style={{ color: '#1a2b5f', fontWeight: 600, textDecoration: 'none' }}>Register here</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
