import React, { useCallback, useEffect, useState } from 'react'
import Spinner from '../../component/Spinner/Spinner'
import styles from './WeatherComponent.module.css'
import axios from 'axios'

const WeatherComponent = () => {
  const [coords, setCoords] = useState(null)
  const [location, setLocation] = useState(null)
  const [data, setData] = useState('')
  function success (pos) {
    const crd = pos.coords
    !coords && setCoords({ lat: crd.latitude, lon: crd.longitude, accur: 0 })
    coords && window.localStorage.setItem('CoordsByNoticiasya', JSON.stringify(coords))
  }
  function errors (err) { console.warn(`ERROR(${err.code}): ${err.message}`) }
  const options = { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
  const API_KEY = import.meta.env.VITE_REACT_API_WEATHER_KEY
  const URL = `https://my.meteoblue.com/packages/current?apikey=${API_KEY}&lat=${coords?.lat}&lon=${coords?.lon}&asl=${coords?.accur}&format=json`
  if (!data) {
    axios(URL)
      .then((response) => setData(response.data))
      .catch((error) => console.log(error.message))
  }

  axios(`https://www.meteoblue.com/en/server/search/query3?query=${coords?.lat}%20${coords?.lon}&apikey=DEMOKEY.`)
    .then((response) => setLocation(response.data.results[0]?.name))
    .catch(error => console.log(error.message))

  let dayLight = 'day'
  if (data.data_current && data.data_current.isdaylight === 0) dayLight = 'night'

  const getCoords = useCallback(() => navigator.geolocation.getCurrentPosition(success, errors, options), [])
  useEffect(() => {
    getCoords()
  }, [])
  const weatherImg = data.data_current ? `/0${data.data_current.pictocode}_${dayLight}.svg` : ''

  useEffect(() => {
    const coordLocalStorage = JSON.parse(window.localStorage.getItem('CoordsByNoticiasya'))
    coordLocalStorage && setCoords({ lat: coordLocalStorage.lat, lon: coordLocalStorage.lon, accur: 0 })
  }, [])
  return (
    (!data)
      ? <Spinner />
      : (
        <div>
          <section className={styles.weatherContainer}>
            <div className='container  h-100 '>
              <div className='row d-flex h-100'>
                <div className='col-12 col-md-11 col-xl-11 md-1 '>
                  <div className='card bg-white my-auto ps-md-5 ms-md-5 mt-2 mt-md-4 ' style={{ borderRadius: '35px' }}>
                    <div className='card-body '>
                      <h4 className='mt-2 mx-auto'>El tiempo en {location}</h4>
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
