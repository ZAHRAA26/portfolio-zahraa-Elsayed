import { useApp } from '../context/AppContext';
import { useT } from '../i18n/translations';

export default function Footer() {
  const { lang } = useApp();
  const T = useT(lang);
  const f = T.footer;
  const year = new Date().getFullYear();
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-cta-title">{f.cta}</div>
        <p className="footer-cta-sub">{f.sub}</p>
        <div className="footer-links">
          <a href="mailto:Zahraa.elsayed95@gmail.com" className="footer-link footer-link-filled">✉️ Zahraa.elsayed95@gmail.com</a>
          <a href="tel:01279309853" className="footer-link footer-link-ghost">📞 01279309853</a>
          <a href="https://github.com/ZAHRAA26" target="_blank" rel="noreferrer" className="footer-link footer-link-ghost">GitHub</a>
          <a href="https://linkedin.com/in/zahraa-elsayed-06257a153" target="_blank" rel="noreferrer" className="footer-link footer-link-ghost">LinkedIn</a>
        </div>
        <div className="footer-bottom">
          <span className="footer-copy">© {year} Zahraa Elsayed Hassan. {f.built}.</span>
          <span className="footer-copy">📍 Tanta, Egypt</span>
        </div>
      </div>
    </footer>
  );
}
