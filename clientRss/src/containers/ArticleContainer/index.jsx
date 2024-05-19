import Component1 from './../../component/Component1/Component1'
import Component2 from './../../component/Component2/Component2'
import Spinner from './../../component/Spinner/Spinner'
import Component3 from './../../component/Component3/Component3'
import NavBar from './../../NavBar/NavBar'
import useGetData from './../../Hook/useGetData'
import styles from './ArticleContainer.module.css'
import { useContext, useEffect } from 'react'
import { userContext } from '../../../context/user'
import getDocumentUser from '../../FireBase/getDocumentUser'

export default function ArticleContainer () {
  const { state } = useContext(userContext)
  getDocumentUser()
  const { document } = state
  let URL = import.meta.env.VITE_REACT_API_URL
  let URL2 = import.meta.env.VITE_REACT_API_URL2

  if (document) {
    URL = `${import.meta.env.VITE_REACT_API_URLPLUS}${document[0]}`
    URL2 = `${import.meta.env.VITE_REACT_API_URLPLUS}${document[1]}`
  }

  const { data, getAxios } = useGetData(URL, 600000)
  const { data: articulo1, isloading } = data
  const { data: data2, getAxios: getAxios2 } = useGetData(URL2, 600000)
  const { data: articulo2, isloading: isLoading2 } = data2

  useEffect(() => {
    getAxios()
    getAxios2()
  }, [document])
  return (
    <div className={styles.container}>
      {isloading
        ? <div className={styles.component1}> <Spinner /> </div>
        : (
          <div className={styles.component1}>
            <NavBar />
            <Component1 notes={articulo1} />
          </div>
          )}
      <div className='row'>
        {isLoading2
          ? (
            <div className='col-6 md-col-8 pe-0'>
              <Spinner />
            </div>)
          : (
            <div className='col-6 md-col-8 pe-0'>
              <Component2
                notes2={articulo2}
              />
            </div>
            )}
        <div className='col-6 md-col-4 ps-0'>
          <Component3 />
        </div>
      </div>
    </div>
  )
}
