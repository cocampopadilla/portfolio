import React from 'react';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  MapPin, 
  Sun, 
  Moon, 
  GraduationCap, 
  Briefcase, 
  Code2, 
  Wrench,
  CheckCircle2
} from 'lucide-react';
import { candidateData } from '../data/candidateData';

interface VanillaResumePageProps {
  darkMode: boolean;
  setDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
}

export const VanillaResumePage: React.FC<VanillaResumePageProps> = ({ darkMode, setDarkMode }) => {
  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 transition-colors duration-200"
      style={{
        backgroundColor: 'var(--bg-main)',
        color: 'var(--text-main)'
      }}
    >
      {/* Top Floating Control Bar */}
      <div className="max-w-4xl mx-auto mb-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm font-mono font-medium" style={{ color: 'var(--text-muted)' }}>
          <span>Resume & Portfolio</span>
        </div>

        <div className="flex items-center gap-3">
          {/* Theme Switcher */}
          <button
            onClick={() => setDarkMode(prev => !prev)}
            className="p-2 rounded-lg border text-xs font-semibold flex items-center gap-2 transition-colors hover:opacity-80"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border-color)',
              color: 'var(--text-main)'
            }}
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            <span className="hidden sm:inline">{darkMode ? "Light" : "Dark"}</span>
          </button>
        </div>
      </div>

      {/* Main Clean Resume Document Container */}
      <main className="max-w-4xl mx-auto p-6 sm:p-10 border rounded-xl shadow-sm space-y-8"
        style={{
          backgroundColor: 'var(--bg-surface)',
          borderColor: 'var(--border-color)'
        }}
      >
        {/* Header Block */}
        <header className="border-b pb-6 space-y-3" style={{ borderColor: 'var(--border-color)' }}>
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: 'var(--text-heading)' }}>
              {candidateData.name}
            </h1>
            <p className="text-lg font-semibold text-slate-600 dark:text-slate-400 mt-1">
              {candidateData.genericTitle || "Software Engineer & QA Engineer"}
            </p>
          </div>

          {/* Contact & Info Grid */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>{candidateData.location}</span>
            </div>
            <span>•</span>
            <a href={`mailto:${candidateData.email}`} className="flex items-center gap-1.5 hover:underline">
              <Mail className="w-3.5 h-3.5" />
              <span>{candidateData.email}</span>
            </a>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" />
              <span>{candidateData.phone}</span>
            </div>
            <span>•</span>
            <a href={`https://${candidateData.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:underline">
              <Linkedin className="w-3.5 h-3.5" />
              <span>{candidateData.linkedin}</span>
            </a>
            <span>•</span>
            <a href={`https://${candidateData.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:underline">
              <Github className="w-3.5 h-3.5" />
              <span>{candidateData.github}</span>
            </a>
            <span>•</span>
            <div className="flex items-center gap-1.5 font-bold text-slate-700 dark:text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-slate-500" />
              <span>US Work Authorized</span>
            </div>
          </div>
        </header>

        {/* Executive Summary */}
        <section className="space-y-2">
          <h2 className="text-sm font-bold font-mono uppercase tracking-wider text-slate-500 border-b pb-1" style={{ borderColor: 'var(--border-subtle)' }}>
            Summary
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-main)' }}>
            {candidateData.genericBio}
          </p>
        </section>

        {/* Education Section */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 border-b pb-1" style={{ borderColor: 'var(--border-subtle)' }}>
            <GraduationCap className="w-4 h-4 text-slate-500" />
            <h2 className="text-sm font-bold font-mono uppercase tracking-wider text-slate-500">
              Education
            </h2>
          </div>

          <div className="space-y-5">
            {candidateData.education.map((edu, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <h3 className="text-base font-bold" style={{ color: 'var(--text-heading)' }}>
                      {edu.institution}
                    </h3>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
                      {edu.degree}
                    </p>
                  </div>
                  <div className="text-xs font-mono text-slate-500 sm:text-right">
                    <span>{edu.period}</span> • <span>{edu.location}</span>
                  </div>
                </div>

                {edu.gpa && (
                  <p className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-300">
                    GPA: {edu.gpa}
                  </p>
                )}

                {edu.highlights && edu.highlights.length > 0 && (
                  <ul className="list-disc list-inside text-xs space-y-1 text-slate-600 dark:text-slate-400 pl-1">
                    {edu.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                )}

                {edu.coursework && edu.coursework.length > 0 && (
                  <div className="text-xs pt-1">
                    <span className="font-semibold text-slate-500">Relevant Coursework: </span>
                    <span style={{ color: 'var(--text-muted)' }}>{edu.coursework.join(', ')}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Professional Experience */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 border-b pb-1" style={{ borderColor: 'var(--border-subtle)' }}>
            <Briefcase className="w-4 h-4 text-slate-500" />
            <h2 className="text-sm font-bold font-mono uppercase tracking-wider text-slate-500">
              Work Experience
            </h2>
          </div>

          <div className="space-y-6">
            {candidateData.experience.map((exp) => (
              <div key={exp.id} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <h3 className="text-base font-bold" style={{ color: 'var(--text-heading)' }}>
                      {exp.company}
                    </h3>
                    <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">
                      {exp.role} <span className="text-xs font-normal text-slate-400">({exp.type})</span>
                    </p>
                  </div>
                  <div className="text-xs font-mono text-slate-500 sm:text-right">
                    <span>{exp.period}</span> • <span>{exp.location}</span>
                  </div>
                </div>

                <ul className="list-disc list-inside text-xs space-y-1.5 leading-relaxed" style={{ color: 'var(--text-main)' }}>
                  {exp.description.map((bullet, idx) => (
                    <li key={idx} className="pl-1">{bullet}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className="text-[11px] font-mono px-2 py-0.5 rounded border" style={{ backgroundColor: 'var(--bg-tag)', borderColor: 'var(--border-color)', color: 'var(--text-muted)' }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Projects */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 border-b pb-1" style={{ borderColor: 'var(--border-subtle)' }}>
            <Code2 className="w-4 h-4 text-slate-500" />
            <h2 className="text-sm font-bold font-mono uppercase tracking-wider text-slate-500">
              Technical Projects
            </h2>
          </div>

          <div className="space-y-5">
            {candidateData.projects.map((proj) => (
              <div key={proj.id} className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="text-base font-bold" style={{ color: 'var(--text-heading)' }}>
                    {proj.title}
                  </h3>
                  <span className="text-xs font-mono text-slate-500">
                    {proj.category}
                  </span>
                </div>

                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-main)' }}>
                  {proj.description}
                </p>

                <div className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-300">
                  Impact: {proj.metrics}
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {proj.techStack.map((tech, idx) => (
                    <span key={idx} className="text-[11px] font-mono px-2 py-0.5 rounded border" style={{ backgroundColor: 'var(--bg-tag)', borderColor: 'var(--border-color)', color: 'var(--text-muted)' }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Skills */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 border-b pb-1" style={{ borderColor: 'var(--border-subtle)' }}>
            <Wrench className="w-4 h-4 text-slate-500" />
            <h2 className="text-sm font-bold font-mono uppercase tracking-wider text-slate-500">
              Technical Skills & Tools
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            {candidateData.skills.map((skillGroup, idx) => (
              <div key={idx} className="p-3.5 rounded-lg border space-y-2" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}>
                <h3 className="font-bold font-mono text-slate-500 uppercase tracking-wide text-[11px]">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-1">
                  {skillGroup.items.map((item, i) => (
                    <span key={i} className="px-2 py-1 rounded bg-slate-200/60 dark:bg-slate-800/60 text-slate-800 dark:text-slate-200 font-medium">
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Clean Document Footer */}
      <footer className="max-w-4xl mx-auto mt-6 text-center text-xs font-mono text-slate-400">
        <p>© 2026 Cristian Ocampo-Padilla • Resume & Portfolio</p>
      </footer>
    </div>
  );
};
