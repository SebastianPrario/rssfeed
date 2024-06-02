import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import WeatherComponent from '../../WeatherComponent/WeatherComponent'
import GetQuote from '../../GetQuote/GetQuote'
import GetTime from '../../GetTime/GetTime'
import Contact from '../../Contact/Contact'

const Component3 = () => {
  return (
    <Carousel controls={false} indicators={false} interval={6000}>
      {/* <Carousel.Item>
        <WeatherComponent />
      </Carousel.Item>
      <Carousel.Item>
        <GetQuote />
      </Carousel.Item> */}
      <Carousel.Item>
        <GetTime />
      </Carousel.Item>
      {/* <Carousel.Item>
        <Contact />
      </Carousel.Item> */}
    </Carousel>
  )
}

export default Component3
