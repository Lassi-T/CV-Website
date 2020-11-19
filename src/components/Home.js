import React from 'react'
import { Container, Col, Row, Media, Image } from 'react-bootstrap'
import './Home.css'

//All the images used in the frontpage
import ProfilePic from '../images/TutorKuva5.png'
import GitHubPic from '../images/GitHub-Mark-Light-120px-plus.png'
import LinkedinPic from '../images/LI-In-Bug.png'
import InstagramPic from '../images/instagram.png'

const Home = () => {
  return (
    <Container>
      <Row>
        <Col className='profileImageDiv'>
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
                <a
                  className='centerImage'
                  href='https://github.com/Lassi-T'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Image className='icon' src={GitHubPic} />
                </a>
                <a
                  className='centerImage'
                  href='https://www.linkedin.com/in/lassi-timoskainen-73b0261b4/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Image className='icon' src={LinkedinPic} />
                </a>
                <a
                  className='centerImage'
                  href='https://www.instagram.com/lassii/?hl=fi'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Image className='icon' src={InstagramPic} />
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
