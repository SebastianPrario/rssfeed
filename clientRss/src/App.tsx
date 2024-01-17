import { useEffect , useRef, useState } from 'react'
import axios from 'axios'
import  gsap from "gsap";
import styles from './App.module.css'


function App() {
 
  
  const URL = (import.meta.env.VITE_REACT_API_URL)
  
  const divContext = useRef(null)
  const [ notes , setNotes] = useState([])

  gsap.to(divContext.current, {
    color: "red",
    duration: 100, 
    
    y: 500,
  });
  gsap.from(divContext.current, {
    color: "red",
    y: -500,
  });
  const articles = async () =>{

  const articles = await (await axios.get(URL)).data
    setNotes(articles)
  }
  
  useEffect (() =>{ 
    articles()
  
   },[])
  

  return (
    <div className='container-fluid'>
      <div className='row'>
          <div className='col'>
          <div>
           <div >
              <h5 className='text-center fs-1 text-danger'>titulares</h5>
                <div className={styles.div}>
                <div  ref={divContext}>
                  {notes.map ( elem => 
                  <p className='text-primary text-center fs-4'>{elem}</p>)}
                </div>
                </div>

            </div>
          </div>
          </div>
      </div>  
    </div>
  )
}

export default App
