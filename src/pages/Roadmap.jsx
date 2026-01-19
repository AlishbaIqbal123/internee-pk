import React, { useState } from 'react';
import DashboardSidebar from '../components/DashboardSidebar';
import './Roadmap.css';

const Roadmap = () => {
  const [selectedRoadmap, setSelectedRoadmap] = useState('Web Development');

  const roadmaps = [
    'Web Development',
    'Mobile Development',
    'Data Science',
    'DevOps',
    'Cybersecurity',
    'Cloud Computing',
    'Blockchain',
    'Game Development',
    'UI/UX Design',
    'Artificial Intelligence'
  ];

  const roadmapData = {
    'Web Development': {
      'Internet & How the Web Works': [
        'DNS & Domain Names',
        'HTTP/HTTPS & Request-Response Cycle',
        'Browsers & Rendering Engines',
        'Networking Basics (TCP/IP, FTP, SSH)',
        'APIs (REST, GraphQL, WebSockets)',
        'Web Security Basics (CORS, CSRF, XSS, SQL Injection)'
      ],
      'HTML': [
        'HTML Syntax & Structure',
        'Semantic HTML',
        'Forms & Validations',
        'Tables & Accessibility',
        'SEO Best Practices (Meta tags, Open Graph, Schema Markup)'
      ],
      'CSS': [
        'CSS Box Model',
        'Selectors & Specificity',
        'Flexbox & Grid Layout',
        'CSS Animations & Transitions',
        'CSS Preprocessors (SASS, LESS)',
        'Responsive Design Principles'
      ],
      'JavaScript Fundamentals': [
        'Variables, Data Types, Operators',
        'Functions & Scope',
        'Arrays & Objects',
        'DOM Manipulation',
        'Events & Event Handling',
        'ES6+ Features (Arrow Functions, Destructuring, Modules)'
      ],
      'Frontend Frameworks': [
        'React (Components, Hooks, State Management)',
        'Vue.js or Angular',
        'State Management (Redux, Context API)',
        'Routing (React Router, Vue Router)',
        'Server-Side Rendering (Next.js, Nuxt.js)'
      ],
      'Backend Development': [
        'Node.js & Express.js',
        'Authentication (JWT, OAuth, Sessions)',
        'RESTful APIs & GraphQL',
        'WebSockets & Real-Time Communication',
        'Microservices Architecture'
      ],
      'Databases': [
        'SQL Databases (PostgreSQL, MySQL, SQLite)',
        'NoSQL Databases (MongoDB, Redis, Firestore)',
        'ORMs & Query Builders (Drizzle, Prisma, Knex.js)',
        'Database Design & Normalization'
      ],
      'Version Control & Deployment': [
        'Git & GitHub (Branching, Merging, Pull Requests)',
        'CI/CD (GitHub Actions, Jenkins, Vercel, Netlify)',
        'Containerization (Docker, Kubernetes)',
        'Cloud Platforms (AWS, Firebase, DigitalOcean)'
      ],
      'Advanced Topics': [
        'Web Performance Optimization (Lazy Loading, Caching, Code Splitting)',
        'Testing (Jest, Cypress, Playwright)',
        'Progressive Web Apps (PWAs)',
        'Web Accessibility (WCAG)'
      ]
    },
    'Mobile Development': {
      'Fundamentals': [
        'Mobile App Architecture',
        'Platform Differences (iOS vs Android)',
        'Mobile UI/UX Principles',
        'App Store Guidelines'
      ],
      'Native Development': [
        'iOS: Swift & SwiftUI',
        'Android: Kotlin & Jetpack Compose',
        'Platform-Specific APIs',
        'Native Performance Optimization'
      ],
      'Cross-Platform Frameworks': [
        'React Native',
        'Flutter',
        'Xamarin',
        'Ionic'
      ],
      'Mobile Backend': [
        'RESTful APIs for Mobile',
        'Push Notifications',
        'Offline Data Storage',
        'Authentication & Security'
      ],
      'Testing & Deployment': [
        'Mobile App Testing',
        'Beta Testing (TestFlight, Google Play Beta)',
        'App Store Submission',
        'App Analytics & Monitoring'
      ]
    },
    'Data Science': {
      'Foundations': [
        'Mathematics (Statistics, Linear Algebra, Calculus)',
        'Programming (Python, R)',
        'Data Structures & Algorithms',
        'SQL for Data Analysis'
      ],
      'Data Collection & Cleaning': [
        'Web Scraping',
        'APIs & Data Extraction',
        'Data Cleaning & Preprocessing',
        'Data Validation'
      ],
      'Data Analysis': [
        'Exploratory Data Analysis (EDA)',
        'Statistical Analysis',
        'Data Visualization (Matplotlib, Seaborn, Plotly)',
        'Pandas & NumPy'
      ],
      'Machine Learning': [
        'Supervised Learning (Regression, Classification)',
        'Unsupervised Learning (Clustering, Dimensionality Reduction)',
        'Model Evaluation & Validation',
        'Feature Engineering'
      ],
      'Deep Learning': [
        'Neural Networks Fundamentals',
        'TensorFlow & PyTorch',
        'CNN, RNN, LSTM',
        'Transfer Learning'
      ],
      'Big Data': [
        'Hadoop & Spark',
        'Distributed Computing',
        'Data Warehousing',
        'ETL Pipelines'
      ],
      'Tools & Deployment': [
        'Jupyter Notebooks',
        'MLOps',
        'Model Deployment',
        'Cloud Platforms (AWS SageMaker, Google Colab)'
      ]
    },
    'DevOps': {
      'Fundamentals': [
        'Linux/Unix Basics',
        'Shell Scripting (Bash)',
        'System Administration',
        'Networking Basics'
      ],
      'Version Control': [
        'Git Advanced',
        'GitHub/GitLab Workflows',
        'Branching Strategies',
        'Code Review Practices'
      ],
      'CI/CD': [
        'Jenkins',
        'GitHub Actions',
        'GitLab CI/CD',
        'CircleCI, Travis CI'
      ],
      'Containerization': [
        'Docker',
        'Docker Compose',
        'Kubernetes',
        'Container Orchestration'
      ],
      'Cloud Platforms': [
        'AWS (EC2, S3, Lambda, CloudFormation)',
        'Azure',
        'Google Cloud Platform',
        'Infrastructure as Code (Terraform, Ansible)'
      ],
      'Monitoring & Logging': [
        'Prometheus & Grafana',
        'ELK Stack (Elasticsearch, Logstash, Kibana)',
        'Application Performance Monitoring',
        'Alerting Systems'
      ],
      'Security': [
        'Security Best Practices',
        'Vulnerability Scanning',
        'Secrets Management',
        'Compliance & Auditing'
      ]
    },
    'Cybersecurity': {
      'Fundamentals': [
        'Network Security',
        'Operating System Security',
        'Cryptography Basics',
        'Security Policies & Procedures'
      ],
      'Threats & Vulnerabilities': [
        'OWASP Top 10',
        'Common Attack Vectors',
        'Vulnerability Assessment',
        'Penetration Testing'
      ],
      'Security Tools': [
        'Wireshark',
        'Nmap',
        'Metasploit',
        'Burp Suite'
      ],
      'Security Practices': [
        'Secure Coding',
        'Security Auditing',
        'Incident Response',
        'Forensics'
      ],
      'Compliance': [
        'GDPR',
        'HIPAA',
        'PCI DSS',
        'ISO 27001'
      ],
      'Specializations': [
        'Ethical Hacking',
        'Security Architecture',
        'Cloud Security',
        'IoT Security'
      ]
    },
    'Cloud Computing': {
      'Fundamentals': [
        'Cloud Computing Models (IaaS, PaaS, SaaS)',
        'Cloud Deployment Models',
        'Virtualization',
        'Cloud Architecture Patterns'
      ],
      'AWS': [
        'EC2, S3, RDS',
        'Lambda & Serverless',
        'CloudFormation & Terraform',
        'VPC & Networking'
      ],
      'Azure': [
        'Azure Virtual Machines',
        'Azure Storage',
        'Azure Functions',
        'Azure DevOps'
      ],
      'Google Cloud': [
        'Compute Engine',
        'Cloud Storage',
        'Cloud Functions',
        'Kubernetes Engine'
      ],
      'Cloud Services': [
        'Database Services',
        'Message Queues',
        'CDN & Edge Computing',
        'Monitoring & Logging'
      ],
      'DevOps in Cloud': [
        'Infrastructure as Code',
        'Automated Deployment',
        'Scaling & Load Balancing',
        'Disaster Recovery'
      ]
    },
    'Blockchain': {
      'Fundamentals': [
        'Blockchain Basics',
        'Cryptography & Hashing',
        'Consensus Mechanisms',
        'Smart Contracts'
      ],
      'Blockchain Platforms': [
        'Ethereum',
        'Hyperledger',
        'Binance Smart Chain',
        'Polkadot'
      ],
      'Smart Contract Development': [
        'Solidity',
        'Truffle & Hardhat',
        'Testing Smart Contracts',
        'Deployment & Interaction'
      ],
      'DeFi & dApps': [
        'Decentralized Finance',
        'dApp Development',
        'Web3 Integration',
        'Token Standards (ERC-20, ERC-721)'
      ],
      'Tools & Testing': [
        'Remix IDE',
        'MetaMask',
        'Ganache',
        'Blockchain Testing'
      ]
    },
    'Game Development': {
      'Fundamentals': [
        'Game Design Principles',
        'Game Engines Overview',
        'Game Physics',
        'Game Mathematics'
      ],
      'Game Engines': [
        'Unity (C#)',
        'Unreal Engine (C++/Blueprints)',
        'Godot',
        'GameMaker Studio'
      ],
      'Game Programming': [
        'Game Loop',
        'State Management',
        'AI & Pathfinding',
        'Collision Detection'
      ],
      'Graphics & Animation': [
        '2D Graphics',
        '3D Modeling Basics',
        'Animation Systems',
        'Shaders & Rendering'
      ],
      'Audio': [
        'Sound Design',
        'Music Integration',
        'Audio Programming',
        'Spatial Audio'
      ],
      'Publishing': [
        'Game Testing',
        'Performance Optimization',
        'Platform Publishing',
        'Marketing & Monetization'
      ]
    },
    'UI/UX Design': {
      'Fundamentals': [
        'Design Principles',
        'Color Theory',
        'Typography',
        'Layout & Composition'
      ],
      'User Research': [
        'User Personas',
        'User Journey Mapping',
        'Usability Testing',
        'A/B Testing'
      ],
      'Design Tools': [
        'Figma',
        'Adobe XD',
        'Sketch',
        'InVision'
      ],
      'Prototyping': [
        'Wireframing',
        'Interactive Prototypes',
        'Design Systems',
        'Component Libraries'
      ],
      'Frontend Integration': [
        'HTML/CSS Basics',
        'Responsive Design',
        'Design Handoff',
        'Developer Collaboration'
      ],
      'Specializations': [
        'Mobile App Design',
        'Web Design',
        'Accessibility Design',
        'Motion Design'
      ]
    },
    'Artificial Intelligence': {
      'Fundamentals': [
        'AI Concepts & History',
        'Machine Learning Basics',
        'Neural Networks',
        'Mathematics for AI'
      ],
      'Machine Learning': [
        'Supervised Learning',
        'Unsupervised Learning',
        'Reinforcement Learning',
        'Model Evaluation'
      ],
      'Deep Learning': [
        'Neural Networks',
        'CNN for Computer Vision',
        'RNN & LSTM for NLP',
        'Transformers & BERT'
      ],
      'NLP': [
        'Text Processing',
        'Sentiment Analysis',
        'Language Models',
        'Chatbots & Conversational AI'
      ],
      'Computer Vision': [
        'Image Processing',
        'Object Detection',
        'Image Classification',
        'Face Recognition'
      ],
      'AI Tools & Frameworks': [
        'TensorFlow',
        'PyTorch',
        'Scikit-learn',
        'Hugging Face'
      ],
      'AI Ethics': [
        'Bias & Fairness',
        'Privacy & Security',
        'AI Governance',
        'Responsible AI'
      ]
    }
  };

  const getCurrentRoadmapData = () => {
    return roadmapData[selectedRoadmap] || {};
  };

  return (
    <div className="roadmap-page">
      <DashboardSidebar />

      <main className="roadmap-main">
        <div className="roadmap-header">
          <h1>Dashboard</h1>
          <div className="header-actions">
            <button className="icon-btn">☀️</button>
            <button className="icon-btn">🔔</button>
            <div className="user-profile-icon">👤</div>
          </div>
        </div>

        <div className="roadmap-content">
          <h2>Roadmap</h2>
          
          <div className="roadmap-container">
            <div className="roadmap-categories">
              {roadmaps.map((roadmap) => (
                <button
                  key={roadmap}
                  className={`roadmap-category-btn ${selectedRoadmap === roadmap ? 'active' : ''}`}
                  onClick={() => setSelectedRoadmap(roadmap)}
                >
                  {roadmap}
                </button>
              ))}
            </div>

            <div className="roadmap-details">
              <h3>{selectedRoadmap}</h3>
              {Object.entries(getCurrentRoadmapData()).map(([section, topics]) => (
                <div key={section} className="roadmap-section">
                  <h4>{section}</h4>
                  <div className="topics-grid">
                    {topics.map((topic, index) => (
                      <button key={index} className="topic-btn">
                        {topic}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Roadmap;
