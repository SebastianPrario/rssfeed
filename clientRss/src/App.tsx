import { useEffect ,  useState } from 'react'
import axios from 'axios'
import Component1 from './component/Component1/Component1';
import Component2 from './component/Component2/Component2';
import styles from './App.module.css'

function App() {
 
  
  const URL = (import.meta.env.VITE_REACT_API_URL)
  const URL2 = (import.meta.env.VITE_REACT_API_URL2)
 
  const [ notes , setNotes] = useState([])
  const [ notes2 , setNotes2] = useState([])
  
  const articles2 = async () =>{

    const articles2 = await (await axios.get(URL2)).data
    setNotes2(articles2)

  }

  
  const articles = async () =>{

  const articles = await (await axios.get(URL)).data
  setNotes(articles)
  }
  
  useEffect (() =>{ 
    articles()
    articles2()
  
  },[])
  
  

  return (
    <div className='conteiner'>
      <div className={styles.component1}>
           <Component1
            notes  = {notes} />
      </div>
      <div className='col-6'>
           <Component2
            notes2  = {notes2}  /> 
      </div>
    </div>
  
  )
}

export default App
