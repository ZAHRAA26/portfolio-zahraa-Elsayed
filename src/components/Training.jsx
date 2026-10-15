import { useApp } from '../context/AppContext';
import { useT } from '../i18n/translations';

export default function Training() {
  const { lang } = useApp();
  const T = useT(lang);
  const tr = T.training;
  return (
    <section id="training">
      <div className="container">
        <div className="sec-header">
          <div className="sec-eyebrow">{tr.eyebrow}</div>
          <div className="sec-title">{tr.title}</div>
        </div>
        <div className="training-grid">
          <div className="tl-list">
            {tr.items.map((item, i) => (
              <div className="tl-item" key={i}>
                <div className="tl-left">
                  <div className="tl-dot" />
                  <div className="tl-line" />
                </div>
                <div className="tl-body">
                  <div className="tl-org">{item.org}</div>
                  <div className="tl-sub">{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="lang-card">
            <div className="lang-card-title">{tr.langs.title}</div>
            {tr.langs.items.map((l) => (
              <div className="lang-row" key={l.n}>
                <span className="lang-name">{l.n}</span>
                <span className="lang-level">{l.l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
