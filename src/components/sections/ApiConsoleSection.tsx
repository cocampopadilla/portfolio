import React from 'react';
import { ApiPlayground } from '../ApiPlayground';

export const ApiConsoleSection: React.FC = () => {
  return (
    <section id="api-console" className="space-y-6 pt-6 border-t" style={{ borderColor: 'var(--border-color)' }}>
      <ApiPlayground />
    </section>
  );
};
