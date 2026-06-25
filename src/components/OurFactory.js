// FactorySections.jsx
import React, { useState } from 'react';
import './FactorySections.css'; // optional styles

const FactorySections = () => {
  // Data from your image
  const sections = [
    { id: 'inspection', label: 'Fabric Inspection', icon: '🔍' },
    { id: 'sewing', label: 'Sewing', icon: '🧵' },
    { id: 'cutting', label: 'Cutting', icon: '✂️' },
    { id: 'qa', label: 'Quality Assurance', icon: '✅' },
    { id: 'sustainability', label: 'Sustainability & Development', icon: '🌱' },
    { id: 'packaging', label: 'Packaging', icon: '📦' },
  ];

  const [activeId, setActiveId] = useState('inspection');

  return (
    <div className="factory-container">
      <header className="factory-header">
        <h1>🏭 Our Factory Components</h1>
      </header>

      <div className="sections-grid">
        {sections.map((section) => (
          <SectionCard
            key={section.id}
            section={section}
            isActive={activeId === section.id}
            onClick={() => setActiveId(section.id)}
          />
        ))}
      </div>

      <div className="active-detail">
        <h3>Currently Viewing:</h3>
        <p>{sections.find(s => s.id === activeId)?.label}</p>
      </div>
    </div>
  );
};

// Section Card Component
const SectionCard = ({ section, isActive, onClick }) => {
  return (
    <div 
      className={`section-card ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      <div className="section-icon">{section.icon}</div>
      <h3 className="section-label">{section.label}</h3>
      {isActive && <span className="active-badge">● Active</span>}
    </div>
  );
};

export default FactorySections;