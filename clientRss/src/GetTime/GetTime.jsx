import React, { useEffect, useState } from 'react'
import styles from './GetTime.module.css'

const GetTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date())
  console.log(currentTime.toLocaleDateString())
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
    <div className={styles.container}>
      <p>{currentTime.toLocaleDateString()}</p>
      <div className={styles.marcoClock}>
      <p className={styles.title}> {currentTime.toLocaleTimeString()}</p>
      </div>
    </div>
  )
}

// #endregion

export default GetTime
