import React from 'react';
import { Search, Moon, Sun } from 'lucide-react';

interface GenericNavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
  onOpenSearch: () => void;
}

export const GenericNavbar: React.FC<GenericNavbarProps> = ({
  darkMode,
  setDarkMode,
  onOpenSearch
}) => {
  return (
    <header className="sticky top-0 z-30 w-full border-b backdrop-blur-md transition-colors"
      style={{
        backgroundColor: 'var(--bg-surface)',
        borderColor: 'var(--border-color)',
        opacity: 0.96
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Left: Brand / Logo */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-md bg-[#00A254] flex items-center justify-center font-extrabold text-white text-xs shadow-sm font-mono">
              &lt;CO/&gt;
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base leading-tight tracking-tight" style={{ color: 'var(--text-heading)' }}>
                Cristian <span className="text-[#00A254]">Ocampo-Padilla</span>
              </span>
              <span className="text-[11px] font-mono leading-none" style={{ color: 'var(--text-muted)' }}>
                Software & QA Engineer
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2 ml-4 px-2.5 py-1 rounded-full text-xs font-medium border"
            style={{ backgroundColor: 'var(--color-primary-light)', borderColor: 'var(--color-primary-border)', color: 'var(--color-primary)' }}
          >
            <span className="w-2 h-2 rounded-full bg-[#00A254] animate-pulse"></span>
            <span>UIUC MCS Graduate (3.74 GPA) • Motorola QA</span>
          </div>
        </div>

        {/* Center: Quick Search Trigger */}
        <button
          onClick={onOpenSearch}
          className="flex-1 max-w-md hidden sm:flex items-center justify-between px-3.5 py-1.5 rounded-lg border text-sm transition-all"
          style={{
            backgroundColor: 'var(--bg-tag)',
            borderColor: 'var(--border-color)',
            color: 'var(--text-muted)'
          }}
        >
          <div className="flex items-center gap-2">
            <Search className="w-4 h-4 text-gray-400" />
            <span>Search candidate resume, skills, experience...</span>
          </div>
          <div className="flex items-center gap-1 font-mono text-xs px-1.5 py-0.5 rounded border" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}>
            <span>⌘</span>
            <span>K</span>
          </div>
        </button>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Theme Switcher */}
          <button
            onClick={() => setDarkMode(prev => !prev)}
            className="p-2 rounded-lg border transition-colors hover:opacity-80"
            style={{
              backgroundColor: 'var(--bg-tag)',
              borderColor: 'var(--border-color)',
              color: 'var(--text-main)'
            }}
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

        </div>
      </div>
    </header>
  );
};
