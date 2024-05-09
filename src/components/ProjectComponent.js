import React, { Component } from 'react'
import './ProjectComponent.css'
import {v4 as uuidv4} from 'uuid'

export default class ProjectComponent extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <a href={this.props.link} target='_blank' rel='noreferrer'>
            {this.props.skillImages.map(image => {
                return <img key={uuidv4()} className='project-icons' src={image} height={"20"} width={"20"} alt="Tech icon" />
            })}
            <h3>{this.props.name}</h3>
        </a>
        <p>{this.props.repoLink && <a href={this.props.repoLink} target='_blank' rel='noreferrer'>[Link to GitHub Repo]&nbsp;</a>}{this.props.description}</p>
      </div>
    )
  }
}
