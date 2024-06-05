import React, { useEffect, useState } from 'react'
import styles from './GetQuote.module.css'
import Spinner from '../../../../component/Spinner/Spinner'
import axios from 'axios'

const getAxios = async () => {
  const data = await axios.get('https://api.bluelytics.com.ar/v2/latest')
  return data
}

const GetQuote = () => {
  const [data, setData] = useState()
  data && console.log(data.data)
  const quote = data
  console.log(quote)
  useEffect(() => {
    getAxios().then((data) => setData(data.data))
  }, [])
  return (
    !data
      ? ((<><p>Cargando ...</p><Spinner /></>))
      : (
        <div translate='no'>
          <p className='text-white fs-4  mt-3 text-center'>Cotización dolar hoy</p>
          <div className={styles.div}>
            <div>
              <p className='ms-2 text-white fs-3 text-center'>Blue:</p>
              <p className='ms-2 text-white fs-4'>venta: $ {quote?.blue.value_sell}</p>
              <p className='ms-2 text-white fs-4'>compra: $ {quote?.blue.value_buy}</p>
            </div>
            <div>
              <p className='ms-2 text-white fs-3 text-center'>Oficial:</p>
              <p className='ms-2 text-white fs-4'>venta: $ {quote?.oficial.value_sell}</p>
              <p className='ms-2 text-white fs-4'>compra: $ {quote?.oficial.value_buy}</p>
            </div>

          </div>
          <div>
            <p className='ms-3 text-white fs-7 text-center'> última actualización: {quote?.last_update.slice(0, 19).split('T')[1]} - {quote?.last_update.slice(0, 19).split('T')[0]}</p>
          </div>
        </div>)

  )
}

export default GetQuote
