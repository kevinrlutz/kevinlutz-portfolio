import React from 'react'
import './WelcomeComponent.css'
import portraitImage from '../images/header-img.webp'

export default function WelcomeComponent() {
  return (
    <div>
        <div className='welcome-component'>
          <img src={portraitImage} className='mobile-header-img' width={"100"} height={"175"} alt='' />
          <h1>Welcome!</h1>
          <br />
          <p>
            I am a highly skilled and motivated software developer dedicated to
            delivering robust IT solutions using cutting-edge technology. My
            expertise includes building REST APIs with Spring Boot and Node.js,
            proficiency in Java (with a specialization in Spring Boot) and
            JavaScript (including Node.js, Vue, React, Angular, and TypeScript),
            as well as web technologies like CSS and HTML. I'm a cum laude
            graduate from Pace University's Seidenberg School of Computer
            Science with a Bachelor's degree in Computer Science. Complementing
            my formal education, I've earned certifications from platforms like
            Udemy, HackerRank, LinkedIn, and freeCodeCamp.org. My goal is to
            continuously enhance my development skills and deliver exceptional
            results. Feel free to <a href="#contact">contact me</a> to discuss potential projects.
          </p>
        </div>
        <img className='portrait-img' src={portraitImage} alt="Portrait of me" />
    </div>
  )
}
