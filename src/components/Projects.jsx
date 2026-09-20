import React, { useState } from 'react';
import { ExternalLink, AlertCircle, CheckCircle, Zap } from 'lucide-react';
import { GithubIcon } from './Icons';
import { PROJECTS_DATA } from '../data/portfolioData';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Real-Time WebRTC', 'MERN Full Stack', 'Fintech & Analytics', 'Enterprise Backend'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="reveal-on-scroll">
          <div className="section-badge">
            <span>[03] SELECTED WORK • CODE</span>
          </div>

          <h2 className="section-title">
            Products built to <span className="italic-serif">solve real friction.</span>
          </h2>

          <p className="section-subtitle" style={{ marginBottom: '2.5rem' }}>
            Detailed architectural breakdown of deployed applications, highlighting the 
            specific problem, technical solution, and measurable impact.
          </p>
        </div>

        {/* Category Filters */}
        <div className="projects-filter-bar reveal-on-scroll reveal-delay-1">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Stack */}
        <div className="projects-stack">
          {filteredProjects.map((project) => (
            <article key={project.id} className="project-card reveal-on-scroll reveal-scale">
              <div className="project-top-row">
                <div>
                  <div className="project-category">{project.category}</div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-tagline">{project.tagline}</p>
                </div>

                <div className="project-links-row">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link-btn project-link-demo"
                    >
                      <span>Live App</span>
                      <ExternalLink size={13} />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link-btn project-link-github"
                    >
                      <GithubIcon size={14} />
                      <span>Code ↗</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Problem / Solution / Impact Grid (Editorial format from devshouri.in) */}
              <div className="psi-grid">
                <div className="psi-col problem">
                  <h4>
                    <AlertCircle size={13} />
                    Problem
                  </h4>
                  <p>{project.problem}</p>
                </div>

                <div className="psi-col solution">
                  <h4>
                    <CheckCircle size={13} />
                    Engineered Solution
                  </h4>
                  <p>{project.solution}</p>
                </div>

                <div className="psi-col impact">
                  <h4>
                    <Zap size={13} />
                    Real-World Impact
                  </h4>
                  <p>{project.impact}</p>
                </div>
              </div>

              {/* Key Metrics Chips */}
              <div className="project-metrics-row">
                {project.metrics.map((metric, i) => (
                  <span key={i} className="project-metric-badge">
                    ✦ {metric}
                  </span>
                ))}
              </div>

              {/* Technology Tags */}
              <div className="exp-skills-row">
                {project.tags.map((tag) => (
                  <span key={tag} className="tech-chip">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
