import './index.css';
import { Header } from './Header-component/Header.js'
import { Introduction } from './Introduction-component/Introduction.js'
import { ProjectsCarousel } from './ProjectsCarousel-component/ProjectsCarousel.js';
import { SkillsAndAboutMe } from './SkillsAndAboutMe-component/SkillsAndAboutMe.js';
import { Footer } from './Footer-component/Footer.js';

function App() {
  return (



    <div className="App">
      <Header />
      <Introduction />
      <ProjectsCarousel />
      <SkillsAndAboutMe />
      <Footer />
    </div>
  );
}

export default App;
