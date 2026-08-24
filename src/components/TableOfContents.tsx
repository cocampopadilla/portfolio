import React, { useState, useEffect } from 'react';
import { AlignLeft, ChevronRight, Sparkles } from 'lucide-react';

interface TocItem {
  id: string;
  title: string;
  level: number;
}

const tocData: TocItem[] = [
  { id: 'overview', title: 'Candidate Overview', level: 1 },
  { id: 'overview-specs', title: 'Technical Competencies', level: 2 },
  { id: 'education', title: 'UIUC CS Degrees', level: 1 },
  { id: 'experience', title: 'Experience & Motorola QA', level: 1 },
  { id: 'projects', title: 'Featured Projects', level: 1 },
  { id: 'ai-innovation', title: 'QA & Testing Rigor', level: 1 },
  { id: 'adyen-formula', title: 'Adyen Formula Alignment', level: 1 },
  { id: 'api-console', title: 'Interactive API Explorer', level: 1 }
];

export const TableOfContents: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('overview');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      for (let i = tocData.length - 1; i >= 0; i--) {
        const el = document.getElementById(tocData[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveId(tocData[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (id: string) => {
    setActiveId(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hidden xl:block w-64 shrink-0 sticky top-16 h-[calc(100vh-4rem)] p-6 overflow-y-auto border-l"
      style={{
        backgroundColor: 'var(--bg-main)',
        borderColor: 'var(--border-color)'
      }}
    >
      <div className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-wider font-mono" style={{ color: 'var(--text-muted)' }}>
        <AlignLeft className="w-3.5 h-3.5" />
        <span>On this page</span>
      </div>

      <nav className="space-y-1 text-xs">
        {tocData.map((item) => {
          const isActive = activeId === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`
                w-full text-left py-1.5 px-2 rounded-md transition-all flex items-center gap-1.5
                ${item.level === 2 ? 'ml-3 text-[11px]' : ''}
              `}
              style={{
                color: isActive ? 'var(--color-primary)' : 'var(--text-muted)',
                fontWeight: isActive ? 600 : 400,
                backgroundColor: isActive ? 'var(--color-primary-light)' : 'transparent'
              }}
            >
              {isActive && <ChevronRight className="w-3 h-3 text-[#00A254] shrink-0" />}
              <span className="truncate">{item.title}</span>
            </button>
          );
        })}
      </nav>

      {/* Adyen Quick Job Spec Box */}
      <div className="mt-8 p-3.5 rounded-lg border text-xs space-y-2.5"
        style={{
          backgroundColor: 'var(--bg-card)',
          borderColor: 'var(--border-color)'
        }}
      >
        <div className="flex items-center gap-1.5 font-bold font-mono text-[11px]" style={{ color: 'var(--text-heading)' }}>
          <Sparkles className="w-3.5 h-3.5 text-[#00A254]" />
          <span>Role Match Specs</span>
        </div>
        
        <div className="space-y-1.5 text-[11px]">
          <div className="flex items-center justify-between">
            <span style={{ color: 'var(--text-muted)' }}>Team:</span>
            <span className="font-semibold" style={{ color: 'var(--text-main)' }}>Docs Excellence</span>
          </div>
          <div className="flex items-center justify-between">
            <span style={{ color: 'var(--text-muted)' }}>Location:</span>
            <span className="font-semibold" style={{ color: 'var(--text-main)' }}>Chicago, IL</span>
          </div>
          <div className="flex items-center justify-between">
            <span style={{ color: 'var(--text-muted)' }}>Degrees:</span>
            <span className="font-semibold text-emerald-600">UIUC MCS & BS CS</span>
          </div>
          <div className="flex items-center justify-between">
            <span style={{ color: 'var(--text-muted)' }}>Sponsorship:</span>
            <span className="font-semibold text-emerald-600">Not Needed (US Auth)</span>
          </div>
        </div>

        <div className="pt-2 border-t text-[10px] leading-relaxed" style={{ borderColor: 'var(--border-color)', color: 'var(--text-muted)' }}>
          <p>✔ React & TypeScript Ready</p>
          <p>✔ Motorola QA & Testing Rigor</p>
          <p>✔ Formula Fit Execution</p>
        </div>
      </div>
    </div>
  );
};
