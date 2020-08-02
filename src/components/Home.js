import React from 'react'
import { Container, Col, Row, Media, Image } from 'react-bootstrap'
import ProfilePic from '../images/TutorKuva5.png'

const Home = () => {
  return (
    <Container>
      <Row style={{ padding: '20px', paddingBottom: '30px' }}>
        <h1>Home Page</h1>
      </Row>
      <Row>
        <Col sm={3} style={{ padding: '20px', paddingTop: '0px' }}>
          <Image src={ProfilePic} style={{border: '7px white solid'}} width={220} height={220} alt='ProfilePic' roundedCircle />
        </Col>
        <Col sm={8}>
          <Media style={{ padding: '2em' }}>
            <Media.Body>
              <h5>About me</h5>
              <p>
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
