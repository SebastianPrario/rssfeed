import  {  useEffect, useRef, useState } from 'react';
import styles from './Component1.module.css'
import  gsap from "gsap";


const Component1 = ({notes}) => {
  
    const [ article, setArticle] = useState()
    const [ source, setSource] = useState()
    const divContext   = useRef()
    let altura = 1000
    
    if(divContext.current) { altura = (divContext.current.offsetHeight)}
    console.log(altura)
    const tl = gsap.timeline({repeat: -1});
   
    tl.to(divContext.current, {
        duration: 0,
        y: 200,
    })
   
    tl.to(divContext.current, {
        duration: altura>1000  ? altura/30 : 100 ,
        y: -altura,
        ease: "none"
    }) 
   
    useEffect (()=>{
        !!notes &&  
        setArticle(notes)
        setSource(notes[0].source)
       
    } , [notes])
    
 return (
        <div className={styles.component1}>
            <div className='row bg-primary z-3 '> 
                <h5 className='text-center fs-1 bg-primary z-3 text-white'>titulares</h5>
               
            </div>
            <div className='row'>
                <div  className='pt-4' id="miDiv" ref={divContext}>
                    {article && article.map ( (elem, index) => 
                    <div 
                        key={index}
                        className='px-5'>
                            <hr></hr>
                        <p className='text-primary text-center px-5 fs-1'><b>{elem?.title}</b></p>
                        <p className='text-center fs-6'>{source}</p>
                    </div>)}
                </div>
            </div>
        </div>
)}



export default Component1;