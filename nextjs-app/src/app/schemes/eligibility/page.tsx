'use client';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ArrowLeft, CheckCircle, Info } from 'lucide-react';

const SchemeEligibilityChecker = () => {
  const { t } = useTranslation();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    category: '',
    age: '',
    income: '',
    education: '',
    domain: ''
  });

  return (
    <div className="container py-12">
      <div className="glass-panel p-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-primary">{t('eligibility.title', 'Scheme Eligibility Checker')}</h2>
        <p className="text-muted mb-8">
          Answer a few quick questions to find government schemes designed for you.
        </p>
        {/* Component logic will go here */}
      </div>
    </div>
  );
};

export default SchemeEligibilityChecker;
