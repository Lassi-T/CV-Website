import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import './Header.css'
import CVPic from '../images/cvpic.jpg'

const Header = () => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Navbar.Brand href='/'>LassiT</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className='justify-content-end'>
        <Nav className='mr-auto'>
          <Nav.Link href={CVPic} target='blank' rel='noopener noreferrer'>CV</Nav.Link>
          <a className='navLink' href='https://github.com/Lassi-T' target='_blank' rel='noopener noreferrer'>
            GitHub
          </a>
          <Nav.Link href='/media'>Media</Nav.Link>
        </Nav>
        <Navbar.Text>
          <a className='navLink' href='/contact'>
            Contact
          </a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
