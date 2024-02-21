import React, { useEffect, useState } from 'react';
import axios from 'axios';
import icons from './icons';
import celcius from '../../assets/icons/celsius.svg'
import tiempo from '../../assets/icons/partly-cloudy-day.svg'
import Spinner from '../../src/component/Spinner/Spinner';

const URL = (import.meta.env.VITE_REACT_API_WEATHER)

const WeatherComponent = () => {

    const [ weather , setWeather] = useState ({})
    const [ icon , setIcon] = useState ({})
    
    const getWeather = async () =>{
        const getWeather =  await (await axios.get(`${URL}?ciudad=Mar del Plata`)).data
        setWeather(getWeather[0])
    }

    useEffect(() => {
    getWeather()
    }, [])
    useEffect (() => {
       weather && setIcon(icons(weather.estado))
      
    },[weather])
  
   console.log(icon)

    return ( 
         (Object.keys(weather).length===0)  ? <Spinner/> :
        (<div>
        <section className="vh-100 bg-primary pt-5 pt-md-3">
            <div className="container  h-100 ">
                <div className="row d-flex h-100">
                    <div className="col-12 col-md-11 col-xl-11 md-1 ">
                        <div className="card bg-white my-auto ps-md-5 ms-md-5 mt-2 mt-md-4 " style={{ "border-radius": "35px"}}>
                            <div className="card-body ">
                                <div className="d-flex">
                                    <h6 className="flex-grow-1 text-center text-md-start">{weather.ciudad}</h6>
                                    <h6 className='d-none d-md-flex'>última actualización: {weather.hora} hs.</h6>
                                </div>
                                <div className="d-flex flex-row justify-content-center text-center mt-4 mb-2">
                                    <div className='d-none d-md-flex me-4'>
                                        <img src={tiempo} width="100px"/>
                                    </div>
                                    <div className='d-flex'>
                                        <div>
                                            <h6 className="display-4 mb-0 font-weight-bold" style={{"color": "#1C2331"}}> {weather.temperatura} </h6>
                                            <span className="small" style={{"color": "#868B94"}}>{weather.estado}</span>
                                        </div>
                                        <img src={celcius} width={100} className='d-none d-md-flex' alt='celcius' />
                                    </div>
                                </div>
                                
                                <div className="d-flex align-items-center">
                <div className="flex-grow-1" >
                    <div>
                        <i className="fas fa-wind fa-fw"></i> 
                        <span className="ms-1">vientos de {weather.viento}</span>
                    </div>
                    <div>
                        <i className="fas fa-tint fa-fw"></i> 
                        <span className="ms-1">
                        Termica: {(weather.termica)==="No se calcula" ? weather.temperatura : weather.termica} 
                        </span>
                    </div>
                    <div>
                        <i className="fas fa-sun fa-fw" ></i>
                        <span className="ms-1"> Presión: {weather.presion} Hp </span>
                    </div>
                </div>
            </div>
                            </div>
                        </div>
                    <div/>
                </div>
            </div>
            </div>
        </section>
    </div>)
    )

}
export default WeatherComponent;