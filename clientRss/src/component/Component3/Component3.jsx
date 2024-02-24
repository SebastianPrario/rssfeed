import React from 'react'
import WeatherComponent from '../../WeatherComponent/WeatherComponent'
import GetCotizacion from '../../GetCotizacion/GetCotizacion'
import GetTime from '../../GetTime/GetTime'

const Component3 = () => {
  return (
    <div
      id='carouselExampleSlidesOnly'
      data-ride='carousel' data-interval='6000'
      className='carousel slide ' data-bs-ride='carousel'
    >
      <div className='carousel-inner'>
        <div className='carousel-item active'>
          <WeatherComponent />
        </div>
        <div className='carousel-item text-center '>
          <p className='fs-4 text-white'>PUBLICITE AQUI</p>
        </div>
        <div className='carousel-item active'>
          <GetTime />
        </div>
        <div className='carousel-item'>
          <GetCotizacion />
        </div>
      </div>
    </div>
  )
}

export default Component3