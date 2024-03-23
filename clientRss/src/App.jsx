import Component1 from './component/Component1/Component1'
import Component2 from './component/Component2/Component2'
//import styles from './App.module.css'
import Spinner from './component/Spinner/Spinner'
import Component3 from './component/Component3/Component3'
import useGetData from './Hook/useGetData'
import { Analytics } from '@vercel/analytics/react'


function App () {
 
  const URL = "http://localhost:3001/rss?source=perfil"
  const URL2 = "http://localhost:3001/rss?source=perfil"

  const { data: articulo1, isloading } = useGetData(URL, 600000)
  const { data: articulo2, isloading: isloading2 } = useGetData(URL2, 600000)

  return (
    <div className={styles.container}>
      <Analytics/>
      {isloading
        ? <div className={styles.component1}> <Spinner /> </div>
        : (<div className={styles.component1}>
          <Component1 notes={articulo1} />
        </div>
          )}
      <div className='row'>
        {isloading2
          ? <div className='col-6 md-col-8 pe-0'>
            <Spinner />
            </div>
          : (<div className='col-6 md-col-8 pe-0'>
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

export default App
