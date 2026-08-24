import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';
import { candidateData } from '../../data/candidateData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="space-y-6 pt-6 border-t" style={{ borderColor: 'var(--border-color)' }}>
      {/* Section Header */}
      <div className="flex items-center gap-3">
        <div className="p-2.5 rounded-lg bg-[#00A254] text-white">
          <Briefcase className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-2xl font-extrabold" style={{ color: 'var(--text-heading)' }}>
            Professional Experience & DX Impact
          </h2>
          <p className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
            Full-stack engineering, documentation pipelines & developer tooling
          </p>
        </div>
      </div>

      {/* Experience Cards Timeline */}
      <div className="space-y-6">
        {candidateData.experience.map((exp) => (
          <div key={exp.id} className="card-adyen space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
              <div>
                <span className="text-xs font-bold font-mono px-2 py-0.5 rounded bg-[#00A254]/10 text-[#00A254]">
                  {exp.type}
                </span>
                <h3 className="text-lg font-bold mt-1" style={{ color: 'var(--text-heading)' }}>
                  {exp.role}
                </h3>
                <p className="text-sm font-semibold text-[#00A254]">
                  {exp.company}
                </p>
              </div>

              <div className="text-xs font-mono space-y-1 sm:text-right" style={{ color: 'var(--text-muted)' }}>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{exp.period}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>

            {/* Description Bullets */}
            <ul className="space-y-2.5 text-xs">
              {exp.description.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-2.5" style={{ color: 'var(--text-main)' }}>
                  <ChevronRight className="w-4 h-4 text-[#00A254] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Tech Badges */}
            <div className="pt-3 border-t flex flex-wrap gap-1.5" style={{ borderColor: 'var(--border-subtle)' }}>
              {exp.technologies.map((tech, idx) => (
                <span 
                  key={idx}
                  className="px-2.5 py-1 rounded text-[11px] font-mono font-medium"
                  style={{
                    backgroundColor: 'var(--bg-tag)',
                    color: 'var(--text-muted)'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
