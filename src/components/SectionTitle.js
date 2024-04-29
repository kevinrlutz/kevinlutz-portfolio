import React, { Component } from 'react'
import './SectionTitle.css'

export default class SectionTitle extends Component {
  render() {
    return (
      <div className='section-title'><h2>{this.props.sectionName}</h2></div>
    )
  }
}
