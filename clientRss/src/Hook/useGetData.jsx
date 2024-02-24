import axios from 'axios'

const useGetData = async (URL) => {
  try {
    const articles = await (await axios.get(URL)).data
    return articles
  } catch (error) { console.log('error conexion con el servidor') }
}

export default useGetData