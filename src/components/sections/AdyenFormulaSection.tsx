import React from 'react';
import { FormulaMatrix } from '../FormulaMatrix';

export const AdyenFormulaSection: React.FC = () => {
  return (
    <section id="adyen-formula" className="space-y-6 pt-6 border-t" style={{ borderColor: 'var(--border-color)' }}>
      <FormulaMatrix />
    </section>
  );
};
