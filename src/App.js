import './App.css';
import FooterComponent from './components/FooterComponent';
import SectionTitle from './components/SectionTitle';
import TitleComponent from './components/TitleComponent';
import AboutContainer from './components/containers/AboutContainer';
import ContactContainer from './components/containers/ContactContainer';
import NavContainer from './components/containers/NavContainer';
import ProjectsContainer from './components/containers/ProjectsContainer';
import SkillsContainer from './components/containers/SkillsContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TitleComponent/>
        <NavContainer/>
      </header>
      <AboutContainer/>
      <a id="skills"></a>
      <SectionTitle sectionName="My Skills" />
      <SkillsContainer />
      <a id="projects"></a>
      <SectionTitle sectionName="Projects" />
      <ProjectsContainer />
      <a id='contact'></a>
      <SectionTitle sectionName="Contact Me" />
      <ContactContainer />
      <footer className='App-footer'>
        <FooterComponent />
      </footer>
    </div>
  );
}

export default App;
