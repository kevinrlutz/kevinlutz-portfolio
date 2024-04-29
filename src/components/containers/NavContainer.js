import React from 'react'
import './NavContainer.css'
import NavLink from '../NavLink'

export default function NavContainer() {
  return (
    <div className='nav-container'>
        <NavLink linkTitle="ABOUT" linkRef="#"/>&nbsp;
        <NavLink linkTitle="SKILLS" linkRef="#" />&nbsp;
        <NavLink linkTitle="PROJECTS" linkRef="#" />&nbsp;
        <NavLink linkTitle="CONTACT" linkRef="#" lastNav="true"/>
    </div>
  )
}
