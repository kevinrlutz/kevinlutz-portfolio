import './App.css';
import FooterComponent from './components/FooterComponent';
import SectionTitle from './components/SectionTitle';
import TitleComponent from './components/TitleComponent';
import AboutContainer from './components/containers/AboutContainer';
import ContactContainer from './components/containers/ContactContainer';
import NavContainer from './components/containers/NavContainer';
import ProjectsContainer from './components/containers/ProjectsContainer';
import SkillsContainer from './components/containers/SkillsContainer';

import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      darkMode: false
    }

    this.toggleTheme = this.toggleTheme.bind(this)
  }
  
  toggleTheme() {
    if (this.state.darkMode) {
      document.documentElement.style.setProperty('--link-color', '#003E60')
      document.documentElement.style.setProperty('--header-color', '#003E60')
      document.documentElement.style.setProperty('--opposite-header-color', '#1EE6A3')
      document.documentElement.style.setProperty('--body-color', '#222')
      document.documentElement.style.setProperty('--bg-color', '#fff')
      this.setState({
        darkMode: false
      })
    } else {
      document.documentElement.style.setProperty('--link-color', '#1EE6A3')
      document.documentElement.style.setProperty('--header-color', '#1EE6A3')
      document.documentElement.style.setProperty('--opposite-header-color', '#003E60')
      document.documentElement.style.setProperty('--body-color', '#f9f9f9')
      document.documentElement.style.setProperty('--bg-color', '#222')
      this.setState({
        darkMode: true
      })
    }
  }

  componentDidMount() {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      this.toggleTheme()
    }
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TitleComponent/>
          <NavContainer/>
          <button className='theme-toggle' onClick={this.toggleTheme}>Toggle Theme</button>
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
}