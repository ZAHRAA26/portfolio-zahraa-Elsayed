import './styles/index.css';
import { AppProvider } from './context/AppContext';
import Nav      from './components/Nav';
import Hero     from './components/Hero';
import About    from './components/About';
import Skills   from './components/Skills';
import Projects from './components/Projects';
import Training from './components/Training';
import Footer   from './components/Footer';

export default function App() {
  return (
    <AppProvider>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Training />
      <Footer />
    </AppProvider>
  );
}
