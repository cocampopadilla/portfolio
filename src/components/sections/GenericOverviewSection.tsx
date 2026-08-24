import React from 'react';
import { CheckCircle2, Mail, Linkedin, Award, ShieldCheck, Phone, Code2, Github } from 'lucide-react';
import { candidateData } from '../../data/candidateData';

interface GenericOverviewSectionProps {
  onNavigateSection: (sectionId: string) => void;
}

export const GenericOverviewSection: React.FC<GenericOverviewSectionProps> = ({ onNavigateSection }) => {
  const handleNavigate = (sectionId: string) => {
    onNavigateSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="overview" className="space-y-8 animate-fade-in">
      {/* Title Header */}
      <div className="border-b pb-6" style={{ borderColor: 'var(--border-color)' }}>
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="badge-adyen font-mono">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#00A254]" />
            Candidate: {candidateData.name}
          </span>
          <span className="text-xs font-mono px-2 py-0.5 rounded border bg-emerald-500/10 text-emerald-600 border-emerald-500/20 font-semibold">
            UIUC MCS Graduate (3.74 GPA, Aug 2026) • Motorola QA Engineer
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: 'var(--text-heading)' }}>
          {candidateData.name}
        </h1>
        <p className="text-base font-semibold text-[#00A254] mt-1">
          {candidateData.genericTitle || "Software Engineer & QA Engineer"} • {candidateData.location}
        </p>

        <p className="mt-3 text-sm sm:text-base max-w-3xl leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          {candidateData.genericBio}
        </p>

        {/* Contact Links Bar */}
        <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
          <a href={`mailto:${candidateData.email}`} className="flex items-center gap-1.5 hover:text-[#00A254] transition-colors">
            <Mail className="w-4 h-4 text-[#00A254]" />
            <span>{candidateData.email}</span>
          </a>
          <span>•</span>
          <div className="flex items-center gap-1.5">
            <Phone className="w-4 h-4 text-[#00A254]" />
            <span>{candidateData.phone}</span>
          </div>
          <span>•</span>
          <a href={`https://${candidateData.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[#00A254] transition-colors">
            <Linkedin className="w-4 h-4 text-[#00A254]" />
            <span>{candidateData.linkedin}</span>
          </a>
          <span>•</span>
          <a href={`https://${candidateData.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[#00A254] transition-colors">
            <Github className="w-4 h-4 text-[#00A254]" />
            <span>{candidateData.github}</span>
          </a>
        </div>

        {/* Action Button Row */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button 
            onClick={() => handleNavigate('projects')}
            className="btn-primary"
          >
            <Code2 className="w-4 h-4" />
            <span>Explore Technical Projects</span>
          </button>
          <a
            href={`mailto:${candidateData.email}`}
            className="px-4 py-2 text-xs font-semibold rounded-md border transition-colors flex items-center gap-2"
            style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', color: 'var(--text-main)' }}
          >
            <Mail className="w-4 h-4 text-[#00A254]" />
            <span>Get in Touch</span>
          </a>
        </div>
      </div>

      {/* Summary Metrics Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {candidateData.summaryMetrics.map((metric, idx) => (
          <div key={idx} className="card-adyen text-center p-4">
            <div className="text-xl sm:text-2xl font-extrabold text-[#00A254] font-mono">
              {metric.value}
            </div>
            <div className="text-xs font-bold mt-1" style={{ color: 'var(--text-heading)' }}>
              {metric.label}
            </div>
            <div className="text-[11px] mt-0.5" style={{ color: 'var(--text-muted)' }}>
              {metric.detail}
            </div>
          </div>
        ))}
      </div>

      {/* Developer Specs Grid */}
      <div id="overview-specs" className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Core Competencies Box */}
        <div className="md:col-span-7 card-adyen space-y-4">
          <div className="flex items-center gap-2 border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
            <Award className="w-5 h-5 text-[#00A254]" />
            <h2 className="font-bold text-lg" style={{ color: 'var(--text-heading)' }}>
              Technical Competencies & Stack
            </h2>
          </div>

          {candidateData.skills.map((skillGroup, i) => (
            <div key={i} className="space-y-2">
              <h3 className="text-xs font-bold font-mono uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                {skillGroup.category}
              </h3>
              <div className="space-y-2">
                {skillGroup.items.map((skill, j) => (
                  <div key={j} className="space-y-1">
                    <div className="flex items-center justify-between text-xs font-medium">
                      <span className="flex items-center gap-2" style={{ color: 'var(--text-main)' }}>
                        {skill.name}
                        {skill.badge && (
                          <span className="text-[10px] font-mono font-bold px-1.5 py-0.2 rounded bg-[#00A254]/10 text-[#00A254]">
                            {skill.badge}
                          </span>
                        )}
                      </span>
                      <span className="font-mono text-gray-400">{skill.proficiency}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--bg-tag)' }}>
                      <div 
                        className="h-full rounded-full bg-[#00A254] transition-all duration-500"
                        style={{ width: `${skill.proficiency}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Core Highlights Checklist */}
        <div className="md:col-span-5 card-adyen space-y-4">
          <div className="flex items-center gap-2 border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
            <ShieldCheck className="w-5 h-5 text-[#00A254]" />
            <h2 className="font-bold text-lg" style={{ color: 'var(--text-heading)' }}>
              Candidate Key Qualifications
            </h2>
          </div>

          <div className="space-y-3 text-xs">
            <div className="p-3 rounded-lg border flex items-start gap-2.5" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)' }}>
              <CheckCircle2 className="w-4 h-4 text-[#00A254] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block text-sm" style={{ color: 'var(--text-heading)' }}>UIUC MCS Degree Completed</span>
                <span style={{ color: 'var(--text-muted)' }}>Finalized UIUC Master of Computer Science (3.74 GPA, Aug 2026) & BS CS (3.67 GPA).</span>
              </div>
            </div>

            <div className="p-3 rounded-lg border flex items-start gap-2.5" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)' }}>
              <CheckCircle2 className="w-4 h-4 text-[#00A254] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block text-sm" style={{ color: 'var(--text-heading)' }}>Active Industry Engineering Experience</span>
                <span style={{ color: 'var(--text-muted)' }}>QA Engineer at Motorola Mobility (Apr 2026–Present) & Software Engineer Co-Op at Navistar.</span>
              </div>
            </div>

            <div className="p-3 rounded-lg border flex items-start gap-2.5" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)' }}>
              <CheckCircle2 className="w-4 h-4 text-[#00A254] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block text-sm" style={{ color: 'var(--text-heading)' }}>Full-Stack & QA Automation Stack</span>
                <span style={{ color: 'var(--text-muted)' }}>Proficient in Python, React, TypeScript, C++, FastAPI, SQL, Linux, and test reporting scripts.</span>
              </div>
            </div>

            <div className="p-3 rounded-lg border flex items-start gap-2.5" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)' }}>
              <CheckCircle2 className="w-4 h-4 text-[#00A254] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block text-sm" style={{ color: 'var(--text-heading)' }}>US Work Authorization</span>
                <span style={{ color: 'var(--text-muted)' }}>US Authorized candidate based in Chicago, IL. Zero sponsorship required.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
