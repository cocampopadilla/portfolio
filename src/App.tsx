import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { TableOfContents } from './components/TableOfContents';

import { OverviewSection } from './components/sections/OverviewSection';
import { EducationSection } from './components/sections/EducationSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { AiInnovationSection } from './components/sections/AiInnovationSection';
import { AdyenFormulaSection } from './components/sections/AdyenFormulaSection';

import { VanillaResumePage } from './components/VanillaResumePage';
import { Menu } from 'lucide-react';

const checkIsAdyenRoute = (): boolean => {
  const path = window.location.pathname.toLowerCase();
  const hash = window.location.hash.toLowerCase();
  return path.includes('/adyen') || hash.includes('adyen');
};

export const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>('overview');
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

  useEffect(() => {
    const faviconLink = document.querySelector<HTMLLinkElement>("link[rel*='icon']");
    if (isAdyenRoute) {
      document.title = "Candidate Docs | Adyen Docs Excellence Engineering";
      if (faviconLink) {
        faviconLink.href = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="20" fill="%2300A254"/><text y=".9em" x=".15em" font-size="80" font-weight="bold" fill="white" font-family="sans-serif">A</text></svg>';
      }
    } else {
      document.title = "Cristian Ocampo-Padilla | Resume & Portfolio";
      if (faviconLink) {
        faviconLink.href = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="%230F172A"/><text y=".88em" x=".22em" font-size="70" font-weight="800" fill="%2338BDF8" font-family="system-ui, sans-serif">C</text></svg>';
      }
    }
  }, [isAdyenRoute]);

  if (!isAdyenRoute) {
    return <VanillaResumePage darkMode={darkMode} setDarkMode={setDarkMode} />;
  }

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-200" style={{ backgroundColor: 'var(--bg-main)' }}>
      {/* Top Navbar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Main Layout Container */}
      <div className="flex-1 flex max-w-[90rem] w-full mx-auto justify-center">
        
        {/* Left Navigation Sidebar */}
        <Sidebar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          isOpenMobile={isMobileSidebarOpen}
          setIsOpenMobile={setIsMobileSidebarOpen}
        />

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

        {/* Central Documentation Pane */}
        <main className="flex-1 min-w-0 px-4 sm:px-8 py-8 max-w-4xl space-y-12">
          <OverviewSection 
            onNavigateSection={setActiveSection}
          />

          <EducationSection />

          <ExperienceSection />

          <ProjectsSection />

          <AiInnovationSection />

          <AdyenFormulaSection />

          {/* Page Footer */}
          <footer className="pt-8 border-t space-y-4 text-xs font-mono" style={{ borderColor: 'var(--border-color)', color: 'var(--text-muted)' }}>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00A254]"></span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">
                  Built for Adyen Docs Excellence Engineering Team (Chicago)
                </span>
              </div>
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="hover:text-[#00A254] transition-colors"
                >
                  Back to Top ↑
                </button>
              </div>
            </div>
            
            <p className="text-[11px] leading-relaxed text-center sm:text-left">
              Engineered with React 18, TypeScript, Vite & Tailwind CSS. Emulating the official Adyen Developer Portal design system.
            </p>
          </footer>
        </main>

        {/* Right Sticky Table of Contents */}
        <TableOfContents />
      </div>
    </div>
  );
};
