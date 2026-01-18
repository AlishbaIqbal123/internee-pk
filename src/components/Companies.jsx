import React from 'react';
import './Companies.css';

const Companies = () => {
  const companies = [
    { name: 'Tech Innovations', logo: '🏢', category: 'Technology' },
    { name: 'Digital Growth Co.', logo: '🏢', category: 'Marketing' },
    { name: 'Analytics Pro', logo: '🏢', category: 'Data Science' },
    { name: 'Creative Solutions', logo: '🏢', category: 'Design' },
    { name: 'Finance Leaders', logo: '🏢', category: 'Finance' },
    { name: 'Health Plus', logo: '🏢', category: 'Healthcare' }
  ];

  return (
    <section className="companies-section" id="companies">
      <div className="container">
        <div className="section-header">
          <h2>Top Companies</h2>
          <p>Join leading companies that trust internee.pk to find talented interns</p>
        </div>
        
        <div className="companies-grid">
          {companies.map((company, index) => (
            <div className="company-card" key={index}>
              <div className="company-logo">{company.logo}</div>
              <h3>{company.name}</h3>
              <p className="company-category">{company.category}</p>
              <button className="btn-secondary">View Openings</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;