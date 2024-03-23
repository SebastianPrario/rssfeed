import React from 'react';
import useGetData from '../Hook/useGetData';
import styles from './GetQuote.module.css'
import Spinner from '../component/Spinner/Spinner'

const GetQuote = () => {
  const URL = 'https://api.bluelytics.com.ar/v2/latest'

  const { data, isloading } = useGetData(URL, 1800000)

  return (
    isloading
      ? ((<><p>Cargando ...</p><Spinner /></>))
      : (
        <div translate='no'>
          <p className='text-white fs-4  mt-3 text-center'>Cotización dolar hoy</p>
          <div className={styles.div}>
            <div>
              <p className='ms-2 text-white fs-3 text-center'>Blue:</p>
              <p className='ms-2 text-white fs-4'>venta: $ {data.blue.value_sell}</p>
              <p className='ms-2 text-white fs-4'>compra: $ {data.blue.value_buy}</p>
            </div>
            <div>
              <p className='ms-2 text-white fs-3 text-center'>Oficial:</p>
              <p className='ms-2 text-white fs-4'>venta: $ {data.oficial.value_sell}</p>
              <p className='ms-2 text-white fs-4'>compra: $ {data.oficial.value_buy}</p>
            </div>

          </div>
          <div>
            <p className='ms-3 text-white fs-7 text-center'> última actualización: {data.last_update.slice(0, 19).split('T')[1]} - {data.last_update.slice(0, 19).split('T')[0]}</p>
          </div>
        </div>)

  )
}

export default GetQuote
