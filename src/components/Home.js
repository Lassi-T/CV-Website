import React from 'react'
import { Container, Col, Row, Media, Image } from 'react-bootstrap'
import ProfilePic from '../images/TutorKuva5.png'
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
            <Media.Body>
              <h5 className='title'>Lassi Timoskainen</h5>
              <p className='textBox'>
                Welcome to my website!
                <br />
                I made this online portfolio site using React, utilizing some Reactboostrap components.
                <br />
                Here you can find my CV, my contact information, a link to my GitHub page and some media.
              </p>
            </Media.Body>
          </Media>
        </Col>
      </Row>
    </Container>
  )
}

export default Home
