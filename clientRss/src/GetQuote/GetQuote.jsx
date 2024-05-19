import React from 'react'
import useGetData from '../Hook/useGetData'
import styles from './GetQuote.module.css'
import Spinner from '../component/Spinner/Spinner'

const GetQuote = () => {
  const URL = 'https://api.bluelytics.com.ar/v2/latest'

  const { data } = useGetData(URL, 1800000)
  const { data: quote, isloading } = data
  return (
    isloading
      ? ((<><p>Cargando ...</p><Spinner /></>))
      : (
        <div translate='no'>
          <p className='text-white fs-4  mt-3 text-center'>Cotización dolar hoy</p>
          <div className={styles.div}>
            <div>
              <p className='ms-2 text-white fs-3 text-center'>Blue:</p>
              <p className='ms-2 text-white fs-4'>venta: $ {quote.blue.value_sell}</p>
              <p className='ms-2 text-white fs-4'>compra: $ {quote.blue.value_buy}</p>
            </div>
            <div>
              <p className='ms-2 text-white fs-3 text-center'>Oficial:</p>
              <p className='ms-2 text-white fs-4'>venta: $ {quote.oficial.value_sell}</p>
              <p className='ms-2 text-white fs-4'>compra: $ {quote.oficial.value_buy}</p>
            </div>

          </div>
          <div>
            <p className='ms-3 text-white fs-7 text-center'> última actualización: {quote.last_update.slice(0, 19).split('T')[1]} - {quote.last_update.slice(0, 19).split('T')[0]}</p>
          </div>
        </div>)

  )
}

export default GetQuote
