import React from 'react'
import { Container, Col, Row, Image, Media } from 'react-bootstrap'
import './Contact.css'
import './Home.css'

// Icons used in the contact page
import TelegramPic from '../images/telegram.png'
import EmailPic from '../images/email.png'
import PhonePic from '../images/phone.png'

const Contact = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h4 className='title'>Contact me</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <Media.Body className='textBox'>
            <Image className='imageDiv' src={TelegramPic} alt='Telegram picture'></Image>
            <h4 className='mainTitle'>Telegram</h4>
            <div className='divider'></div>
            <p className='subTextDiv'>@LassiT</p>
          </Media.Body>
        </Col>
        <Col>
          <Media.Body className='textBox'>
            <Image className='imageDiv' src={EmailPic} alt='Telegram picture'></Image>
            <h4 className='mainTitle'>Email</h4>
            <div className='divider'></div>
            <p className='subTextDiv'>timoskainen.lassi(at).com</p>
            <p className='subTextDiv'>lassi.timoskainen(at)tuni.fi</p>
          </Media.Body>
        </Col>
        <Col>
          <Media.Body className='textBox'>
            <Image className='imageDiv' src={PhonePic} alt='Telegram picture'></Image>
            <h4 className='mainTitle'>Phone</h4>
            <div className='divider'></div>
            <p className='subTextDiv'>+358 044 XXX XXXX</p>
          </Media.Body>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact
