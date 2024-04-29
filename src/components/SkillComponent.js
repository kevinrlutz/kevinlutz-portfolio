import React, { Component } from 'react'
import './SkillComponent.css'

export default class SkillComponent extends Component {
  render() {
    let altText = this.props.skillName + ' Logo';

    return (
      <div className='skill-component'>
        <img src={this.props.image} className="skill-img" alt={altText} />
        <p>{this.props.skillName}</p>
      </div>
    )
  }
}
