'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  Lightbulb, CheckCircle, GraduationCap, Globe, Receipt,
  Heart, IndianRupee, Briefcase, HelpCircle, Send, X,
  RotateCcw, Bot, User, AlertTriangle
} from 'lucide-react';

// â”€â”€ Suggested questions with pre-written answers â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const SUGGESTIONS = [
  {
    id: 1,
    Icon: Lightbulb,
    color: '#f59e0b',
    bg: '#fef3c7',
    question: 'Startup Assistance Platform kya hai? (Basic overview)',
    answer:
      'Startup Assistance Platform is a modern business support program designed to help early-stage founders launch and scale. It offers onboarding guidance, mentorship, funding assistance pathways, and expert support for building sustainable ventures.',
  },
  {
    id: 2,
    Icon: CheckCircle,
    color: '#3b82f6',
    bg: '#dbeafe',
    question: 'MMUY à¤•à¥‡ à¤²à¤¿à¤ à¤ªà¤¾à¤¤à¥à¤°à¤¤à¤¾ à¤®à¤¾à¤¨à¤¦à¤‚à¤¡ à¤•à¥à¤¯à¤¾ à¤¹à¥ˆ?',
    answer:
      'MMUY à¤•à¥‡ à¤²à¤¿à¤ à¤ªà¤¾à¤¤à¥à¤°à¤¤à¤¾ à¤®à¤¾à¤¨à¤¦à¤‚à¤¡:\nâ€¢ à¤†à¤¯à¥: 18 à¤¸à¥‡ 50 à¤µà¤°à¥à¤·\nâ€¢ à¤¶à¤¿à¤•à¥à¤·à¤¾: 10à¤µà¥€à¤‚ à¤ªà¤¾à¤¸ (à¤¨à¥à¤¯à¥‚à¤¨à¤¤à¤®)\nâ€¢ à¤¶à¥à¤°à¥‡à¤£à¥€: SC, ST, OBC à¤¯à¤¾ EWS\nâ€¢ à¤¬à¤¿à¤¹à¤¾à¤° à¤•à¤¾ à¤¸à¥à¤¥à¤¾à¤¯à¥€ à¤¨à¤¿à¤µà¤¾à¤¸à¥€ à¤¹à¥‹à¤¨à¤¾ à¤†à¤µà¤¶à¥à¤¯à¤• à¤¹à¥ˆ\nâ€¢ à¤ªà¤¹à¤²à¥‡ à¤¸à¥‡ à¤•à¤¿à¤¸à¥€ à¤¸à¤°à¤•à¤¾à¤°à¥€ à¤¯à¥‹à¤œà¤¨à¤¾ à¤•à¤¾ à¤²à¤¾à¤­ à¤¨à¤¹à¥€à¤‚ à¤²à¤¿à¤¯à¤¾ à¤¹à¥‹\nâ€¢ à¤ªà¥à¤°à¥‹à¤ªà¤°à¤¾à¤‡à¤Ÿà¤°à¤¶à¤¿à¤ª, à¤ªà¤¾à¤°à¥à¤Ÿà¤¨à¤°à¤¶à¤¿à¤ª à¤¯à¤¾ à¤ªà¥à¤°à¤¾à¤‡à¤µà¥‡à¤Ÿ à¤²à¤¿à¤®à¤¿à¤Ÿà¥‡à¤¡ à¤•à¥‡ à¤°à¥‚à¤ª à¤®à¥‡à¤‚ à¤ªà¤‚à¤œà¥€à¤•à¥ƒà¤¤ à¤‡à¤•à¤¾à¤ˆ',
  },
  {
    id: 3,
    Icon: GraduationCap,
    color: '#8b5cf6',
    bg: '#ede9fe',
    question: 'Does MMUY offer training and mentorship opportunities?',
    answer:
      'Yes! Under MMUY, selected beneficiaries receive:\nâ€¢ 2-week Entrepreneurship Development Program (EDP) training\nâ€¢ Industry-specific skill development workshops\nâ€¢ Mentorship from MSME experts and industry leaders\nâ€¢ Regular follow-up support from district offices\nâ€¢ Online learning resources through the Udyami portal\n\nTraining is mandatory before loan disbursement. It is conducted by empanelled training institutes across Bihar.',
  },
  {
    id: 4,
    Icon: Globe,
    color: '#10b981',
    bg: '#d1fae5',
    question: 'à¤à¤®à¤à¤®à¤¯à¥‚à¤µà¤¾à¤ˆ (MMUY) à¤®à¥‡à¤‚ à¤ªà¤¹à¤²à¥€ à¤•à¤¿à¤¸à¥à¤¤ à¤•à¥ˆà¤¸à¥‡ à¤ªà¥à¤°à¤¾à¤ªà¥à¤¤ à¤•à¤°à¥‡à¤‚?',
    answer:
      'à¤ªà¤¹à¤²à¥€ à¤•à¤¿à¤¸à¥à¤¤ à¤ªà¥à¤°à¤¾à¤ªà¥à¤¤ à¤•à¤°à¤¨à¥‡ à¤•à¥€ à¤ªà¥à¤°à¤•à¥à¤°à¤¿à¤¯à¤¾:\n1. à¤‘à¤¨à¤²à¤¾à¤‡à¤¨ à¤†à¤µà¥‡à¤¦à¤¨ à¤•à¤°à¥‡à¤‚: udyami.bihar.gov.in à¤ªà¤°\n2. à¤œà¤¿à¤²à¤¾ à¤‰à¤¦à¥à¤¯à¥‹à¤— à¤•à¥‡à¤‚à¤¦à¥à¤° à¤®à¥‡à¤‚ à¤¦à¤¸à¥à¤¤à¤¾à¤µà¥‡à¤œà¤¼ à¤¸à¤¤à¥à¤¯à¤¾à¤ªà¤¨\n3. EDP à¤ªà¥à¤°à¤¶à¤¿à¤•à¥à¤·à¤£ à¤ªà¥‚à¤°à¥à¤£ à¤•à¤°à¥‡à¤‚\n4. à¤œà¤¿à¤²à¤¾ à¤¸à¥à¤¤à¤°à¥€à¤¯ à¤¸à¤®à¤¿à¤¤à¤¿ à¤¦à¥à¤µà¤¾à¤°à¤¾ à¤…à¤¨à¥à¤®à¥‹à¤¦à¤¨\n5. à¤¬à¥ˆà¤‚à¤• à¤–à¤¾à¤¤à¥‡ à¤®à¥‡à¤‚ â‚¹5 à¤²à¤¾à¤– (à¤ªà¤¹à¤²à¥€ à¤•à¤¿à¤¸à¥à¤¤) à¤¸à¥€à¤§à¥‡ à¤Ÿà¥à¤°à¤¾à¤‚à¤¸à¤«à¤°\n\nà¤†à¤µà¤¶à¥à¤¯à¤• à¤¦à¤¸à¥à¤¤à¤¾à¤µà¥‡à¤œà¤¼: à¤†à¤§à¤¾à¤° à¤•à¤¾à¤°à¥à¤¡, à¤œà¤¾à¤¤à¤¿ à¤ªà¥à¤°à¤®à¤¾à¤£ à¤ªà¤¤à¥à¤°, à¤¨à¤¿à¤µà¤¾à¤¸ à¤ªà¥à¤°à¤®à¤¾à¤£, à¤¶à¥ˆà¤•à¥à¤·à¤¿à¤• à¤ªà¥à¤°à¤®à¤¾à¤£, à¤¬à¥ˆà¤‚à¤• à¤ªà¤¾à¤¸à¤¬à¥à¤•, à¤ªà¥à¤°à¥‹à¤œà¥‡à¤•à¥à¤Ÿ à¤°à¤¿à¤ªà¥‹à¤°à¥à¤Ÿ',
  },
  {
    id: 5,
    Icon: Receipt,
    color: '#ef4444',
    bg: '#fee2e2',
    question: 'à¤à¤®à¤à¤®à¤¯à¥‚à¤µà¤¾à¤ˆ (MMUY) à¤®à¥‡à¤‚ à¤‹à¤£ à¤°à¤¾à¤¶à¤¿ à¤•à¤¬ à¤šà¥à¤•à¤¾à¤¨à¥€ à¤¹à¥‹à¤¤à¥€ à¤¹à¥ˆ?',
    answer:
      'MMUY à¤‹à¤£ à¤ªà¥à¤¨à¤°à¥à¤­à¥à¤—à¤¤à¤¾à¤¨:\nâ€¢ à¤•à¥à¤² à¤‹à¤£: â‚¹10 à¤²à¤¾à¤– (â‚¹5 à¤²à¤¾à¤– à¤…à¤¨à¥à¤¦à¤¾à¤¨ + â‚¹5 à¤²à¤¾à¤– à¤¬à¥à¤¯à¤¾à¤œ à¤®à¥à¤•à¥à¤¤ à¤‹à¤£)\nâ€¢ à¤ªà¥à¤¨à¤°à¥à¤­à¥à¤—à¤¤à¤¾à¤¨ à¤•à¥€ à¤¶à¥à¤°à¥à¤†à¤¤: à¤µà¥à¤¯à¤µà¤¸à¤¾à¤¯ à¤¶à¥à¤°à¥‚ à¤¹à¥‹à¤¨à¥‡ à¤•à¥‡ 2 à¤µà¤°à¥à¤· à¤¬à¤¾à¤¦\nâ€¢ à¤•à¥à¤² à¤…à¤µà¤§à¤¿: 7 à¤µà¤°à¥à¤·\nâ€¢ à¤®à¤¾à¤¸à¤¿à¤• à¤•à¤¿à¤¸à¥à¤¤: à¤²à¤—à¤­à¤— â‚¹6,000 à¤ªà¥à¤°à¤¤à¤¿ à¤®à¤¾à¤¹\nâ€¢ à¤¬à¥à¤¯à¤¾à¤œ à¤¦à¤°: 0% (à¤¬à¥à¤¯à¤¾à¤œ à¤®à¥à¤•à¥à¤¤ à¤‹à¤£ à¤ªà¤°)\nâ€¢ à¤¸à¤®à¤¯ à¤ªà¤° à¤­à¥à¤—à¤¤à¤¾à¤¨ à¤ªà¤° à¤•à¥‹à¤ˆ à¤…à¤¤à¤¿à¤°à¤¿à¤•à¥à¤¤ à¤¶à¥à¤²à¥à¤• à¤¨à¤¹à¥€à¤‚',
  },
  {
    id: 6,
    Icon: Heart,
    color: '#ec4899',
    bg: '#fce7f3',
    question: 'BLUY kya hai aur isakee eligibility criteria kya hain?',
    answer:
      'Bihar Laghu Udyami Yojana (BLUY) is a scheme for economically weaker sections of Bihar.\n\nEligibility Criteria:\nâ€¢ Age: 18-50 years\nâ€¢ Annual family income: Below â‚¹6 lakh\nâ€¢ Bihar permanent resident\nâ€¢ Should not be a government employee\nâ€¢ Category: All categories eligible (special focus on EWS)\nâ€¢ One member per family can avail benefit\n\nLoan amount: Up to â‚¹2 lakh with 0% interest for approved projects.',
  },
  {
    id: 7,
    Icon: IndianRupee,
    color: '#059669',
    bg: '#d1fae5',
    question: 'Mujhe loan kitne interest par mil sakta hai (MMUY)?',
    answer:
      'MMUY loan interest details:\nâ€¢ Total loan: â‚¹10 lakh\nâ€¢ Grant (Anudan): â‚¹5 lakh â€” completely FREE, no repayment needed\nâ€¢ Loan component: â‚¹5 lakh at 0% interest (interest-free)\nâ€¢ Processing fee: NIL\nâ€¢ Prepayment charges: NIL\n\nNote: The state government pays the interest on your behalf. You only repay the principal amount of â‚¹5 lakh over 7 years.',
  },
  {
    id: 8,
    Icon: IndianRupee,
    color: '#0ea5e9',
    bg: '#e0f2fe',
    question: 'Mujhe loan kitne interest par mil sakta hai (BLUY)?',
    answer:
      'BLUY loan interest details:\nâ€¢ Total loan: Up to â‚¹2 lakh\nâ€¢ Interest rate: 0% (completely interest-free)\nâ€¢ No processing/documentation fee\nâ€¢ Repayment period: 5 years\nâ€¢ Grace period: 6 months after business start\n\nThe scheme aims to help economically weaker families start small businesses without any financial burden of interest payments.',
  },
  {
    id: 9,
    Icon: Briefcase,
    color: '#7c3aed',
    bg: '#ede9fe',
    question: 'à¤¬à¥€à¤à¤²à¤¯à¥‚à¤µà¤¾à¤ˆ (BLUY) à¤•à¥‡ à¤…à¤‚à¤¤à¤°à¥à¤—à¤¤ à¤•à¥Œà¤¨-à¤•à¥Œà¤¨ à¤¸à¥‡ à¤ªà¥à¤°à¥‹à¤œà¥‡à¤•à¥à¤Ÿà¥à¤¸ à¤•à¥‹ à¤¸à¤®à¤°à¥à¤¥à¤¨ à¤®à¤¿à¤²à¤¤à¤¾ à¤¹à¥ˆ?',
    answer:
      'BLUY à¤•à¥‡ à¤…à¤‚à¤¤à¤°à¥à¤—à¤¤ à¤¨à¤¿à¤®à¥à¤¨ à¤ªà¥à¤°à¤•à¤¾à¤° à¤•à¥‡ à¤µà¥à¤¯à¤µà¤¸à¤¾à¤¯à¥‹à¤‚ à¤•à¥‹ à¤¸à¤®à¤°à¥à¤¥à¤¨ à¤®à¤¿à¤²à¤¤à¤¾ à¤¹à¥ˆ:\n\nà¤µà¤¿à¤¨à¤¿à¤°à¥à¤®à¤¾à¤£: à¤†à¤Ÿà¤¾ à¤šà¤•à¥à¤•à¥€, à¤®à¤¸à¤¾à¤²à¤¾ à¤‰à¤¤à¥à¤ªà¤¾à¤¦à¤¨, à¤…à¤—à¤°à¤¬à¤¤à¥à¤¤à¥€, à¤®à¥‹à¤®à¤¬à¤¤à¥à¤¤à¥€, à¤ªà¤¾à¤ªà¤¡à¤¼-à¤¬à¤¡à¤¼à¥€\nà¤¸à¥‡à¤µà¤¾ à¤•à¥à¤·à¥‡à¤¤à¥à¤°: à¤¬à¥à¤¯à¥‚à¤Ÿà¥€ à¤ªà¤¾à¤°à¥à¤²à¤°, à¤®à¥‹à¤¬à¤¾à¤‡à¤² à¤°à¤¿à¤ªà¥‡à¤¯à¤°, à¤‡à¤²à¥‡à¤•à¥à¤Ÿà¥à¤°à¤¿à¤¶à¤¿à¤¯à¤¨, à¤ªà¥à¤²à¤‚à¤¬à¤¿à¤‚à¤—\nà¤–à¤¾à¤¦à¥à¤¯: à¤Ÿà¤¿à¤«à¤¿à¤¨ à¤¸à¥‡à¤µà¤¾, à¤¬à¥‡à¤•à¤°à¥€, à¤•à¥ˆà¤Ÿà¤°à¤¿à¤‚à¤—\nà¤¤à¤•à¤¨à¥€à¤•: DTP, à¤«à¥‹à¤Ÿà¥‹à¤•à¥‰à¤ªà¥€, à¤•à¤‚à¤ªà¥à¤¯à¥‚à¤Ÿà¤° à¤¸à¥‡à¤‚à¤Ÿà¤°\nà¤¹à¤¸à¥à¤¤à¤¶à¤¿à¤²à¥à¤ª: à¤¬à¤¾à¤‚à¤¸, à¤®à¤¿à¤Ÿà¥à¤Ÿà¥€ à¤•à¥‡ à¤¬à¤°à¥à¤¤à¤¨, à¤¸à¤¿à¤²à¤¾à¤ˆ-à¤•à¤¢à¤¼à¤¾à¤ˆ\n\nà¤•à¥à¤² 62 à¤…à¤¨à¥à¤®à¥‹à¤¦à¤¿à¤¤ à¤ªà¥à¤°à¥‹à¤œà¥‡à¤•à¥à¤Ÿ à¤¶à¥à¤°à¥‡à¤£à¤¿à¤¯à¤¾à¤‚ à¤‰à¤ªà¤²à¤¬à¥à¤§ à¤¹à¥ˆà¤‚à¥¤',
  },
  {
    id: 10,
    Icon: HelpCircle,
    color: '#f97316',
    bg: '#ffedd5',
    question: 'Report an issue / Contact support',
    answer:
      'Need help? Reach our support team:\n\nðŸ“§ Email: support@businessportal.in\nðŸ“ž Helpline: 18003456214\nðŸŒ Support Portal: businessportal.in/support\n\nOffice: Growth Hub, 2nd Floor, Startup Lane, Patna\nWorking Hours: Mon-Fri | 10:00 AM - 5:00 PM',
  },
];

