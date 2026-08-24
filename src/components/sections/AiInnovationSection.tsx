import React from 'react';
import { ShieldCheck, Cpu, Code2, CheckCircle2, Zap, AlertTriangle, Bug } from 'lucide-react';

export const AiInnovationSection: React.FC = () => {
  return (
    <section id="ai-innovation" className="space-y-6 pt-6 border-t" style={{ borderColor: 'var(--border-color)' }}>
      {/* Section Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-[#00A254] text-white">
            <Bug className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-extrabold" style={{ color: 'var(--text-heading)' }}>
              Testing, Quality Assurance & Engineering Rigor
            </h2>
            <p className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
              Manual feature validation, test automation, and systems debugging discipline
            </p>
          </div>
        </div>
      </div>

      {/* 2-Column Grid: Manual Testing vs Test Automation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Pillar 1: Manual Feature Testing & Edge Cases */}
        <div className="card-adyen space-y-4">
          <div className="flex items-center gap-2 border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
            <ShieldCheck className="w-5 h-5 text-[#00A254]" />
            <h3 className="font-bold text-base" style={{ color: 'var(--text-heading)' }}>
              Manual Feature Testing & Verification
            </h3>
          </div>

          <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            Meticulous end-to-end user experience and API testing at Motorola Mobility and Navistar to identify UI flaws, data mismatches, and edge cases.
          </p>

          <div className="space-y-2.5 text-xs">
            <div className="p-3 rounded-lg border flex items-start gap-2.5" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)' }}>
              <CheckCircle2 className="w-4 h-4 text-[#00A254] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block" style={{ color: 'var(--text-heading)' }}>Root Cause Log Analysis</span>
                <span style={{ color: 'var(--text-muted)' }}>Diagnosing component and API failures using system log analysis and error tracking.</span>
              </div>
            </div>

            <div className="p-3 rounded-lg border flex items-start gap-2.5" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)' }}>
              <CheckCircle2 className="w-4 h-4 text-[#00A254] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block" style={{ color: 'var(--text-heading)' }}>Requirement Reviews & Test Scenario Design</span>
                <span style={{ color: 'var(--text-muted)' }}>Translating complex business requirements into clear, repeatable test cases for engineering teams.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pillar 2: Test Automation & Tooling */}
        <div className="card-adyen space-y-4">
          <div className="flex items-center gap-2 border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
            <Cpu className="w-5 h-5 text-[#00A254]" />
            <h3 className="font-bold text-base" style={{ color: 'var(--text-heading)' }}>
              Test Automation & Reporting
            </h3>
          </div>

          <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            Building custom automation scripts and HTML execution reports to streamline QA workflows and expand automated test coverage.
          </p>

          <div className="space-y-2.5 text-xs">
            <div className="p-3 rounded-lg border flex items-start gap-2.5" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)' }}>
              <CheckCircle2 className="w-4 h-4 text-[#00A254] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block" style={{ color: 'var(--text-heading)' }}>Automated HTML Test Reporting</span>
                <span style={{ color: 'var(--text-muted)' }}>Developing custom test automation pipelines that output clean HTML execution summaries.</span>
              </div>
            </div>

            <div className="p-3 rounded-lg border flex items-start gap-2.5" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)' }}>
              <CheckCircle2 className="w-4 h-4 text-[#00A254] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block" style={{ color: 'var(--text-heading)' }}>Rapid Tool Adoption</span>
                <span style={{ color: 'var(--text-muted)' }}>Fast learner adapting to new Android developer tools and testing frameworks on the job.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
