import NewsScroller from '@views/NewsScroller'
import NewsSlider from '../NewsSlider'
import Spinner from '@component/Spinner/Spinner.jsx'
import CarrouselInfo from '../CarrouselInfo'
import NavBar from '@views/NavBar'
import { IS_DEVELOPMENT } from '../../config.js'
import useGetData from '../../Hook/useGetData.jsx'
import styles from './Home.module.css'
import { useContext, useEffect } from 'react'
import { userContext } from '../../../context/user.jsx'
import getDocumentUser from '../../FireBase/getDocumentUser.jsx'
import Footer from '@component/Footer/Footer.jsx'

export default function Home () {
  const { state } = useContext(userContext)
  if (!state.document) getDocumentUser()
  const { document } = state
  let URL = import.meta.env.VITE_REACT_API_URL
  let URL2 = import.meta.env.VITE_REACT_API_URL2

  if (document) {
    URL = `${import.meta.env.VITE_REACT_API_URLPLUS}${document[0]}`
    URL2 = `${import.meta.env.VITE_REACT_API_URLPLUS}${document[1]}`
  }

  const { data, getAxios } = useGetData(URL, URL2, 600000)
  const { data: articulo1, data2: articulo2, isLoading } = data

  useEffect(() => {
    getAxios()
  }, [document])
  return (
    <div className={styles.container}>
      {isLoading
        ? <div className={styles.newsScroller}> <Spinner /> </div>
        : (
          <div className={styles.newsScroller}>
            <NavBar />
            <NewsScroller notes={articulo1} />
          </div>
          )}
      <div className='row'>
        {isLoading
          ? (
            <div className='col-6 md-col-8 pe-0'>
              <Spinner />
            </div>)
          : (
            <div className='col-6 col-md-6 pe-0'>
              <NewsSlider
                notes2={articulo2}
              />
            </div>
            )}
        <div className='col-6 col-md-6 ps-0'>
          <CarrouselInfo />
        </div>
      </div>
      {IS_DEVELOPMENT && <Footer />}
    </div>
  )
}
