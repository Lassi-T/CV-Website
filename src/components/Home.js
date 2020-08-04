import React from 'react'
import { Container, Col, Row, Media, Image } from 'react-bootstrap'
import ProfilePic from '../images/TutorKuva5.png'
import GitHubPic from '../images/GitHub-Mark-Light-120px-plus.png'
import LinkedinPic from '../images/LI-In-Bug.png'
import InstagramPic from '../images/instagram.png'
import './Home.css'

const Home = () => {
  return (
    <Container>
      <Row>
        <Col className='imageDiv'>
          <Image
            src={ProfilePic}
            className='whiteBorder'
            width={250}
            height={250}
            alt='ProfilePic'
            roundedCircle
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Media>
            <Media.Body className='textBox'>
              <h5 className='mainTitle'>Lassi Timoskainen</h5>
              <div className='divider'></div>
              <p className='text'>Python | C/C++ | JavaScript | React | NodeJS</p>
              <div className='imageRow'>
                <a href='https://github.com/Lassi-T' target='_blank' rel='noopener noreferrer'>
                  <Image src={GitHubPic} width={40} height={40} />
                </a>
                <a className='centerImage' href='https://www.linkedin.com/in/lassi-timoskainen-73b0261b4/' target='_blank' rel='noopener noreferrer'>
                  <Image src={LinkedinPic} width={40} height={40} />
                </a>
                <a className='rightImage' href='https://www.instagram.com/lassii/?hl=fi' target='_blank' rel='noopener noreferrer'>
                  <Image src={InstagramPic} width={40} height={40} />
                </a>
              </div>
            </Media.Body>
          </Media>
        </Col>
      </Row>
    </Container>
  )
}

export default Home
