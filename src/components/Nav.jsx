import { useApp } from '../context/AppContext';
import { useT } from '../i18n/translations';

export default function Nav() {
  const { theme, lang, toggleTheme, toggleLang } = useApp();
  const T = useT(lang);
  return (
    <nav>
      <div className="nav-inner">
        <div className="nav-logo">Zahraa</div>
        <div className="nav-links">
          <a href="#about">{T.nav.about}</a>
          <a href="#skills">{T.nav.skills}</a>
          <a href="#projects">{T.nav.projects}</a>
          <a href="#training">{T.nav.training}</a>
          <a href="#footer">{T.nav.contact}</a>
        </div>
        <div className="nav-controls">
          <button className="icon-btn" onClick={toggleTheme} title="Toggle theme">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <button className="lang-btn" onClick={toggleLang}>
            {lang === 'en' ? 'ع' : 'EN'}
          </button>
          <a href="mailto:Zahraa.elsayed95@gmail.com" className="nav-cta">{T.nav.hire}</a>
        </div>
      </div>
    </nav>
  );
}
