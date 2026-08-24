import React, { useState } from 'react';
import { Sparkles, Send, X, Bot, User, Check, Code2, CornerDownLeft, RefreshCw } from 'lucide-react';
import { candidateData } from '../data/candidateData';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
  sources?: string[];
}

interface AiDocsAssistantProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AiDocsAssistant: React.FC<AiDocsAssistantProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'm-1',
      sender: 'ai',
      text: `Hello! I am the **Adyen Docs AI Candidate Assistant**. Ask me anything about Cristian Ocampo-Padilla's experience at Motorola Mobility, UIUC Computer Science Master's degree (4.0 GPA), React/TypeScript skills, or fit for the Chicago Docs Excellence Team!`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      sources: ['Cristian Ocampo-Padilla Resume', 'UIUC Transcript', 'Adyen Job Profile']
    }
  ]);

  const presetQuestions = [
    "Tell me about Cristian's QA experience at Motorola Mobility.",
    "What degrees did Cristian earn at UIUC?",
    "What full-stack & API projects has Cristian built?",
    "How does Cristian align with the Adyen Formula?"
  ];

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim() || loading) return;

    const userMsg: Message = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setLoading(true);

    setTimeout(() => {
      let replyText = "";
      let sources = ["Cristian Ocampo-Padilla Database v2.4", "Adyen Formula Matrix"];

      const qLower = query.toLowerCase();

      if (qLower.includes("motorola") || qLower.includes("qa") || qLower.includes("testing")) {
        replyText = `**QA Engineer at Motorola Mobility (Apr 2026 - Present):**\nCristian leads quality assurance and system reliability testing in Chicago. Key responsibilities include:\n- Designing, executing, and automating test scenarios across frontend and backend API components.\n- Performing log analysis and root-cause debugging to resolve software defects.\n- Collaborating across Agile engineering teams to guarantee developer and end-user reliability.`;
        sources.push("experience[0]", "Motorola Mobility");
      } else if (qLower.includes("uiuc") || qLower.includes("degree") || qLower.includes("education") || qLower.includes("mcs")) {
        replyText = `**UIUC Education (2 Degrees):**\n1. **Professional Master of Computer Science (MCS)**: Graduated Aug 2026, **GPA 4.00 / 4.00**. Coursework: Cloud Computing, Machine Learning for SWE, Computer Security, IoT Systems.\n2. **BS in Computer Science**: May 2024, **GPA 3.67 / 4.00**. Coursework: Systems Programming, Software Engineering, Databases, Data Structures & Algorithms.`;
        sources.push("education[0]", "education[1]", "UIUC Academic Record");
      } else if (qLower.includes("project") || qLower.includes("react") || qLower.includes("fastapi")) {
        replyText = `**Featured Projects:**\n1. **Inventory & Reservation Management Web App**: Full-stack React + FastAPI + MySQL + GCP app with comprehensive API endpoint test validation.\n2. **Enhanced GPS Grandmaster (Raspberry Pi 3)**: Low-level system timing optimization with Ansible & Linux kernel interrupt steering achieving ~100ns precision.\n3. **Adyen Developer Docs Portal**: This interactive React 18 + TypeScript platform!`;
        sources.push("projects.proj-1", "projects.proj-2");
      } else if (qLower.includes("adyen") || qLower.includes("formula") || qLower.includes("fit")) {
        replyText = `**100% Adyen Formula Fit:**\nCristian combines rigorous QA testing mindset (making good choices for long term) with fast execution (*launch fast & iterate*). Fluent in English & Spanish, based in Chicago, with zero sponsorship required!`;
        sources.push("adyenFormula", "Job Profile Compliance");
      } else {
        replyText = `Cristian Ocampo-Padilla holds a Master of Computer Science (UIUC, 4.0 GPA) and works as a QA Engineer at Motorola Mobility. Possesses strong React, TypeScript, Python, FastAPI, and API testing expertise—ideal fit for Adyen's Chicago Docs Excellence Engineering Team!`;
      }

      const aiMsg: Message = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        sources
      };

      setMessages(prev => [...prev, aiMsg]);
      setLoading(false);
    }, 550);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full sm:w-96 border-l shadow-2xl flex flex-col transition-all animate-fade-in"
      style={{
        backgroundColor: 'var(--bg-card)',
        borderColor: 'var(--border-color)'
      }}
    >
      {/* Header */}
      <div className="p-4 border-b flex items-center justify-between"
        style={{
          backgroundColor: 'var(--bg-sidebar)',
          borderColor: 'var(--border-color)'
        }}
      >
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-[#00A254] text-white">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-bold text-sm font-mono" style={{ color: 'var(--text-heading)' }}>
              Adyen AI Docs Assistant
            </h3>
            <p className="text-[11px]" style={{ color: 'var(--text-muted)' }}>
              Cristian Ocampo-Padilla Profile AI
            </p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-1 rounded hover:opacity-80"
          style={{ color: 'var(--text-muted)' }}
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            {msg.sender === 'ai' && (
              <div className="w-6 h-6 rounded-full bg-[#00A254] text-white flex items-center justify-center shrink-0 text-[10px] font-bold">
                AI
              </div>
            )}
            <div className={`max-w-[85%] rounded-lg p-3 space-y-2 ${
              msg.sender === 'user' 
                ? 'bg-[#00A254] text-white' 
                : 'border bg-surface'
            }`}
              style={{
                backgroundColor: msg.sender === 'user' ? '#00A254' : 'var(--bg-surface)',
                borderColor: msg.sender === 'user' ? 'transparent' : 'var(--border-color)',
                color: msg.sender === 'user' ? '#FFFFFF' : 'var(--text-main)'
              }}
            >
              <p className="whitespace-pre-line leading-relaxed">
                {msg.text}
              </p>
              
              {msg.sources && (
                <div className="pt-2 border-t text-[10px] flex flex-wrap items-center gap-1.5 opacity-80" style={{ borderColor: 'var(--border-subtle)' }}>
                  <span className="font-mono font-bold">Sources:</span>
                  {msg.sources.map((src, i) => (
                    <span key={i} className="px-1.5 py-0.5 rounded bg-black/10 dark:bg-white/10 font-mono">
                      {src}
                    </span>
                  ))}
                </div>
              )}
              <div className="text-[9px] opacity-60 text-right font-mono">
                {msg.timestamp}
              </div>
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex items-center gap-2 text-xs text-[#00A254] font-mono animate-pulse">
            <RefreshCw className="w-3.5 h-3.5 animate-spin" />
            <span>Analyzing Cristian's resume & background...</span>
          </div>
        )}
      </div>

      {/* Preset Questions Chips */}
      <div className="p-3 border-t space-y-1.5" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-sidebar)' }}>
        <p className="text-[10px] font-mono font-bold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
          Suggested Inquiries
        </p>
        <div className="flex flex-col gap-1">
          {presetQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(q)}
              className="text-left text-[11px] px-2.5 py-1.5 rounded border transition-colors hover:border-[#00A254] hover:bg-[#00A254]/5 truncate"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-color)',
                color: 'var(--text-main)'
              }}
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="p-3 border-t flex items-center gap-2" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-card)' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask AI about Cristian..."
          className="flex-1 px-3 py-2 text-xs rounded-lg border outline-none focus:ring-1 focus:ring-[#00A254]"
          style={{
            backgroundColor: 'var(--bg-tag)',
            borderColor: 'var(--border-color)',
            color: 'var(--text-main)'
          }}
        />
        <button
          onClick={() => handleSend()}
          disabled={!input.trim() || loading}
          className="btn-primary px-3 py-2 text-xs"
        >
          <Send className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
