'use client';

import React, { useMemo, useState } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle, Info } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type EligibilityFormData = {
  category: string;
  age: string;
  income: string;
  education: string;
  domain: string;
};

const initialFormData: EligibilityFormData = {
  category: '',
  age: '',
  income: '',
  education: '',
  domain: '',
};

const steps = ['category', 'age', 'income', 'education', 'domain'] as const;

const SchemeEligibilityChecker = () => {
  const { t } = useTranslation();
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<EligibilityFormData>(initialFormData);
  const currentField = steps[step];
  const isLastStep = step === steps.length - 1;
  const answeredCount = Object.values(formData).filter(Boolean).length;

  const result = useMemo(() => {
    const age = Number(formData.age);
    const income = Number(formData.income);
    const hasBasicEligibility = age >= 18 && age <= 50 && income <= 600000 && Boolean(formData.category && formData.education && formData.domain);

    return hasBasicEligibility
      ? 'Based on your inputs, you may be eligible for entrepreneur support schemes. Please verify documents with the district office.'
      : 'Complete all fields to see an indicative eligibility result for available schemes.';
  }, [formData]);

  const updateField = (value: string) => {
    setFormData((previous) => ({ ...previous, [currentField]: value }));
  };

  return (
    <div className="container py-12">
      <div className="glass-panel p-8 max-w-3xl mx-auto">
        <div className="flex items-start gap-3 mb-6">
          <Info className="text-secondary flex-shrink-0 mt-1" size={22} />
          <div>
            <h2 className="text-2xl font-bold mb-2 text-primary">{t('eligibility.title', 'Scheme Eligibility Checker')}</h2>
            <p className="text-muted">
              Answer a few quick questions to find government schemes designed for you.
            </p>
          </div>
        </div>

        <div className="mb-6 rounded-full bg-slate-100 h-2 overflow-hidden">
          <div
            className="h-full bg-secondary transition-all"
            style={{ width: `${((step + 1) / steps.length) * 100}%` }}
          />
        </div>

        <div className="space-y-4">
          <label className="block text-sm font-semibold text-primary capitalize" htmlFor={currentField}>
            {currentField}
          </label>
          <input
            id={currentField}
            type={currentField === 'age' || currentField === 'income' ? 'number' : 'text'}
            value={formData[currentField]}
            onChange={(event) => updateField(event.target.value)}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-secondary"
            placeholder={`Enter your ${currentField}`}
          />
        </div>

        <div className="flex items-center justify-between gap-3 mt-8">
          <button
            type="button"
            onClick={() => setStep((value) => Math.max(0, value - 1))}
            disabled={step === 0}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 disabled:opacity-50"
          >
            <ArrowLeft size={16} /> Previous
          </button>
          <button
            type="button"
            onClick={() => setStep((value) => Math.min(steps.length - 1, value + 1))}
            disabled={isLastStep}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-white disabled:opacity-50"
          >
            Next <ArrowRight size={16} />
          </button>
        </div>

        <div className="mt-8 rounded-lg border border-slate-200 bg-white/70 p-4">
          <div className="flex items-center gap-2 font-semibold text-primary mb-2">
            <CheckCircle size={18} className={answeredCount === steps.length ? 'text-success' : 'text-muted'} />
            {answeredCount}/{steps.length} responses completed
          </div>
          <p className="text-sm text-muted">{result}</p>
        </div>
      </div>
    </div>
  );
};

export default SchemeEligibilityChecker;
