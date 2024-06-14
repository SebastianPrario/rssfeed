import React from 'react'
import { Container, Card, Text, Image } from './styles'
import mail from '/email.png'

export default function Contact () {
  return (
    <Container>
      <Card>
        <Text className='d-none d-md-flex fs-3'>
          <Image src={mail} alt='@' />
          contactolasnoticias@gmail.com
        </Text>
        <Text className='d-block d-md-none text-center fs-12'>
          <Image src={mail} alt='@' />
          contactolasnoticias@gmail.com
        </Text>
      </Card>
    </Container>
  )
}
