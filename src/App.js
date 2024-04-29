import './App.css';
import SectionTitle from './components/SectionTitle';
import TitleComponent from './components/TitleComponent';
import AboutContainer from './components/containers/AboutContainer';
import NavContainer from './components/containers/NavContainer';
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
    </div>
  );
}

export default App;
