import React from 'react'
import './WelcomeComponent.css'
import portraitImage from '../images/header-img.webp'

export default function WelcomeComponent() {
  return (
    <div>
      <div className='welcome-component'>
        <img
          src={portraitImage}
          className='mobile-header-img'
          width={'100'}
          height={'175'}
          alt=''
        />
        <h1>Welcome!</h1>
        <br />
        <p>
          I am a software developer with a Bachelor of Science in Computer
          Science from Pace University, graduating Cum Laude in 2022. I have
          experience working with a variety of programming languages, including
          Java, JavaScript, and TypeScript, and I am skilled in using frameworks
          like Spring Boot, React, and Angular. My technical expertise extends
          across full-stack development, cloud technologies, and agile
          methodologies. I have also developed personal projects, such as a
          full-stack appointment management system and an Android app for
          tracking calories and carbon footprints, which have allowed me to
          refine my problem-solving and teamwork skills. Feel free to{' '}
          <a href='#contact'>contact me</a> to discuss potential projects.
        </p>
      </div>
      <img className='portrait-img' src={portraitImage} alt='Portrait of me' />
    </div>
  )
}
