import axios from 'axios'
import { useEffect, useState } from 'react'

const useGetData = (URL, name) => {
  const [state, setState] = useState({
    name,
    dato: null,
    isloading: true
  })

  useEffect(() => getAxiosData(URL), [])

  const getAxiosData = async (URL) => {
    try {
      console.log('entra')
      const articles = await axios.get(URL)
      if (!articles.data) return
      console.log(articles.data)
      setState({
        isloading: false
      })
    } catch (error) { console.log('error conexion con el servidor') }
  }
  console.log(state)
  return {
    name: state.name,
    data: state.dato
  }
}

export default useGetData
