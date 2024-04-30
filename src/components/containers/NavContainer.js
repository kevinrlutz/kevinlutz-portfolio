import React from 'react'
import './NavContainer.css'
import NavLink from '../NavLink'

export default function NavContainer() {
  return (
    <div className='nav-container'>
        <NavLink linkTitle="ABOUT" linkRef="#"/>&nbsp;
        <NavLink linkTitle="SKILLS" linkRef="#skills" />&nbsp;
        <NavLink linkTitle="PROJECTS" linkRef="#projects" />&nbsp;
        <NavLink linkTitle="CONTACT" linkRef="#contact" lastNav="true"/>
    </div>
  )
}