// â”€â”€ Main Component â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<any>(null);
  const inputRef = useRef(null);

  useEffect(() => {
    document.title = 'Business Support Portal | AI Assistant';
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const sendMessage = (text) => {
    const trimmed = (text || input).trim();
    if (!trimmed) return;

    const userMsg = { id: Date.now(), role: 'user', text: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Find matching suggestion or give generic reply
    const match = SUGGESTIONS.find((s) =>
      s.question.toLowerCase() === trimmed.toLowerCase()
    );

    setTimeout(() => {
      const botMsg = {
        id: Date.now() + 1,
        role: 'bot',
        text: match
          ? match.answer
          : 'I do not have a direct answer for this yet. Please choose a suggested question or contact support at 18003456214.',
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 800);
  };

  const handleReset = () => {
    setMessages([]);
    setInput('');
    inputRef.current?.focus();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <div style={{ background: 'var(--bg-light, #f5f7fa)', minHeight: '100vh' }}>

      {/* â”€â”€ Page heading â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <div
        style={{
          background: 'linear-gradient(135deg, #0a2540 0%, #1a3a6b 100%)',
          padding: '28px 24px 24px',
          textAlign: 'center',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '6px' }}>
          <div
            style={{
              background: 'rgba(255,255,255,0.15)',
              borderRadius: '50%',
              width: 44,
              height: 44,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Bot size={24} color="#f5a623" />
          </div>
          <h1 style={{ color: '#fff', fontSize: '1.6rem', fontWeight: 700, margin: 0 }}>
            Startup AI Assistant
          </h1>
        </div>
        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem', margin: 0 }}>
          Ask about funding, eligibility, onboarding, and business growth support.
        </p>
      </div>

      {/* â”€â”€ Chat body â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 16px 120px' }}>

        {/* Empty state â€” suggestions */}
        {messages.length === 0 && (
          <div style={{ paddingTop: 28 }}>
            <p style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: 14, textAlign: 'center' }}>
              à¤…à¤•à¥à¤¸à¤° à¤ªà¥‚à¤›à¥‡ à¤œà¤¾à¤¨à¥‡ à¤µà¤¾à¤²à¥‡ à¤ªà¥à¤°à¤¶à¥à¤¨ â€” à¤•à¤¿à¤¸à¥€ à¤ªà¤° à¤•à¥à¤²à¤¿à¤• à¤•à¤°à¥‡à¤‚
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {SUGGESTIONS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => sendMessage(s.question)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 14,
                    background: '#fff',
                    border: '1px solid #e2e8f0',
                    borderRadius: 12,
                    padding: '12px 16px',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'box-shadow 0.15s, transform 0.1s',
                    fontSize: '0.9rem',
                    color: '#1e293b',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(10,37,64,0.12)';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'none';
                  }}
                >
                  <span
                    style={{
                      background: s.bg,
                      borderRadius: '50%',
                      width: 36,
                      height: 36,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <s.Icon size={18} color={s.color} />
                  </span>
                  <span>{s.question}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Messages */}
        {messages.length > 0 && (
          <div style={{ paddingTop: 20, display: 'flex', flexDirection: 'column', gap: 14 }}>
            {messages.map((msg) => (
              <div
                key={msg.id}
                style={{
                  display: 'flex',
                  justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
                  gap: 10,
                  alignItems: 'flex-start',
                }}
              >
                {msg.role === 'bot' && (
                  <div
                    style={{
                      background: '#0a2540',
                      borderRadius: '50%',
                      width: 34,
                      height: 34,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  >
                    <Bot size={18} color="#f5a623" />
                  </div>
                )}
                <div
                  style={{
                    maxWidth: '78%',
                    background: msg.role === 'user' ? '#0a2540' : '#fff',
                    color: msg.role === 'user' ? '#fff' : '#1e293b',
                    borderRadius: msg.role === 'user' ? '18px 4px 18px 18px' : '4px 18px 18px 18px',
                    padding: '12px 16px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    fontSize: '0.92rem',
                    lineHeight: 1.6,
                    whiteSpace: 'pre-line',
                  }}
                >
                  {msg.text}
                </div>
                {msg.role === 'user' && (
                  <div
                    style={{
                      background: '#f5a623',
                      borderRadius: '50%',
                      width: 34,
                      height: 34,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  >
                    <User size={18} color="#fff" />
                  </div>
                )}
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div
                  style={{
                    background: '#0a2540',
                    borderRadius: '50%',
                    width: 34,
                    height: 34,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Bot size={18} color="#f5a623" />
                </div>
                <div
                  style={{
                    background: '#fff',
                    borderRadius: '4px 18px 18px 18px',
                    padding: '12px 18px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    display: 'flex',
                    gap: 5,
                    alignItems: 'center',
                  }}
                >
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      style={{
                        width: 7,
                        height: 7,
                        borderRadius: '50%',
                        background: '#94a3b8',
                        display: 'block',
                        animation: `bounce 1.2s ${i * 0.2}s infinite ease-in-out`,
                      }}
                    />
                  ))}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />

            {/* Suggestion chips after chat starts */}
            {!isTyping && (
              <div style={{ marginTop: 8 }}>
                <p style={{ color: '#94a3b8', fontSize: '0.78rem', marginBottom: 8 }}>à¤”à¤° à¤ªà¥‚à¤›à¥‡à¤‚:</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {SUGGESTIONS.slice(0, 5).map((s) => (
                    <button
                      key={s.id}
                      onClick={() => sendMessage(s.question)}
                      style={{
                        background: '#fff',
                        border: '1px solid #e2e8f0',
                        borderRadius: 20,
                        padding: '6px 14px',
                        fontSize: '0.78rem',
                        color: '#0a2540',
                        cursor: 'pointer',
                        transition: 'background 0.15s',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = '#f1f5f9')}
                      onMouseLeave={(e) => (e.currentTarget.style.background = '#fff')}
                    >
                      {s.question.length > 40 ? s.question.slice(0, 38) + 'â€¦' : s.question}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* â”€â”€ Disclaimer â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <div
        style={{
          maxWidth: 760,
          margin: '0 auto 16px',
          padding: '0 16px',
          position: 'fixed',
          bottom: 76,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          pointerEvents: 'none',
        }}
      />

      {/* â”€â”€ Fixed input bar â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          background: '#fff',
          borderTop: '1px solid #e2e8f0',
          padding: '12px 16px',
          zIndex: 50,
        }}
      >
        {/* Disclaimer strip */}
        <div
          style={{
            maxWidth: 760,
            margin: '0 auto 10px',
            background: '#fff7ed',
            border: '1px solid #fed7aa',
            borderRadius: 8,
            padding: '8px 14px',
            display: 'flex',
            gap: 8,
            alignItems: 'flex-start',
          }}
        >
          <AlertTriangle size={14} color="#f97316" style={{ flexShrink: 0, marginTop: 2 }} />
          <p style={{ fontSize: '0.72rem', color: '#7c2d12', margin: 0, lineHeight: 1.5 }}>
            <strong>Disclaimer:</strong> à¤¯à¤¹ à¤‰à¤¤à¥à¤¤à¤° à¤•à¥ƒà¤¤à¥à¤°à¤¿à¤® à¤¬à¥à¤¦à¥à¤§à¤¿à¤®à¤¤à¥à¤¤à¤¾ (AI) à¤¦à¥à¤µà¤¾à¤°à¤¾ à¤œà¤¨à¤°à¥‡à¤Ÿ à¤•à¤¿à¤¯à¤¾ à¤—à¤¯à¤¾ à¤¹à¥ˆà¥¤ à¤¸à¤Ÿà¥€à¤• à¤œà¤¾à¤¨à¤•à¤¾à¤°à¥€ à¤•à¥‡ à¤²à¤¿à¤{' '}
            <a href="https://udyami.bihar.gov.in" target="_blank" rel="noopener noreferrer" style={{ color: '#ea580c' }}>
              udyami.bihar.gov.in
            </a>{' '}
            à¤¦à¥‡à¤–à¥‡à¤‚ à¤¯à¤¾ à¤Ÿà¥‹à¤² à¤«à¥à¤°à¥€ <strong>18003456214</strong> à¤ªà¤° à¤•à¥‰à¤² à¤•à¤°à¥‡à¤‚à¥¤
          </p>
        </div>

        <div style={{ maxWidth: 760, margin: '0 auto', display: 'flex', gap: 8 }}>
          <button
            onClick={handleReset}
            title="Reset chat"
            style={{
              background: '#f1f5f9',
              border: '1px solid #e2e8f0',
              borderRadius: 10,
              padding: '10px 12px',
              cursor: 'pointer',
              color: '#64748b',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <RotateCcw size={16} />
          </button>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="à¤¯à¤¹à¤¾à¤ à¤…à¤ªà¤¨à¤¾ à¤ªà¥à¤°à¤¶à¥à¤¨ à¤²à¤¿à¤–à¥‡à¤‚..."
            style={{
              flex: 1,
              border: '1px solid #e2e8f0',
              borderRadius: 10,
              padding: '10px 16px',
              fontSize: '0.92rem',
              outline: 'none',
              fontFamily: 'inherit',
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = '#0a2540')}
            onBlur={(e) => (e.currentTarget.style.borderColor = '#e2e8f0')}
          />
          {input && (
            <button
              onClick={() => setInput('')}
              style={{
                background: '#f1f5f9',
                border: '1px solid #e2e8f0',
                borderRadius: 10,
                padding: '10px 12px',
                cursor: 'pointer',
                color: '#94a3b8',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <X size={16} />
            </button>
          )}
          <button
            onClick={() => sendMessage(input)}
            disabled={!input.trim()}
            style={{
              background: input.trim() ? '#0a2540' : '#e2e8f0',
              border: 'none',
              borderRadius: 10,
              padding: '10px 18px',
              cursor: input.trim() ? 'pointer' : 'default',
              color: input.trim() ? '#fff' : '#94a3b8',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              fontWeight: 600,
              fontSize: '0.88rem',
              transition: 'background 0.15s',
            }}
          >
            <Send size={16} />
            <span className="hidden sm:inline">à¤­à¥‡à¤œà¥‡à¤‚</span>
          </button>
        </div>
      </div>

      {/* Bounce animation */}
      <style>{`
        @keyframes bounce {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.5; }
          40% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Chat;
