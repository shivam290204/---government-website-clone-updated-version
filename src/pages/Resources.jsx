import React from 'react';
import { Download, FileText } from 'lucide-react';

const Resources = () => {
  const resourceItems = [
    { title: 'अनुसूचित जाति/अनुसूचित जनजाति/अति पिछड़ा वर्ग संकल्प', link: '#' },
    { title: 'महिला युवा संकल्प', link: '#' },
    { title: 'अल्पसंख्यक संकल्प', link: '#' },
    { title: 'बिहार लघु उद्यमी योजना संकल्प', link: '#' },
    { title: 'मुख्यमंत्री उद्यमी योजना दिशा निर्देश', link: '#' },
    { title: 'बिहार लघु उद्यमी योजना दिशा निर्देश', link: '#' },
  ];

  return (
    <div className="page-wrapper animate-fade-in-up">
      <section className="dashboard-section container py-12">
        <div className="mmuy-header text-center mb-12">
          <h1 className="gradient-text" style={{ fontSize: '2.5rem', fontWeight: 800 }}>संसाधन</h1>
          <p className="text-muted mt-2">संसाधनों की सूची एवं महत्वपूर्ण दस्तावेज</p>
        </div>

        <div className="card-grid">
          {resourceItems.map((item, index) => (
            <div key={index} className="card hover-lift download-card">
              <div className="card-icon-wrapper mb-2">
                <FileText size={40} className="text-primary" />
              </div>
              <h3 className="text-center">{item.title}</h3>
              <a href={item.link} className="btn btn-primary sankalp-btn w-full">
                <Download size={16} />
                <span>डाउनलोड</span>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Resources;
