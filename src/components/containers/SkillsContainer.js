import React from 'react'
import SkillComponent from '../SkillComponent'
import javaLogo from '../../images/java-logo.webp'
import springLogo from '../../images/spring-logo.webp'
import csharpLogo from '../../images/c-sharp-logo.webp'
import jsLogo from '../../images/js-logo.webp'
import nodeLogo from '../../images/node-logo.webp'
import vueLogo from '../../images/vue-logo.webp'
import reactLogo from '../../images/react-logo.webp'
import htmlLogo from '../../images/html-logo.webp'
import cssLogo from '../../images/css-logo.webp'
import awsCert from '../../images/certifications/aws-ccp-cert.webp'
import scrumCert from '../../images/certifications/scrum-foundations-cert.webp'
import './SkillsContainer.css'


class SkillsContainer extends React.Component {
  render() {
    return (
        <div className='side-margins'>
            <div className='skills-container'>
                <SkillComponent skillName="Java" image={javaLogo}/>
                <SkillComponent skillName="Spring" image={springLogo}/>
                <SkillComponent skillName="C#" image={csharpLogo}/>
                <SkillComponent skillName="JavaScript" image={jsLogo}/>
                <SkillComponent skillName="Node.js" image={nodeLogo}/>
                <SkillComponent skillName="React" image={reactLogo}/>
                <SkillComponent skillName="Vue" image={vueLogo}/>
                <SkillComponent skillName="HTML" image={htmlLogo}/>
                <SkillComponent skillName="CSS" image={cssLogo}/>
            </div>
            <br />
            <div className='certs-container'>
                <a href="https://www.credly.com/badges/b18af136-2ae8-4c67-90cf-c5fe5f6e8764" target="_blank" rel='noreferrer'><img src={awsCert} alt="AWS Certified Cloud Practitioner" /></a>
                <a href="https://bcert.me/sjmckzgnh" target="_blank" rel='noreferrer'><img src={scrumCert} alt="Scrum Foundations" /></a>         
            </div>
        </div>
      )
  }
  
}

export default SkillsContainer