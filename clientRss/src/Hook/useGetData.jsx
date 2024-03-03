import axios from 'axios'
import { useState, useEffect } from 'react'

const useGetData = (URL, time) => {
  const [data, setData] = useState({
    data: {},
    isloading: true
  })

  useEffect(() => {
    getAxios()
    upDate()
  }, [])

  const upDate = () => {
    setInterval(async () => {
      try {
        const response = await axios.get(URL)
        const data = response.data
        setData({
          data,
          isloading: false
        })
      } catch (error) { console.log('error conexion con el servidor') }
    }, time)
  }
  const getAxios = async () => {
    try {
      const response = await axios.get(URL)
      const data = response.data
      setData({
        data,
        isloading: false
      })
    } catch (error) { console.log('error conexion con el servidor') }
  }

  return data
}

export default useGetData
