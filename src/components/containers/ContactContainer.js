import React from 'react'
import './ContactContainer.css'
import githubLogo from '../../images/github-logo.webp'
import linkedinLogo from '../../images/linkedin-logo.webp'
import leetcodeLogo from '../../images/leetcode-logo.webp'
import codepenLogo from '../../images/codepen-logo.webp'
import hackerrankLogo from '../../images/hackerrank-logo.webp'

export default function ContactContainer() {
  return (
    <div>
      <div className="contact-container">
        <p className="left-align-mobile">
          Looking to hire a developer? Feel free to call or text me at&nbsp;
          <a href="tel:845-522-6486">(845) 522-6486</a> or send me an&nbsp;
          <a href="mailto:kevin@kevinlutz.me">email</a>. Let's create something
          awesome together!
        </p>
        You can also find me on the following sites:
      </div>
      <div className="contact-icons">
        <div>
          <a href="https://github.com/kevinrlutz">
            <img src={githubLogo} alt="Github" />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/kevinrlutz/">
            <img src={linkedinLogo} alt="LinkedIn" />
          </a>
        </div>
        <div>
          <a href="https://leetcode.com/kevinrlutz/">
            <img src={leetcodeLogo} alt="LeetCode" />
          </a>
        </div>
        <div>
          <a href="https://codepen.io/kevinlutz/">
            <img src={codepenLogo} alt="Codepen" />
          </a>
        </div>
        <div>
          <a href="https://www.hackerrank.com/kevinlutz">
            <img src={hackerrankLogo} alt="HackerRank" />
          </a>
        </div>
      </div>
    </div>
  )
}
