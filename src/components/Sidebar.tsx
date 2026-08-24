import React from 'react';
import { 
  BookOpen, 
  GraduationCap, 
  Briefcase, 
  Code2, 
  Bug, 
  Target, 
  Terminal, 
  Github,
  Linkedin,
  Mail
} from 'lucide-react';
import { candidateData } from '../data/candidateData';

export interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  badge?: string;
  category: string;
}

interface SidebarProps {
  activeSection: string;
  setActiveSection: (id: string) => void;
  isOpenMobile: boolean;
  setIsOpenMobile: (val: boolean) => void;
}

export const navItems: NavItem[] = [
  { id: 'overview', label: 'Overview & Specs', icon: BookOpen, category: 'GETTING STARTED' },
  { id: 'education', label: 'Education (UIUC MCS & BS)', icon: GraduationCap, category: 'GETTING STARTED' },
  { id: 'experience', label: 'Experience & Motorola QA', icon: Briefcase, category: 'GETTING STARTED' },
  
  { id: 'projects', label: 'Featured Projects', icon: Code2, category: 'TECHNICAL PORTFOLIO', badge: '2 Projects' },
  { id: 'ai-innovation', label: 'QA & Testing Rigor', icon: Bug, category: 'TECHNICAL PORTFOLIO', badge: 'Motorola QA' },
  
  { id: 'adyen-formula', label: 'Adyen Formula Fit', icon: Target, category: 'CULTURE & FIT', badge: '100% Fit' }
];

export const Sidebar: React.FC<SidebarProps> = ({
  activeSection,
  setActiveSection,
  isOpenMobile,
  setIsOpenMobile
}) => {
  const categories = Array.from(new Set(navItems.map(item => item.category)));

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpenMobile && (
        <div 
          onClick={() => setIsOpenMobile(false)}
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* Sidebar Container */}
      <aside className={`
        fixed lg:sticky top-16 bottom-0 lg:bottom-auto left-0 z-40 w-64 shrink-0 border-r flex flex-col transition-transform duration-300 ease-in-out
        lg:h-[calc(100vh-4rem)] lg:translate-x-0
        ${isOpenMobile ? 'translate-x-0' : '-translate-x-full'}
      `}
        style={{
          backgroundColor: 'var(--bg-sidebar)',
          borderColor: 'var(--border-color)'
        }}
      >
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {categories.map(cat => {
            const items = navItems.filter(item => item.category === cat);
            return (
              <div key={cat} className="space-y-1">
                <h3 className="px-2 text-[11px] font-bold uppercase tracking-wider font-mono" style={{ color: 'var(--text-muted)' }}>
                  {cat}
                </h3>
                <div className="mt-1 space-y-0.5">
                  {items.map(item => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          setActiveSection(item.id);
                          setIsOpenMobile(false);
                          const el = document.getElementById(item.id);
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md transition-all text-left"
                        style={{
                          backgroundColor: isActive ? 'var(--color-primary-light)' : 'transparent',
                          color: isActive ? 'var(--color-primary)' : 'var(--text-main)',
                          borderLeft: isActive ? '3px solid var(--color-primary)' : '3px solid transparent'
                        }}
                      >
                        <div className="flex items-center gap-2.5">
                          <Icon className={`w-4 h-4 ${isActive ? 'text-[#00A254]' : 'text-gray-400'}`} />
                          <span className={isActive ? 'font-semibold' : ''}>{item.label}</span>
                        </div>

                        {item.badge && (
                          <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                            isActive ? 'bg-[#00A254] text-white' : 'bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                          }`}>
                            {item.badge}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Candidate Footer Info Box */}
        <div className="p-3 border-t m-3 rounded-lg border" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-bold font-mono" style={{ color: 'var(--text-heading)' }}>
              Candidate API Node
            </span>
            <span className="flex items-center gap-1 text-[10px] text-emerald-600 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> 200 OK
            </span>
          </div>

          <p className="text-xs truncate font-medium" style={{ color: 'var(--text-main)' }}>
            {candidateData.name}
          </p>
          <p className="text-[11px] truncate" style={{ color: 'var(--text-muted)' }}>
            {candidateData.targetRole}
          </p>

          <div className="mt-2.5 flex items-center gap-2 pt-2 border-t" style={{ borderColor: 'var(--border-color)' }}>
            <a 
              href={`mailto:${candidateData.email}`}
              className="p-1.5 rounded border hover:opacity-80 transition-opacity"
              style={{ backgroundColor: 'var(--bg-tag)', borderColor: 'var(--border-color)', color: 'var(--text-muted)' }}
              title="Send Email"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
            <a 
              href={`https://${candidateData.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded border hover:opacity-80 transition-opacity"
              style={{ backgroundColor: 'var(--bg-tag)', borderColor: 'var(--border-color)', color: 'var(--text-muted)' }}
              title="GitHub Profile"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
            <a 
              href={`https://${candidateData.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded border hover:opacity-80 transition-opacity"
              style={{ backgroundColor: 'var(--bg-tag)', borderColor: 'var(--border-color)', color: 'var(--text-muted)' }}
              title="LinkedIn Profile"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};
