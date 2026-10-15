import { useApp } from '../context/AppContext';
import { useT } from '../i18n/translations';

export default function Skills() {
  const { lang } = useApp();
  const T = useT(lang);
  const s = T.skills;
  return (
    <section id="skills">
      <div className="container">
        <div className="sec-header">
          <div className="sec-eyebrow">{s.eyebrow}</div>
          <div className="sec-title">{s.title}</div>
        </div>
        <div className="skills-grid">
          {s.groups.map((g) => (
            <div className="skill-group" key={g.title}>
              <div className="skill-group-title">{g.title}</div>
              <div className="tags">
                {g.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
