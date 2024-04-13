import React from 'react'
import Spinner from '../../src/component/Spinner/Spinner'
import styles from './WeatherComponent.module.css'
import useGetData from '../Hook/useGetData'


const URL = 'https://my.meteoblue.com/packages/current?apikey=t1MhpHy0fsBUNi8g&lat=-38.0004&lon=-57.5562&asl=14&format=json'
const WeatherComponent = () => {
  const { data, isloading } = useGetData(URL, 600000)
  let dayLight = 'day'
  if (data.data_current && data.data_current.isdaylight === 0) dayLight = 'night'

  const weatherImg = data.data_current ? `/0${data.data_current.pictocode}_${dayLight}.svg` : ''
  console.log(weatherImg)
  return (
    (isloading)
      ? <Spinner />
      : (
        <div>
          <section className='vh-100 bg-primary pt-5 pt-md-3'>
            <div className='container  h-100 '>
              <div className='row d-flex h-100'>
                <div className='col-12 col-md-11 col-xl-11 md-1 '>
                  <div className='card bg-white my-auto ps-md-5 ms-md-5 mt-2 mt-md-4 ' style={{ borderRadius: '35px' }}>
                    <div className='card-body '>
                      <h4 className='mt-2 mx-auto'>El tiempo en Mar del Plata</h4>
                      <div className='d-flex flex-row justify-content-center text-center mt-4 mb-2'>
                        <div className='d-none d-xlg-flex me-4'>
                          <img src={weatherImg} width='250px' />
                        </div>
                        <div className='d-none  d-md-flex  d-xlg-none flex-row'>
                          <img src={weatherImg} width='150px' />
                        </div>
                        <div className='d-flex  d-md-none flex-row'>
                          <img src={weatherImg} width='90px' />
                        </div>
                        <div className={styles.weatherDiv}>
                          <div>
                            <h6 className='d-none sm-d-flex display-4 mb-0 font-weight-bold' style={{ color: '#1C2331' }}> {data.data_current.temperature.toFixed(1)}°C </h6>
                            <h6 className='sm-d-none display-6 mb-0 font-weight-bold' style={{ color: '#1C2331' }}> {data.data_current.temperature.toFixed(1)}°C </h6>
                          </div>
                        </div>
                      </div>
                      <div className='d-flex align-items-center'>
                        <div className='d-flex mx-auto'>
                          <h5 className='d-none d-md-flex '>última actualización: {data.data_current.time.slice(-5)} hs.</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div />
                </div>
              </div>
            </div>
          </section>
        </div>)
  )
}
export default WeatherComponent
