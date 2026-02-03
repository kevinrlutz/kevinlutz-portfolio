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
        <h1>ABOUT ME</h1>
        <br />
        <p>
          Full-stack software engineer based in New York with over three years of experience building scalable, cloud-native applications in enterprise environments. Holds a Bachelor of Science in Computer Science from Pace University, graduating Cum Laude in 2022. Core technical proficiencies include Java, C#/.NET, React, Node.js, and modern microservice architectures. Demonstrated success in modernizing legacy systems, automating workflows, and leading cross-functional development initiatives. Recognized for technical leadership, strong client collaboration, and delivering measurable business impact in Agile environments. Open to discussing potential projects.
        </p>
      </div>
      <img className='portrait-img' src={portraitImage} alt='Portrait of me' />
    </div>
  )
}
