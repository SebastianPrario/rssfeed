import { useEffect, useState } from 'react'
import axios from 'axios'
import Component1 from './component/Component1/Component1'
import Component2 from './component/Component2/Component2'
import styles from './App.module.css'
import Spinner from './component/Spinner/Spinner'
import Component3 from './component/Component3/Component3'
import useGetData from './Hook/useGetData'


function App () {
  const URL = (import.meta.env.VITE_REACT_API_URL)
  const URL2 = (import.meta.env.VITE_REACT_API_URL2)
  const [notes, setNotes] = useState([{}])
  const [notes2, setNotes2] = useState([{}])

  const articles2 = async () => {
    setNotes2(await useGetData(URL2))
    setInterval(async () => {
      setNotes2(await useGetData(URL2))
    }, 600000)
  }

  const articles = async () => {
    setNotes(await useGetData(URL))
    setInterval(async () => {
      setNotes2(await useGetData(URL))
    }, 600000)
  }

  useEffect(() => {
    articles()
    articles2()
  }, [])

  return (
    <div className={styles.container}>
      {notes.length < 2
        ? <div className={styles.component1}> <Spinner /> </div>
        : (<div className={styles.component1}>
          <Component1 notes={notes} />
        </div>)
      }
      <div className='row'>
        {notes2.length < 2
          ? <div className='col-6 md-col-8 pe-0'>
            <Spinner />
            </div>
          : (<div className='col-6 md-col-8 pe-0'>
            <Component2
              notes2={notes2}
            />
            </div> 
            )
        }
        <div className='col-6 md-col-4 ps-0'>
          <Component3 />
        </div>
      </div>
    </div>
  )
}

export default App
