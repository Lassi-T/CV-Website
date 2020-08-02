import React from 'react'
import { Navbar } from 'react-bootstrap'

const NavBar = () => {
    return(
        <Navbar bg='dark' variant='dark'>
            <Navbar.Brand href='#home'>LassiT</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <a href="#contact">Contact</a>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar
