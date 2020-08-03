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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc leo quam, pharetra sit amet
                luctus in, lacinia nec ante. Etiam nisl diam, commodo vitae orci eget, mollis fermentum lacus.
                Donec at nibh sem. Ut egestas sodales lobortis. Praesent interdum dolor eu nunc auctor
                posuere. Ut scelerisque quam eu purus rutrum pellentesque.
              </p>
            </Media.Body>
          </Media>
        </Col>
      </Row>
    </Container>
  )
}

export default Home
