import React, { Component } from 'react'
import './ProjectsContainer.css'
import ProjectComponent from '../ProjectComponent'
import javaLogo from '../../images/java-logo.webp'
import jsLogo from '../../images/js-logo.webp'
import nodeLogo from '../../images/node-logo.webp'
import reactLogo from '../../images/react-logo.webp'
import htmlLogo from '../../images/html-logo.webp'
import cssLogo from '../../images/css-logo.webp'
import pythonLogo from '../../images/python-logo.webp'
import csharpLogo from '../../images/c-sharp-logo.webp'
import unityLogo from '../../images/unity-logo.webp'

export default class ProjectsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: [
        {
          name: 'RJL Home Improvements Website',
          link: 'https://rjlhomeimprovements.com/',
          repoLink: 'https://github.com/kevinrlutz/rjlhomeimprovements',
          skillImages: [reactLogo, jsLogo],
          description:
            'Website for my father\'s home improvement company. Features a gallery of past projects, a contact form, and information about the company. Built with React and deployed on DigitalOcean.',
        },
        {
          name: 'Appointment Management System',
          link: 'https://lutz-node-appt-manager.herokuapp.com/',
          repoLink: 'https://github.com/kevinrlutz/node-admin-service',
          skillImages: [nodeLogo, jsLogo],
          description:
            'Node.js application used by an administrator who manages users and their associated appointments. Uses custom REST APIs to implement CRUD operations for users and appointments. Created with Node.js, Express, and MongoDB. Default username and password can be found in the GitHub repo.',
        },
        {
          name: 'Pace Eats (Android)',
          link: 'https://github.com/paceuniversity/cs389f2021team2',
          repoLink: undefined,
          skillImages: [javaLogo],
          description:
            'Android app used to track Calorie intake and carbon emissions associated with foods eaten (specifically at Pace University). Created with a team of 3 other students using Scrum agile methodology for CS389: Software Engineering course at Pace University. Built with Java, Android Studio, and Firebase.',
        },
        {
          name: 'Darts Scoreboard',
          link: 'https://darts-scoreboard-nine.vercel.app',
          repoLink: 'https://github.com/kevinrlutz/DartsScoreboard',
          skillImages: [reactLogo, jsLogo],
          description:
            'Mobile and web application built with React Native that allows users to track their scores in darts. ',
        },
        {
          name: 'Weather Web App',
          link: 'https://codepen.io/kevinlutz/full/abJxxyo',
          repoLink: undefined,
          skillImages: [reactLogo, jsLogo],
          description:
            'Weather app created using React and OpenWeatherMap API. ',
        },
        {
          name: 'Image Gallery',
          link: 'https://codepen.io/kevinlutz/full/BaRBgvM',
          repoLink: undefined,
          skillImages: [reactLogo, jsLogo],
          description: 'Basic image gallery web app made with React.',
        },
        {
          name: 'Blackjack',
          link: 'https://mega.nz/file/UKpSUTbT#Dc5VyOGMWsu359F0SAXyJ7S6HIbSScDnD5MMPRGHwDQ',
          repoLink: undefined,
          skillImages: [pythonLogo],
          description:
            'Fully-featured console based Blackjack game written in Python.',
        },
        {
          name: 'Password Generator',
          link: 'https://mega.nz/file/cHIHhJzZ#18S49YGTEwDJ1A6mrjG5FmfEW7VfMfpbR4IgKvnPK14',
          repoLink: undefined,
          skillImages: [pythonLogo],
          description: 'Simple password generator. My first Python project.',
        },
        {
          name: 'React Calculator',
          link: 'https://codepen.io/kevinlutz/full/abJxmrm',
          repoLink: undefined,
          skillImages: [reactLogo, jsLogo],
          description: 'Very basic calculator made with React.',
        },
        {
          name: 'Simple Puzzle Challenge Game ',
          link: 'https://mega.nz/file/4PgDCZxQ#V9kRFMAaBOfsHnBt4WwXeeDXwFXmVIr8z7npEOmF-8E',
          repoLink: undefined,
          skillImages: [unityLogo, csharpLogo],
          description:
            'Game me and a friend are making using the Unity game engine. Complete simple puzzles and movement-based challenges, similar to the Portal series. ',
        }
      ],
      showMore: false,
      showMoreButtonText: '▼'
    }
    this.toggleShowMore = this.toggleShowMore.bind(this)
  }

  toggleShowMore() {
    if (this.state.showMore) {
        this.setState(({
            showMore: false,
            showMoreButtonText: '▼'
        }))
    } else {
        this.setState(({
            showMore: true,
            showMoreButtonText: '▲'
        }))
    }
  }

  render() {
    return (
      <div className="projects-container">
        <div className="centered">
          <p className='left-align-mobile side-margins'>
            Below you can find some examples of my work. Most are finished
            projects, but some are still works in progress. Click on a project's 
            title to check it out!
          </p>
        </div>
        <br />
        <div className="side-margins">
          {this.state.projects.map((project, index) => {
            return (
              <ProjectComponent
                key={project.name}
                name={project.name}
                link={project.link}
                repoLink={project.repoLink}
                skillImages={project.skillImages}
                description={project.description}
                className={ index > 5 && this.state.showMore === false ? 'hidden' : 'project-component' }
              />
            )
          })}
          <div className='centered'>
            <button id='toggleShowMoreButton' onClick={this.toggleShowMore}>{this.state.showMoreButtonText}</button>
          </div>
        </div>
      </div>
    )
  }
}
