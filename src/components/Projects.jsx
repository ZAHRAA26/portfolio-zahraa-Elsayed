import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { useT } from '../i18n/translations';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const cats = ['all','react','html','redux'];

export default function Projects() {
  const { lang } = useApp();
  const T = useT(lang);
  const p = T.projects;
  const [active, setActive] = useState('all');

  const visible = projects.filter(proj =>
    active === 'all' ? true : proj.cat.includes(active)
  );

  return (
    <section id="projects">
      <div className="container">
        <div className="sec-header">
          <div className="sec-eyebrow">{p.eyebrow}</div>
          <div className="sec-title">{p.title}</div>
          <div className="sec-subtitle">{p.subtitle}</div>
        </div>
        <div className="filter-bar">
          {p.filters.map((label, i) => (
            <button
              key={cats[i]}
              className={`filter-btn${active === cats[i] ? ' active' : ''}`}
              onClick={() => setActive(cats[i])}
            >{label} {cats[i]==='all' ? `(${projects.length})` : ''}</button>
          ))}
        </div>
        <div className="projects-grid">
          {visible.map(proj => (
            <ProjectCard key={proj.id} project={proj} techLabel={p.techniquesLabel} />
          ))}
        </div>
      </div>
    </section>
  );
}
