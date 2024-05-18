import Component1 from './../../component/Component1/Component1'
import Component2 from './../../component/Component2/Component2'
import Spinner from './../../component/Spinner/Spinner'
import Component3 from './../../component/Component3/Component3'
import NavBar from './../../NavBar/NavBar'
import useGetData from './../../Hook/useGetData'
import styles from './ArticleContainer.module.css'
import getDocumentUser from '../../FireBase/getDocumentUser'
import { useEffect, useState } from 'react'

export default function ArticleContainer () {
  const [first, second] = getDocumentUser()
  const documento = ''
  console.log(documento)
  console.log(first, second)
  let URL = import.meta.env.VITE_REACT_API_URL
  let URL2 = import.meta.env.VITE_REACT_API_URL2
  useEffect(() => {
    if (first) {
      URL = `${import.meta.env.VITE_REACT_API_URLPLUS}${first}`
      console.log(URL)
    }
    if (second) {
      URL2 = `${import.meta.env.VITE_REACT_API_URLPLUS}${second}`
      console.log(URL2)
    }
  }, [first, second])

  const { data: articulo1, isloading } = useGetData(URL, 600000)
  const { data: articulo2, isloading: isloading2 } = useGetData(URL2, 600000)
  console.log(URL2)

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
        {isloading2
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
