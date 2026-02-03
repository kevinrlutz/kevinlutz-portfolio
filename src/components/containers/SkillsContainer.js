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
import nodeCert from '../../images/certifications/node-course-cert.webp'
import vueCert from '../../images/certifications/vue-cert.webp'
import reactCert from '../../images/certifications/react-cert.webp'
import typescriptCert from '../../images/certifications/typescript-cert.webp'
import sbCert from '../../images/certifications/springboot-micro-cert.webp'
import testingSbCert from '../../images/certifications/springboot-test-cert.webp'
import hrJavaCert from '../../images/certifications/javabasic-cert.webp'
import hrJsCert from '../../images/certifications/jsbasic-cert.webp'
import rwdCert from '../../images/certifications/rwd-cert.webp'
import jsDsaCert from '../../images/certifications/jsalgorithms-cert.webp'
import './SkillsContainer.css'


class SkillsContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        viewButtonText: 'Show More',
        hideCerts: true
    }
    this.showMore = this.showMore.bind(this)
  }

  showMore() {
    if (this.state.viewButtonText === 'Show More') {
        this.setState({
            viewButtonText: 'Show Less',
            hideCerts: false
        })
    } else {
        this.setState({
            viewButtonText: 'Show More',
            hideCerts: true
        })
    }
  };

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
                <a href="https://www.udemy.com/certificate/UC-317a97da-9d72-4f40-9ca3-d63ba06d3680/" target="_blank" rel='noreferrer'><img src={nodeCert} alt="Node.js" /></a>
                <a href="https://www.udemy.com/certificate/UC-3231bf8a-ee5b-4aeb-b1ca-8af05618c655/" target="_blank" rel='noreferrer'><img src={vueCert} alt="Vue" /></a>
                <a href="https://www.udemy.com/certificate/UC-b904d9f3-2ea7-471c-a37c-3ddd739191be/" target="_blank" rel='noreferrer'><img src={reactCert} alt="React" /></a>
                <a href="https://www.udemy.com/certificate/UC-ba3f32e1-5624-4d0d-8135-f1021b4381e1/" target="_blank" rel='noreferrer'><img src={typescriptCert} alt="TypeScript" /></a>
                <a href="https://www.udemy.com/certificate/UC-190162e2-4283-48af-b91b-0fc801e33586/" target="_blank" rel='noreferrer'><img src={sbCert} alt="Spring Boot Microservices" /></a>
                <a href="https://www.udemy.com/certificate/UC-aa7296da-2a47-4fef-8395-ef55be3c4d42/" target="_blank" rel='noreferrer'><img src={testingSbCert} alt="Testing Spring Boot" /></a>
                <a className={this.state.hideCerts ? 'hidden-certs' : undefined} href="https://www.credly.com/badges/b18af136-2ae8-4c67-90cf-c5fe5f6e8764" target="_blank" rel='noreferrer'><img src={hrJavaCert} alt="HackerRank Java" /></a>
                <a className={this.state.hideCerts ? 'hidden-certs' : undefined} href="https://www.credly.com/badges/b18af136-2ae8-4c67-90cf-c5fe5f6e8764" target="_blank" rel='noreferrer'><img src={hrJsCert} alt="HackerRank JavaScript" /></a>
                <a className={this.state.hideCerts ? 'hidden-certs' : undefined} href="https://www.credly.com/badges/b18af136-2ae8-4c67-90cf-c5fe5f6e8764" target="_blank" rel='noreferrer'><img src={rwdCert} alt="Responsive Web Design" /></a>
                <a className={this.state.hideCerts ? 'hidden-certs' : undefined} href="https://www.credly.com/badges/b18af136-2ae8-4c67-90cf-c5fe5f6e8764" target="_blank" rel='noreferrer'><img src={jsDsaCert} alt="JS DSA" /></a>
                
            </div>
            <div className='centered'>
                <button id="moreCerts" onClick={this.showMore}>{this.state.viewButtonText}</button>
            </div>
        </div>
      )
  }
  
}

export default SkillsContainer