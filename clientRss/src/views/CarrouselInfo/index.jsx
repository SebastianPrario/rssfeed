import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import WeatherComponent from './components/WeatherComponent/WeatherComponent'
import GetQuote from './components/GetQuote/GetQuote'
import GetTime from './components/GetTime/GetTime'
import Contact from './components/Contact/Contact'

const CarrouselInfo = () => {
  return (
    <Carousel controls={false} indicators={false} interval={6000}>
      <Carousel.Item>
        <WeatherComponent />
      </Carousel.Item>
      <Carousel.Item>
        <GetQuote />
      </Carousel.Item>
      <Carousel.Item>
        <GetTime />
      </Carousel.Item>
      <Carousel.Item>
        <Contact />
      </Carousel.Item>
    </Carousel>
  )
}

export default CarrouselInfo
