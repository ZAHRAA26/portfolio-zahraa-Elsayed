const langs = [
  { name: 'Arabic', sub: 'Native speaker', dots: 5 },
  { name: 'English', sub: 'Professional — technical reading & writing', dots: 4 },
  { name: 'French', sub: 'Basic', dots: 2 },
];

export default function Education() {
  return (
    <section id="education" className="education-bg">
      <div className="container">
        <div className="sec-header">
          <div className="sec-eyebrow">Background</div>
          <div className="sec-title">Education & Languages</div>
        </div>
        <div className="two-col">
          <div className="edu-card">
            <div className="edu-emoji">🎓</div>
            <div className="edu-degree">Bachelor of Engineering</div>
            <div className="edu-uni">Faculty of Engineering — Tanta University</div>
            <div className="edu-year">2012 – 2017</div>
            <p className="edu-note">
              Engineering background provides strong analytical thinking, systematic problem-solving,
              and technical precision — directly applicable to frontend architecture and debugging complex state flows.
            </p>
          </div>
          <div className="lang-card">
            <div className="lang-title">Languages</div>
            <div className="lang-list">
              {langs.map((l) => (
                <div className="lang-row" key={l.name}>
                  <div>
                    <div className="lang-name">{l.name}</div>
                    <div className="lang-sub">{l.sub}</div>
                  </div>
                  <div className="lang-dots">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <div key={n} className={`dot${n <= l.dots ? ' filled' : ''}`} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="bilingual-badge">
              <div className="bilingual-badge-title">Bilingual Developer</div>
              <div className="bilingual-badge-sub">
                Built Arabic/English UI systems with RTL support — see the Portfolio project.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
