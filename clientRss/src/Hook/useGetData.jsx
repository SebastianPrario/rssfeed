import axios from 'axios'
import { useState, useEffect } from 'react'

const useGetData = (URL, URL2, time) => {
  const [data, setData] = useState({
    data: {},
    data2: {},
    isLoading: true
  })
  console.log(URL, URL2, time)
  useEffect(() => {
    getAxios()
    upDate()
  }, [])

  const upDate = async () => {
    setInterval(async () => {
      try {
        const response = await axios.get(URL)
        const data = response.data
        const response2 = await axios.get(URL2)
        const data2 = response2.data
        setData({
          data,
          data2,
          isloading: false
        })
      } catch (error) { console.log('error conexion con el servidor') }
    }, time)
  }
  const getAxios = async () => {
    try {
      const response = await axios.get(URL)
      const data = response.data
      const response2 = await axios.get(URL2)
      const data2 = response2.data
      setData({
        data,
        data2,
        isLoading: false
      })
    } catch (error) { console.log('error conexion con el servidor') }
  }
  return { data, getAxios }
}

export default useGetData
