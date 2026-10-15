import { useApp } from '../context/AppContext';
import { useT } from '../i18n/translations';

export default function About() {
  const { lang } = useApp();
  const T = useT(lang);
  const a = T.about;
  return (
    <section id="about">
      <div className="container">
        <div className="sec-header">
          <div className="sec-eyebrow">{a.eyebrow}</div>
          <div className="sec-title">{a.title}</div>
        </div>
        <div className="about-grid">
          <p className="about-body">{a.body}</p>
          <div className="edu-card">
            <div className="edu-card-eyebrow">{a.edu.eyebrow}</div>
            <div className="edu-degree">{a.edu.degree}</div>
            <div className="edu-uni">{a.edu.uni}</div>
            <div className="edu-year">{a.edu.year}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
