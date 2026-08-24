import React, { useState } from 'react';
import { Target, Users, ShieldCheck, Zap, HeartHandshake, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { candidateData, FormulaTenet } from '../data/candidateData';

export const FormulaMatrix: React.FC = () => {
  const [selectedTenet, setSelectedTenet] = useState<FormulaTenet>(candidateData.adyenFormula[0]);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users': return Users;
      case 'ShieldCheck': return ShieldCheck;
      case 'Zap': return Zap;
      case 'HeartHandshake': return HeartHandshake;
      default: return Target;
    }
  };

  return (
    <div className="space-y-6">
      <div className="p-4 rounded-xl border flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
        style={{
          backgroundColor: 'var(--color-primary-light)',
          borderColor: 'var(--color-primary-border)'
        }}
      >
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-[#00A254] text-white">
            <Target className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-base" style={{ color: 'var(--text-heading)' }}>
              Championing the Adyen Formula
            </h3>
            <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
              How candidate mindset aligns with Adyen's core engineering principles
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs font-bold px-3 py-1.5 rounded-lg bg-[#00A254]/20 text-[#00A254]">
          <CheckCircle2 className="w-4 h-4" />
          <span>Formula Alignment Score: 100%</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {candidateData.adyenFormula.map((tenet) => {
          const Icon = getIcon(tenet.iconName);
          const isSelected = selectedTenet.id === tenet.id;
          return (
            <div
              key={tenet.id}
              onClick={() => setSelectedTenet(tenet)}
              className="card-adyen cursor-pointer relative overflow-hidden transition-all duration-200"
              style={{
                borderColor: isSelected ? 'var(--color-primary)' : 'var(--border-color)',
                boxShadow: isSelected ? 'var(--shadow-md)' : 'none'
              }}
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-2.5">
                  <div className={`p-2 rounded-lg ${isSelected ? 'bg-[#00A254] text-white' : 'bg-gray-100 dark:bg-gray-800 text-[#00A254]'}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm" style={{ color: 'var(--text-heading)' }}>
                    {tenet.title}
                  </h4>
                </div>
                {isSelected && (
                  <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-[#00A254] text-white">
                    Active Focus
                  </span>
                )}
              </div>

              <blockquote className="text-xs italic mb-3 pl-3 border-l-2" style={{ borderColor: 'var(--color-primary)', color: 'var(--text-muted)' }}>
                "{tenet.quote}"
              </blockquote>

              <div className="space-y-2 text-xs">
                <div>
                  <span className="font-bold font-mono text-[11px]" style={{ color: 'var(--color-primary)' }}>
                    CANDIDATE ALIGNMENT:
                  </span>
                  <p className="mt-0.5" style={{ color: 'var(--text-main)' }}>
                    {tenet.candidateAlignment}
                  </p>
                </div>

                <div className="pt-2 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
                  <span className="font-bold font-mono text-[10px]" style={{ color: 'var(--text-muted)' }}>
                    REAL-WORLD EXAMPLE:
                  </span>
                  <p className="mt-0.5 text-emerald-700 dark:text-emerald-400 font-medium">
                    ✔ {tenet.practicalExample}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
