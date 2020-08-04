import React from 'react'
import { Container, Col, Row, Image, Media } from 'react-bootstrap'
import TelegramPic from '../images/telegram.png'
import EmailPic from '../images/email.png'
import PhonePic from '../images/phone.png'
import './Contact.css'

// Make contact boxes flow on top of each other!

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
          <Media.Body className='infoBox'>
            <Image className='imageDiv' src={TelegramPic} alt='Telegram picture'></Image>
            <h4 className='textDiv'>Telegram</h4>
            <p className='subTextDiv'>@LassiT</p>
          </Media.Body>
        </Col>
        <Col>
          <Media.Body className='infoBox'>
            <Image className='imageDiv' src={EmailPic} width={160} height={160} alt='Telegram picture'></Image>
            <h4 className='textDiv'>Email</h4>
            <p className='subTextDiv'>timoskainen.lassi(at).com</p>
            <p className='subTextDiv'>lassi.timoskainen(at)tuni.fi</p>
          </Media.Body>
        </Col>
        <Col>
          <Media.Body className='infoBox'>
            <Image className='imageDiv' src={PhonePic} width={160} height={160} alt='Telegram picture'></Image>
            <h4 className='textDiv'>Phone</h4>
            <p className='subTextDiv'>+358 044 XXX XXXX</p>
          </Media.Body>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact
