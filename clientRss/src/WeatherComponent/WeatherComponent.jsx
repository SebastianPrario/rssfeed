import React, { useEffect, useState } from 'react';
import axios from 'axios';
import icons from '../../helpers/icons';

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
       weather && setIcon(icons(weather.estado),
       console.log(icons(weather.estado)))
    },[weather])

    console.log(icons('algo nublado'))
    
   return <div>
        <section className="vh-100" style={{"background-color": "#4B515D"}}>
            <div className="container py-4 h-100">
               <div className="">
                    <div className="">
                        <div className="card" >
                            <div className="card-body">
                                <div className="d-flex text-center">
                                    <h6 className="flex-grow-1">{weather.ciudad}</h6>
                                 </div>
                            <div className="d-flex flex-row align-items-between text-center mt-4 mb-4">
                            <div className='ms-3 me-4'>
                                 <img src={icon} width="100px"/>
                            </div>
                           <div className='ms-4'>
                            <h6 className="display-4 mb-0 font-weight-bold" style={{'color':' #1C2331'}}>{weather.temperatura}</h6>
                            <span className="small" style={{"color":" #868B94"}}>{weather.estado}</span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="flex-grow-1" style={{"font-size": "1rem;"}}>
                                <div>
                                    <i className="fas fa-wind fa-fw" style={{"color":" #868B94"}}></i> 
                                    <span className="ms-1">viento de {weather.viento}</span>
                                </div>
                                <div>
                                    <i className="fas fa-tint fa-fw" style={{"color":" #868B94"}}></i>
                                    <span className="ms-1">Sensación Termica: {weather.termica}  </span>
                                </div>
                                <div>
                                    <i className="fas fa-sun fa-fw" style={{"color":" #868B94"}}></i>
                                    <span className="ms-1"> Presión: {weather.presion} hp. </span>
                                </div>
                            </div>
                        <div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</section>
    </div>;
}

export default WeatherComponent;