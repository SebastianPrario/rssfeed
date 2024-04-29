import React from 'react'
import { Container, Card, Text ,Image } from './styles'
import mail from './../../public/email.png'


export default function Contact () {
  return (
    <Container>
      <Card>
        <Text>
          <Image src={mail} alt='@' />
          contactolasnoticias@gmail.com
        </Text>
      </Card>
    </Container>
  )
}
