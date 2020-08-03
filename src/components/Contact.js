import React from 'react'
import { Container, Col, Row, Image } from 'react-bootstrap'
import TelegramPic from '../images/telegram.png'
import EmailPic from '../images/email.png'
import PhonePic from '../images/phone.png'
import './Contact.css'

const Contact = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h4 className='title'>Contact me</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='infoBox'>
              <Image className='imageDiv' src={TelegramPic} width={160} height={160} alt='Telegram picture'></Image>
              <h4 className='textDiv'>Telegram</h4>
              <p className='subTextDiv'>@LassiT</p>
            </div>
          </Col>
          <Col>
            <div className='infoBox'>
            <Image className='imageDiv' src={EmailPic} width={160} height={160} alt='Telegram picture'></Image>
              <h4 className='textDiv'>Email</h4>
              <p className='subTextDiv'>timoskainen.lassi(at).com</p>
              <p className='subTextDiv'>lassi.timoskainen(at)tuni.fi</p>
            </div>
          </Col>
          <Col>
            <div className='infoBox'>
            <Image className='imageDiv' src={PhonePic} width={160} height={160} alt='Telegram picture'></Image>
              <h4 className='textDiv'>Phone</h4>
              <p className='subTextDiv'>+358 044 XXX XXXX</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Contact
