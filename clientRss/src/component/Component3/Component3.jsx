import React from 'react'
import WeatherComponent from '../../WeatherComponent/WeatherComponent'

const Component3 = () => {
  return (
    <div
      id='carouselExampleSlidesOnly'
      data-ride='carousel' data-interval='6000' data-bs-touch='true'
      className='carousel slide ' data-bs-ride='carousel'
    >
      <div className='carousel-inner'>
        <div className='carousel-item active'>
          <WeatherComponent />
        </div>
        <div className='carousel-item text-center '>
          <p className='fs-4 text-white'>PUBLICITE AQUI</p>
        </div>
        <div className='carousel-item text-center bg-white vh-100 '>
          <p className='fs-4 text-primary'>PUBLICITE AQUI</p>
        </div>
      </div>
    </div>
  )
}

export default Component3

{ /* <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
<div className="carousel-inner">
    <WeatherComponent />
    <div className="carousel-item">
        <p className='display-4 mt-4 text-white'> Publicite<br></br> aqui</p>
    </div>
    <div className="carousel-item">
         <p className='display-4 mt-4 text-dark'> Publicite<br></br> aqui</p>
    </div>
</div>
</div> */ }
