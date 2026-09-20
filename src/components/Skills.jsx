import React from 'react';
import { SKILLS_CATEGORIES } from '../data/portfolioData';
import { 
  Code2, Terminal, Database, FileCode, Layout, 
  Server, Cpu, Zap, Network, Radio, ShieldCheck, 
  Layers, Palette, Smartphone, BarChart3, Workflow, 
  FolderTree, GitCommit, HardDrive, Video, Cloud, 
  GitBranch, Repeat, Image 
} from 'lucide-react';

const iconMap = {
  Code2, Terminal, Database, FileCode, Layout,
  Server, Cpu, Zap, Network, Radio, ShieldCheck,
  Layers, Palette, Smartphone, BarChart3, Workflow,
  FolderTree, GitCommit, HardDrive, Video, Cloud,
  GitBranch, Repeat, Image
};

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="reveal-on-scroll">
          <div className="section-badge">
            <span>[04] TECHNICAL MASTERY • STACK</span>
          </div>

          <h2 className="section-title">
            Technologies in my <span className="italic-serif">active arsenal.</span>
          </h2>

          <p className="section-subtitle" style={{ marginBottom: '3.5rem' }}>
            Tested and deployed technologies utilized across real-world enterprise applications, 
            academic research, and high-performance developer tooling.
          </p>
        </div>

        <div className="skills-categories-grid">
          {SKILLS_CATEGORIES.map((cat, idx) => (
            <div 
              key={cat.name} 
              className={`skill-category-card reveal-on-scroll reveal-scale reveal-delay-${(idx % 4) + 1}`}
            >
              <div className="skill-cat-title">
                <span>{cat.name}</span>
                <span className="cat-index">0{idx + 1}</span>
              </div>

              <div className="skills-items-list">
                {cat.skills.map((skill) => {
                  const IconComponent = iconMap[skill.icon] || Code2;
                  return (
                    <div key={skill.name} className="skill-item-row">
                      <div className="skill-name">
                        <IconComponent size={15} color="var(--accent-cyan)" />
                        <span>{skill.name}</span>
                      </div>
                      <span className="skill-level-badge">{skill.level}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
