import React, { useState, useEffect } from 'react';
import { AlignLeft, ChevronRight, Sparkles } from 'lucide-react';

interface TocItem {
  id: string;
  title: string;
  level: number;
}

const genericTocData: TocItem[] = [
  { id: 'overview', title: 'Candidate Overview', level: 1 },
  { id: 'overview-specs', title: 'Technical Competencies', level: 2 },
  { id: 'education', title: 'UIUC CS Degrees', level: 1 },
  { id: 'experience', title: 'Experience & Motorola QA', level: 1 },
  { id: 'projects', title: 'Featured Projects', level: 1 },
  { id: 'ai-innovation', title: 'QA & Testing Rigor', level: 1 }
];

export const GenericTableOfContents: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('overview');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      for (let i = genericTocData.length - 1; i >= 0; i--) {
        const el = document.getElementById(genericTocData[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveId(genericTocData[i].id);
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
        {genericTocData.map((item) => {
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

      {/* Quick Candidate Spec Box */}
      <div className="mt-8 p-3.5 rounded-lg border text-xs space-y-2.5"
        style={{
          backgroundColor: 'var(--bg-card)',
          borderColor: 'var(--border-color)'
        }}
      >
        <div className="flex items-center gap-1.5 font-bold font-mono text-[11px]" style={{ color: 'var(--text-heading)' }}>
          <Sparkles className="w-3.5 h-3.5 text-[#00A254]" />
          <span>Candidate Quick Specs</span>
        </div>
        
        <div className="space-y-1.5 text-[11px]">
          <div className="flex items-center justify-between">
            <span style={{ color: 'var(--text-muted)' }}>Degree:</span>
            <span className="font-semibold text-emerald-600">UIUC MCS (3.74 GPA)</span>
          </div>
          <div className="flex items-center justify-between">
            <span style={{ color: 'var(--text-muted)' }}>Completion:</span>
            <span className="font-semibold text-emerald-600">August 2026</span>
          </div>
          <div className="flex items-center justify-between">
            <span style={{ color: 'var(--text-muted)' }}>Current Role:</span>
            <span className="font-semibold" style={{ color: 'var(--text-main)' }}>Motorola QA Engineer</span>
          </div>
          <div className="flex items-center justify-between">
            <span style={{ color: 'var(--text-muted)' }}>Location:</span>
            <span className="font-semibold" style={{ color: 'var(--text-main)' }}>Chicago, IL</span>
          </div>
          <div className="flex items-center justify-between">
            <span style={{ color: 'var(--text-muted)' }}>Work Auth:</span>
            <span className="font-semibold text-emerald-600">US Authorized</span>
          </div>
        </div>

        <div className="pt-2 border-t text-[10px] leading-relaxed" style={{ borderColor: 'var(--border-color)', color: 'var(--text-muted)' }}>
          <p>✔ Python, React & TypeScript</p>
          <p>✔ Motorola QA & Automation</p>
          <p>✔ C++, FastAPI & SQL Systems</p>
        </div>
      </div>
    </div>
  );
};
