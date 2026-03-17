import React, { useState } from 'react';
import { Mail, User } from 'lucide-react';
import { mainContacts, hqContacts, districtContacts } from '../data/contactData';
import { useTranslation } from 'react-i18next';

const ContactCard = ({ contact }) => (
  <div className="card hover-lift download-card" style={{ borderTop: '4px solid var(--secondary)', minHeight: '180px', justifyContent: 'flex-start', padding: '1.5rem', alignItems: 'flex-start' }}>
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem', width: '100%' }}>
      <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(10, 37, 64, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', flexShrink: 0 }}>
        <User size={24} />
      </div>
      <div>
        <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: 'var(--primary)', margin: '0 0 0.25rem 0' }}>{contact.name}</h3>
        {contact.position && <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', fontWeight: 500, margin: 0 }}>{contact.position}</p>}
      </div>
    </div>
    {contact.email && (
      <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border)', width: '100%' }}>
        <a href={`mailto:${contact.email}`} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontSize: '0.875rem', fontWeight: 500, transition: 'color 0.2s', textDecoration: 'none' }}>
          <Mail size={16} />
          <span>{contact.email}</span>
        </a>
      </div>
    )}
  </div>
);

const ContactUs = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('main');

  return (
    <div className="page-wrapper animate-fade-in-up">
      <section className="dashboard-section container py-12">
        <div className="mmuy-header text-center mb-12">
          <h1 className="gradient-text" style={{ fontSize: '2.5rem', fontWeight: 800 }}>{t('contactUs.title')}</h1>
          <p className="text-muted mt-2">{t('contactUs.subtitle')}</p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="tab-capsule">
            <button 
              className={`tab-btn ${activeTab === 'main' ? 'active' : ''}`}
              onClick={() => setActiveTab('main')}
            >
              {t('contactUs.tabMain')}
            </button>
            <button 
              className={`tab-btn ${activeTab === 'hq' ? 'active' : ''}`}
              onClick={() => setActiveTab('hq')}
            >
              {t('contactUs.tabHq')}
            </button>
            <button 
              className={`tab-btn ${activeTab === 'district' ? 'active' : ''}`}
              onClick={() => setActiveTab('district')}
            >
              {t('contactUs.tabDistrict')}
            </button>
          </div>
        </div>

        <div className="tab-content" style={{ marginTop: '2.5rem' }}>
          <div style={{ display: activeTab === 'main' ? 'block' : 'none' }}>
            <div className="card-grid">
              {mainContacts.map((contact, index) => (
                <ContactCard key={index} contact={contact} />
              ))}
            </div>
          </div>

          <div style={{ display: activeTab === 'hq' ? 'block' : 'none' }}>
            <div className="card-grid">
              {hqContacts.map((contact, index) => (
                <ContactCard key={index} contact={contact} />
              ))}
            </div>
          </div>

          <div style={{ display: activeTab === 'district' ? 'block' : 'none' }}>
            <div className="card-grid">
              {districtContacts.map((contact, index) => (
                <ContactCard key={index} contact={contact} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
