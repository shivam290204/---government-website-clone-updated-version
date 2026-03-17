import React, { useState, useRef, useEffect } from 'react';
import {
  Lightbulb, CheckCircle, GraduationCap, Globe, Receipt,
  Heart, IndianRupee, Briefcase, HelpCircle, Send, X,
  RotateCcw, Bot, User, AlertTriangle
} from 'lucide-react';

// ── Suggested questions with pre-written answers ──────────────────────────────
const SUGGESTIONS = [
  {
    id: 1,
    Icon: Lightbulb,
    color: '#f59e0b',
    bg: '#fef3c7',
    question: 'मुख्यमंत्री उद्यमी योजना क्या है? (सामान्य जानकारी)',
    answer:
      'मुख्यमंत्री उद्यमी योजना (MMUY) बिहार सरकार की एक प्रमुख योजना है जो राज्य के युवाओं को स्वरोजगार के लिए प्रोत्साहित करती है। इस योजना के अंतर्गत SC/ST/OBC/EWS श्रेणी के उद्यमियों को ₹10 लाख तक का ऋण 50% अनुदान और 50% ब्याज मुक्त ऋण के रूप में प्रदान किया जाता है। योजना का उद्देश्य राज्य में उद्यमिता को बढ़ावा देना और रोजगार सृजन करना है।',
  },
  {
    id: 2,
    Icon: CheckCircle,
    color: '#3b82f6',
    bg: '#dbeafe',
    question: 'MMUY के लिए पात्रता मानदंड क्या है?',
    answer:
      'MMUY के लिए पात्रता मानदंड:\n• आयु: 18 से 50 वर्ष\n• शिक्षा: 10वीं पास (न्यूनतम)\n• श्रेणी: SC, ST, OBC या EWS\n• बिहार का स्थायी निवासी होना आवश्यक है\n• पहले से किसी सरकारी योजना का लाभ नहीं लिया हो\n• प्रोपराइटरशिप, पार्टनरशिप या प्राइवेट लिमिटेड के रूप में पंजीकृत इकाई',
  },
  {
    id: 3,
    Icon: GraduationCap,
    color: '#8b5cf6',
    bg: '#ede9fe',
    question: 'Does MMUY offer training and mentorship opportunities?',
    answer:
      'Yes! Under MMUY, selected beneficiaries receive:\n• 2-week Entrepreneurship Development Program (EDP) training\n• Industry-specific skill development workshops\n• Mentorship from MSME experts and industry leaders\n• Regular follow-up support from district offices\n• Online learning resources through the Udyami portal\n\nTraining is mandatory before loan disbursement. It is conducted by empanelled training institutes across Bihar.',
  },
  {
    id: 4,
    Icon: Globe,
    color: '#10b981',
    bg: '#d1fae5',
    question: 'एमएमयूवाई (MMUY) में पहली किस्त कैसे प्राप्त करें?',
    answer:
      'पहली किस्त प्राप्त करने की प्रक्रिया:\n1. ऑनलाइन आवेदन करें: udyami.bihar.gov.in पर\n2. जिला उद्योग केंद्र में दस्तावेज़ सत्यापन\n3. EDP प्रशिक्षण पूर्ण करें\n4. जिला स्तरीय समिति द्वारा अनुमोदन\n5. बैंक खाते में ₹5 लाख (पहली किस्त) सीधे ट्रांसफर\n\nआवश्यक दस्तावेज़: आधार कार्ड, जाति प्रमाण पत्र, निवास प्रमाण, शैक्षिक प्रमाण, बैंक पासबुक, प्रोजेक्ट रिपोर्ट',
  },
  {
    id: 5,
    Icon: Receipt,
    color: '#ef4444',
    bg: '#fee2e2',
    question: 'एमएमयूवाई (MMUY) में ऋण राशि कब चुकानी होती है?',
    answer:
      'MMUY ऋण पुनर्भुगतान:\n• कुल ऋण: ₹10 लाख (₹5 लाख अनुदान + ₹5 लाख ब्याज मुक्त ऋण)\n• पुनर्भुगतान की शुरुआत: व्यवसाय शुरू होने के 2 वर्ष बाद\n• कुल अवधि: 7 वर्ष\n• मासिक किस्त: लगभग ₹6,000 प्रति माह\n• ब्याज दर: 0% (ब्याज मुक्त ऋण पर)\n• समय पर भुगतान पर कोई अतिरिक्त शुल्क नहीं',
  },
  {
    id: 6,
    Icon: Heart,
    color: '#ec4899',
    bg: '#fce7f3',
    question: 'BLUY kya hai aur isakee eligibility criteria kya hain?',
    answer:
      'Bihar Laghu Udyami Yojana (BLUY) is a scheme for economically weaker sections of Bihar.\n\nEligibility Criteria:\n• Age: 18-50 years\n• Annual family income: Below ₹6 lakh\n• Bihar permanent resident\n• Should not be a government employee\n• Category: All categories eligible (special focus on EWS)\n• One member per family can avail benefit\n\nLoan amount: Up to ₹2 lakh with 0% interest for approved projects.',
  },
  {
    id: 7,
    Icon: IndianRupee,
    color: '#059669',
    bg: '#d1fae5',
    question: 'Mujhe loan kitne interest par mil sakta hai (MMUY)?',
    answer:
      'MMUY loan interest details:\n• Total loan: ₹10 lakh\n• Grant (Anudan): ₹5 lakh — completely FREE, no repayment needed\n• Loan component: ₹5 lakh at 0% interest (interest-free)\n• Processing fee: NIL\n• Prepayment charges: NIL\n\nNote: The state government pays the interest on your behalf. You only repay the principal amount of ₹5 lakh over 7 years.',
  },
  {
    id: 8,
    Icon: IndianRupee,
    color: '#0ea5e9',
    bg: '#e0f2fe',
    question: 'Mujhe loan kitne interest par mil sakta hai (BLUY)?',
    answer:
      'BLUY loan interest details:\n• Total loan: Up to ₹2 lakh\n• Interest rate: 0% (completely interest-free)\n• No processing/documentation fee\n• Repayment period: 5 years\n• Grace period: 6 months after business start\n\nThe scheme aims to help economically weaker families start small businesses without any financial burden of interest payments.',
  },
  {
    id: 9,
    Icon: Briefcase,
    color: '#7c3aed',
    bg: '#ede9fe',
    question: 'बीएलयूवाई (BLUY) के अंतर्गत कौन-कौन से प्रोजेक्ट्स को समर्थन मिलता है?',
    answer:
      'BLUY के अंतर्गत निम्न प्रकार के व्यवसायों को समर्थन मिलता है:\n\nविनिर्माण: आटा चक्की, मसाला उत्पादन, अगरबत्ती, मोमबत्ती, पापड़-बड़ी\nसेवा क्षेत्र: ब्यूटी पार्लर, मोबाइल रिपेयर, इलेक्ट्रिशियन, प्लंबिंग\nखाद्य: टिफिन सेवा, बेकरी, कैटरिंग\nतकनीक: DTP, फोटोकॉपी, कंप्यूटर सेंटर\nहस्तशिल्प: बांस, मिट्टी के बर्तन, सिलाई-कढ़ाई\n\nकुल 62 अनुमोदित प्रोजेक्ट श्रेणियां उपलब्ध हैं।',
  },
  {
    id: 10,
    Icon: HelpCircle,
    color: '#f97316',
    bg: '#ffedd5',
    question: 'Report an issue / शिकायत दर्ज करें',
    answer:
      'शिकायत/समस्या दर्ज करने के लिए:\n\n📧 ईमेल: dir-ind-bih@nic.in\n📞 टोल फ्री: 18003456214\n🌐 पोर्टल: udyami.bihar.gov.in/grievance\n\nकार्यालय का पता:\nतकनीकी विकास निदेशालय, उद्योग विभाग,\nविकास भवन, द्वितीय तल, नया सचिवालय,\nनेहरू पथ, पटना, बिहार – 800015\n\nकार्य दिवस: सोम–शुक्र | 10:00 AM – 5:00 PM',
  },
];

