import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import WeatherComponent from '../../WeatherComponent/WeatherComponent'
import GetQuote from '../../GetQuote/GetQuote'
import GetTime from '../../GetTime/GetTime'

const Component3 = () => {
  return (
    <Carousel controls={false} interval={6000}>
      <Carousel.Item>
        <WeatherComponent />
      </Carousel.Item>
      <Carousel.Item>
        <GetQuote />
      </Carousel.Item>
      <Carousel.Item>
        <GetTime />
      </Carousel.Item>

    </Carousel>
  )
}

export default Component3

{ /* <div
      id='carouselExampleSlidesOnly'
      data-bs-interval='6000' data-bs-touch='true'
      className='carousel slide ' data-bs-ride='carousel'
    >
      <div className='carousel-inner'>
        <div className='carousel-item active'>
          <WeatherComponent />
        </div>
        <div className='carousel-item text-center '>
          <GetQuote />
        </div>
        <div className='carousel-item text-center bg-white vh-100 '>
          <p className='fs-4 text-primary'>PUBLICITE AQUI</p>
        </div>
        <div className='carousel-item text-center bg-white vh-100 '>
          <GetTime />
        </div>
      </div>
    </div>
  ) */ }
