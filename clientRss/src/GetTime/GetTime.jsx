import React, { useEffect, useState } from 'react'
import styles from './GetTime.module.css'

const GetTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date())

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
      <div className={styles.marcoClock}>
        <p className={styles.title}> {currentTime.toLocaleTimeString()}</p>
      </div>
    </div>
  )
}

// #endregion

export default GetTime