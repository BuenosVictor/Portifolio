import './index.css';
import { Header } from './Header-component/Header.js'
import { Introduction } from './Introduction-component/Introduction.js'
import { ProjectsCarousel } from './ProjectsCarousel-component/ProjectsCarousel.js';


function App() {
  return (



    <div className="App">
      <Header />
      <Introduction />
      <ProjectsCarousel />
    </div>
  );
}

export default App;
