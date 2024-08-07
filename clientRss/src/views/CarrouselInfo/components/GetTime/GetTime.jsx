import React, { useEffect, useState } from 'react'
import styles from './GetTime.module.css'
import logo from '/logo.jpg'

const GetTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date())
  const week = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
  const dayWeek = week[currentTime.getDay()]

  useEffect(() => {
    // Actualiza la hora cada segundo
    const intervalId = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    // Limpia el intervalo cuando el componente se desmonta
    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <div className={styles.body}>
      <div>
        <img className={styles.image} src={logo} alt='imagen logo página' />
      </div>
      <div className={styles.clock}>
        <p className={styles.date}>{dayWeek}  {currentTime.toLocaleDateString()}</p>
        <p className={styles.time}> {currentTime.toLocaleTimeString()}</p>

      </div>
    </div>
  )
}

// #endregion

export default GetTime
