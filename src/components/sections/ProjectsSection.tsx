import React, { useState } from 'react';
import { Code2, ExternalLink, Github, Terminal, Copy, Check, Sparkles, Layers, Zap } from 'lucide-react';
import { candidateData, ProjectItem } from '../../data/candidateData';

export const ProjectsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Record<string, 'features' | 'code'>>({
    'proj-1': 'features',
    'proj-2': 'features'
  });
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const toggleTab = (projId: string, tab: 'features' | 'code') => {
    setActiveTab(prev => ({ ...prev, [projId]: tab }));
  };

  const copyCode = (id: string, code?: string) => {
    if (!code) return;
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="projects" className="space-y-6 pt-6 border-t" style={{ borderColor: 'var(--border-color)' }}>
      {/* Section Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-[#00A254] text-white">
            <Code2 className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-extrabold" style={{ color: 'var(--text-heading)' }}>
              Featured DX & Engineering Projects
            </h2>
            <p className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
              Developer documentation platforms, API tooling, and Grav CMS pipelines
            </p>
          </div>
        </div>

        <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#00A254]/10 text-[#00A254]">
          React + TypeScript + Docs DX
        </span>
      </div>

      {/* Projects Cards List */}
      <div className="space-y-6">
        {candidateData.projects.map((proj) => {
          const currentTab = activeTab[proj.id] || 'features';
          return (
            <div key={proj.id} className="card-adyen space-y-4">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b pb-4" style={{ borderColor: 'var(--border-subtle)' }}>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="badge-adyen font-mono">
                      {proj.category}
                    </span>
                    <span className="text-[11px] font-mono text-[#00A254] font-bold">
                      ⚡ {proj.metrics}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mt-1.5" style={{ color: 'var(--text-heading)' }}>
                    {proj.title}
                  </h3>
                  <p className="text-xs mt-1 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    {proj.summary}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 md:justify-end max-w-xs">
                  {proj.techStack.map((tech, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded text-[11px] font-mono font-semibold" style={{ backgroundColor: 'var(--bg-tag)', color: 'var(--text-main)' }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description */}
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-main)' }}>
                {proj.description}
              </p>

              {/* Tab Bar */}
              <div className="flex items-center justify-between border-b pb-2" style={{ borderColor: 'var(--border-subtle)' }}>
                <div className="flex items-center gap-2 text-xs font-mono">
                  <button
                    onClick={() => toggleTab(proj.id, 'features')}
                    className={`px-3 py-1 rounded transition-colors ${currentTab === 'features' ? 'bg-[#00A254] text-white font-bold' : 'hover:opacity-80'}`}
                    style={{ color: currentTab === 'features' ? '#FFF' : 'var(--text-muted)' }}
                  >
                    Key Features
                  </button>
                  {proj.codeSnippet && (
                    <button
                      onClick={() => toggleTab(proj.id, 'code')}
                      className={`px-3 py-1 rounded transition-colors ${currentTab === 'code' ? 'bg-[#00A254] text-white font-bold' : 'hover:opacity-80'}`}
                      style={{ color: currentTab === 'code' ? '#FFF' : 'var(--text-muted)' }}
                    >
                      TypeScript Code Snippet
                    </button>
                  )}
                </div>

                {proj.codeSnippet && currentTab === 'code' && (
                  <button
                    onClick={() => copyCode(proj.id, proj.codeSnippet)}
                    className="flex items-center gap-1 text-xs font-mono hover:text-[#00A254] transition-colors"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {copiedId === proj.id ? <Check className="w-3.5 h-3.5 text-[#00A254]" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedId === proj.id ? 'Copied!' : 'Copy Code'}</span>
                  </button>
                )}
              </div>

              {/* Tab Content */}
              {currentTab === 'features' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {proj.features.map((feat, i) => (
                    <div key={i} className="p-2.5 rounded-lg border flex items-center gap-2" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)' }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00A254] shrink-0"></span>
                      <span style={{ color: 'var(--text-main)' }}>{feat}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-4 rounded-lg font-mono text-xs overflow-x-auto" style={{ backgroundColor: 'var(--bg-code)' }}>
                  <pre className="text-emerald-300 whitespace-pre leading-relaxed">
                    {proj.codeSnippet}
                  </pre>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