// ── Main Component ─────────────────────────────────────────────────────────────
const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    document.title = 'HelloUdyami';
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
          : 'इस प्रश्न के लिए कोई सीधा उत्तर उपलब्ध नहीं है। कृपया नीचे दिए गए सुझावों में से चुनें या उद्योग विभाग से संपर्क करें: 18003456214',
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
      sendMessage();
    }
  };

  return (
    <div style={{ background: 'var(--bg-light, #f5f7fa)', minHeight: '100vh' }}>

      {/* ── Page heading ─────────────────────────────────────────────────── */}
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
            उद्यमी AI सहायक
          </h1>
        </div>
        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem', margin: 0 }}>
          मुख्यमंत्री उद्यमी योजना और बिहार लघु उद्यमी योजना के बारे में पूछें
        </p>
      </div>

      {/* ── Chat body ────────────────────────────────────────────────────── */}
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 16px 120px' }}>

        {/* Empty state — suggestions */}
        {messages.length === 0 && (
          <div style={{ paddingTop: 28 }}>
            <p style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: 14, textAlign: 'center' }}>
              अक्सर पूछे जाने वाले प्रश्न — किसी पर क्लिक करें
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
                <p style={{ color: '#94a3b8', fontSize: '0.78rem', marginBottom: 8 }}>और पूछें:</p>
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
                      {s.question.length > 40 ? s.question.slice(0, 38) + '…' : s.question}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* ── Disclaimer ───────────────────────────────────────────────────── */}
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

      {/* ── Fixed input bar ──────────────────────────────────────────────── */}
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
            <strong>Disclaimer:</strong> यह उत्तर कृत्रिम बुद्धिमत्ता (AI) द्वारा जनरेट किया गया है। सटीक जानकारी के लिए{' '}
            <a href="https://udyami.bihar.gov.in" target="_blank" rel="noopener noreferrer" style={{ color: '#ea580c' }}>
              udyami.bihar.gov.in
            </a>{' '}
            देखें या टोल फ्री <strong>18003456214</strong> पर कॉल करें।
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
            placeholder="यहाँ अपना प्रश्न लिखें..."
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
            onClick={() => sendMessage()}
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
            <span className="hidden sm:inline">भेजें</span>
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
