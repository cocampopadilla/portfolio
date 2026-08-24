import React, { useState, useEffect } from 'react';
import { Search, X, ChevronRight, BookOpen, Terminal, Sparkles, Code2, Briefcase, GraduationCap, Bug } from 'lucide-react';
import { candidateData } from '../data/candidateData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSection: (id: string) => void;
}

interface SearchItem {
  id: string;
  title: string;
  category: string;
  description: string;
  sectionId: string;
  icon: React.ElementType;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectSection
}) => {
  const [query, setQuery] = useState('');

  // Build searchable index
  const items: SearchItem[] = [
    { id: 's-1', title: 'Candidate Profile & Executive Summary', category: 'Overview', description: candidateData.bio, sectionId: 'overview', icon: BookOpen },
    { id: 's-2', title: 'UIUC Master of CS & Bachelor of CS', category: 'Education', description: `Master of Computer Science (4.0 GPA) & BS CS from UIUC`, sectionId: 'education', icon: GraduationCap },
    { id: 's-3', title: 'React, TypeScript & Python Stack', category: 'Skills', description: 'Full-stack React 18, TypeScript, Python, FastAPI, SQL, C++', sectionId: 'overview', icon: Code2 },
    { id: 's-4', title: 'Motorola Mobility QA Engineer Role', category: 'Experience', description: candidateData.experience[0].description[0], sectionId: 'experience', icon: Briefcase },
    { id: 's-5', title: 'International Motors (Navistar) Software Co-Op', category: 'Experience', description: candidateData.experience[1].description[0], sectionId: 'experience', icon: Briefcase },
    { id: 's-6', title: 'Inventory & Reservation Web App (React + FastAPI)', category: 'Projects', description: candidateData.projects[0].summary, sectionId: 'projects', icon: Code2 },
    { id: 's-7', title: 'Enhanced GPS Grandmaster (Raspberry Pi 3)', category: 'Projects', description: candidateData.projects[1].summary, sectionId: 'projects', icon: Code2 },
    { id: 's-[#]', title: 'Testing, QA & System Debugging Rigor', category: 'Testing QA', description: 'Manual feature testing, test case automation, HTML execution reports, and root-cause log analysis.', sectionId: 'ai-innovation', icon: Bug },
    { id: 's-8', title: 'The Adyen Formula Fit Matrix', category: 'Culture', description: 'Launch fast and iterate, build for long term, developer empathy.', sectionId: 'adyen-formula', icon: Sparkles }
  ];

  const filteredItems = items.filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase()) ||
    item.description.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="w-full max-w-2xl rounded-xl border shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
        style={{
          backgroundColor: 'var(--bg-card)',
          borderColor: 'var(--border-color)'
        }}
      >
        {/* Input Bar */}
        <div className="p-4 border-b flex items-center gap-3" style={{ borderColor: 'var(--border-color)' }}>
          <Search className="w-5 h-5 text-[#00A254]" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search candidate docs (e.g. 'React', 'Motorola', 'API', 'Adyen Formula')..."
            className="w-full bg-transparent border-none outline-none text-base"
            style={{ color: 'var(--text-heading)' }}
            autoFocus
          />
          <button 
            onClick={onClose}
            className="p-1 rounded hover:opacity-80"
            style={{ color: 'var(--text-muted)' }}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Results */}
        <div className="flex-1 overflow-y-auto p-3 space-y-1">
          {filteredItems.length === 0 ? (
            <div className="p-8 text-center" style={{ color: 'var(--text-muted)' }}>
              No doc matches found for "{query}". Try searching for 'React', 'Motorola', or 'API'.
            </div>
          ) : (
            filteredItems.map(item => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onSelectSection(item.sectionId);
                    onClose();
                  }}
                  className="w-full text-left p-3 rounded-lg flex items-start gap-3 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <div className="p-2 rounded-md bg-[#00A254]/10 text-[#00A254]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-sm truncate" style={{ color: 'var(--text-heading)' }}>
                        {item.title}
                      </span>
                      <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded" style={{ backgroundColor: 'var(--bg-tag)', color: 'var(--text-muted)' }}>
                        {item.category}
                      </span>
                    </div>
                    <p className="text-xs truncate mt-0.5" style={{ color: 'var(--text-muted)' }}>
                      {item.description}
                    </p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400 self-center" />
                </button>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="p-3 border-t text-xs font-mono flex items-center justify-between"
          style={{ backgroundColor: 'var(--bg-sidebar)', borderColor: 'var(--border-color)', color: 'var(--text-muted)' }}
        >
          <div className="flex items-center gap-3">
            <span><kbd className="px-1.5 py-0.5 rounded border bg-card">↑↓</kbd> Navigate</span>
            <span><kbd className="px-1.5 py-0.5 rounded border bg-card">ESC</kbd> Close</span>
          </div>
          <span className="text-[#00A254] font-bold">Adyen Docs Engine</span>
        </div>
      </div>
    </div>
  );
};
