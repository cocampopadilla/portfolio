import React from 'react';
import { GraduationCap, Award, BookOpen, CheckCircle2, Calendar, MapPin } from 'lucide-react';
import { candidateData } from '../../data/candidateData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="space-y-6 pt-6 border-t" style={{ borderColor: 'var(--border-color)' }}>
      {/* Section Header */}
      <div className="flex items-center gap-3">
        <div className="p-2.5 rounded-lg bg-[#00A254] text-white">
          <GraduationCap className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-2xl font-extrabold" style={{ color: 'var(--text-heading)' }}>
            Education & Academic Foundation
          </h2>
          <p className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
            University of Illinois Urbana-Champaign (UIUC) Degrees & Coursework
          </p>
        </div>
      </div>

      {/* Degrees List */}
      <div className="space-y-6">
        {candidateData.education.map((edu, idx) => (
          <div key={idx} className="card-adyen space-y-5">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-4" style={{ borderColor: 'var(--border-subtle)' }}>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className="badge-adyen font-mono font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified UIUC Degree
                  </span>
                  {edu.gpa && (
                    <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
                      GPA: {edu.gpa}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold" style={{ color: 'var(--text-heading)' }}>
                  {edu.degree}
                </h3>
                <p className="text-sm font-semibold text-[#00A254]">
                  {edu.institution}
                </p>
              </div>

              <div className="text-xs font-mono space-y-1 md:text-right" style={{ color: 'var(--text-muted)' }}>
                <div className="flex items-center md:justify-end gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{edu.period}</span>
                </div>
                <div className="flex items-center md:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{edu.location}</span>
                </div>
              </div>
            </div>

            {/* Highlights */}
            {edu.highlights && edu.highlights.length > 0 && (
              <div>
                <h4 className="text-xs font-bold font-mono uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>
                  Degree Highlights & Honors
                </h4>
                <ul className="space-y-2 text-xs">
                  {edu.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2" style={{ color: 'var(--text-main)' }}>
                      <CheckCircle2 className="w-4 h-4 text-[#00A254] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Coursework Chips */}
            {edu.coursework && edu.coursework.length > 0 && (
              <div className="pt-3 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
                <h4 className="text-xs font-bold font-mono uppercase tracking-wider mb-2.5" style={{ color: 'var(--text-muted)' }}>
                  Key Graduate & Systems Coursework
                </h4>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 rounded-lg border text-xs font-medium transition-colors hover:border-[#00A254]"
                      style={{
                        backgroundColor: 'var(--bg-tag)',
                        borderColor: 'var(--border-color)',
                        color: 'var(--text-main)'
                      }}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
