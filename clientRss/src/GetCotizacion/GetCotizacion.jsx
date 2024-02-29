import React, { useEffect, useState } from 'react'
import useGetData from '../Hook/useGetData'
import styles from './GetCotizacion.module.css'

const GetCotizacion = () => {
  const [dolarCoti, setDolarCoti] = useState()

  const getCotizacion = async () => {
    const URL = 'https://api.bluelytics.com.ar/v2/latest'
    setDolarCoti(await useGetData(URL))
  }
  useEffect(() => {
    getCotizacion()
  }, [])

  return (
    <div>
      <p className='text-white fs-4  mt-3 text-center'>Cotización dolar hoy</p>
      <div className={styles.div}>
        <div>
          <p className='ms-2 text-white fs-3 text-center'>Blue:</p>
          {dolarCoti && <p className='ms-2 text-white fs-4'>venta: $ {dolarCoti.blue.value_sell}</p>}
          {dolarCoti && <p className='ms-2 text-white fs-4'>compra: $ {dolarCoti.blue.value_buy}</p>}
        </div>
        <div>
          <p className='ms-2 text-white fs-3 text-center'>Oficial:</p>
          {dolarCoti && <p className='ms-2 text-white fs-4'>venta: $ {dolarCoti.oficial.value_sell}</p>}
          {dolarCoti && <p className='ms-2 text-white fs-4'>compra: $ {dolarCoti.oficial.value_buy}</p>}
        </div>

      </div>
      <div>
        <p className='ms-3 text-white fs-7 text-center'> última actualización: {dolarCoti?.last_update.slice(0, 19).split('T')[1]} - {dolarCoti?.last_update.slice(0, 19).split('T')[0]}</p>
      </div>
    </div>

  )
}

// #endregion

export default GetCotizacion
