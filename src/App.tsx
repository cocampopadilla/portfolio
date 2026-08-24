import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { TableOfContents } from './components/TableOfContents';
import { SearchModal } from './components/SearchModal';

import { OverviewSection } from './components/sections/OverviewSection';
import { EducationSection } from './components/sections/EducationSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { AiInnovationSection } from './components/sections/AiInnovationSection';
import { AdyenFormulaSection } from './components/sections/AdyenFormulaSection';

import { GenericNavbar } from './components/GenericNavbar';
import { GenericSidebar } from './components/GenericSidebar';
import { GenericTableOfContents } from './components/GenericTableOfContents';
import { GenericOverviewSection } from './components/sections/GenericOverviewSection';

import { Menu } from 'lucide-react';

const checkIsAdyenRoute = (): boolean => {
  const path = window.location.pathname.toLowerCase();
  const hash = window.location.hash.toLowerCase();
  return path.includes('/adyen') || hash.includes('adyen');
};

export const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>('overview');
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState<boolean>(false);
  const [isAdyenRoute, setIsAdyenRoute] = useState<boolean>(checkIsAdyenRoute);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleRouteChange = () => {
      setIsAdyenRoute(checkIsAdyenRoute());
    };

    window.addEventListener('popstate', handleRouteChange);
    window.addEventListener('hashchange', handleRouteChange);
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      window.removeEventListener('hashchange', handleRouteChange);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-200" style={{ backgroundColor: 'var(--bg-main)' }}>
      {/* Top Navbar */}
      {isAdyenRoute ? (
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          onOpenSearch={() => setIsSearchOpen(true)}
        />
      ) : (
        <GenericNavbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          onOpenSearch={() => setIsSearchOpen(true)}
        />
      )}

      {/* Main Layout Container */}
      <div className="flex-1 flex max-w-[90rem] w-full mx-auto justify-center">
        
        {/* Left Navigation Sidebar */}
        {isAdyenRoute ? (
          <Sidebar
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            isOpenMobile={isMobileSidebarOpen}
            setIsOpenMobile={setIsMobileSidebarOpen}
          />
        ) : (
          <GenericSidebar
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            isOpenMobile={isMobileSidebarOpen}
            setIsOpenMobile={setIsMobileSidebarOpen}
          />
        )}

        {/* Mobile Sidebar Toggle Floating Bar */}
        <div className="lg:hidden fixed bottom-4 right-4 z-30 flex items-center gap-2">
          <button
            onClick={() => setIsMobileSidebarOpen(true)}
            className="btn-primary rounded-full p-3 shadow-xl"
            title="Open Documentation Menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>

        {/* Central Documentation / Resume Pane */}
        <main className="flex-1 min-w-0 px-4 sm:px-8 py-8 max-w-4xl space-y-12">
          
          {isAdyenRoute ? (
            <OverviewSection 
              onNavigateSection={setActiveSection}
            />
          ) : (
            <GenericOverviewSection
              onNavigateSection={setActiveSection}
            />
          )}

          <EducationSection />

          <ExperienceSection />

          <ProjectsSection />

          <AiInnovationSection />

          {isAdyenRoute && <AdyenFormulaSection />}

          {/* Page Footer */}
          <footer className="pt-8 border-t space-y-4 text-xs font-mono" style={{ borderColor: 'var(--border-color)', color: 'var(--text-muted)' }}>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00A254]"></span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">
                  {isAdyenRoute 
                    ? "Built for Adyen Docs Excellence Engineering Team (Chicago)"
                    : "Cristian Ocampo-Padilla • Software & QA Engineer Portfolio"
                  }
                </span>
              </div>
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setIsSearchOpen(true)}
                  className="hover:text-[#00A254] transition-colors"
                >
                  ⌘K Quick Search
                </button>
                <span>•</span>
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="hover:text-[#00A254] transition-colors"
                >
                  Back to Top ↑
                </button>
              </div>
            </div>
            
            <p className="text-[11px] leading-relaxed text-center sm:text-left">
              {isAdyenRoute
                ? "Engineered with React 18, TypeScript, Vite & Tailwind CSS. Emulating the official Adyen Developer Portal design system."
                : "Engineered with React 18, TypeScript, Vite & Tailwind CSS. Focused on software performance, test automation, and systems engineering."
              }
            </p>
          </footer>
        </main>

        {/* Right Sticky Table of Contents */}
        {isAdyenRoute ? <TableOfContents /> : <GenericTableOfContents />}
      </div>

      {/* Global Command Palette (Cmd+K Search Modal) */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectSection={(sectionId) => {
          setActiveSection(sectionId);
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />
    </div>
  );
};
