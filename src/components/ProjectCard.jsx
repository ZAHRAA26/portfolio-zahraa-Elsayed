
export default function ProjectCard({ project, techLabel }) {
  const { id, name, type, github, live, desc, techniques, tags } = project;
  return (
    <div className="pcard">
      <div className="pcard-img">
        <img
          src={project.image}
          alt={project.name}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div className="pcard-body">
        <div className="pcard-top">
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <div className="pcard-name">{name}</div>
            <div className="pcard-type">{type}</div>
          </div>
          <div className="pcard-links">
            {github && (
              <a
                className="plink"
                href={github}
                target="_blank"
                rel="noreferrer"
              >
                ↗ GitHub
              </a>
            )}
            {live && (
              <a
                className="plink live"
                href={live}
                target="_blank"
                rel="noreferrer"
              >
                ↗ Live
              </a>
            )}
          </div>
        </div>
        <p className="pcard-desc">{desc}</p>
        <div className="tech-eyebrow">{techLabel}</div>
        <ul className="tech-list">
          {techniques.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
        <div className="proj-tags">
          {tags.map((t) => (
            <span className="proj-tag" key={t}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
