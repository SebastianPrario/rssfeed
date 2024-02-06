import  { useEffect, useRef, useState } from 'react';
import styles from './Component1.module.css'
import  gsap from "gsap";


const Component1 = (props) => {
    
    console.log(props)
    const notes = props.notes
    console.log(notes)
    const [ article, setArticle] = useState()
    const [ source, setSource] = useState()
    const divContext = useRef()
   
    const tl = gsap.timeline({repeat: -1});
  
    let altura : number | undefined  = divContext.current
    
    console.log(altura)

    if(altura) { 
        altura  =  100
    }

    tl.to(divContext.current, {
        duration: 0,
        y: 450
    })

    tl.to(divContext.current, {
        duration: altura > 10000 ? 100 : 10,
        y: (-altura - 50),
        ease: "none"
    });
 
    useEffect (()=>{
        setArticle(notes)
        setSource(notes[0].source)
    } , [notes])
    
    return 
        <div>
       
            <div> 
              
                <h5 className='text-center fs-1 text-danger'>titulares</h5>
                <p className='text-center fs-4 text-primary'>{source}</p>
            </div>
            <div className={styles.div}>
           
            <div  className='pt-4' id="miDiv" ref={divContext}>
                {article && article.map ( elem => 
                <div 
                key={elem.title}
                className='px-5'>
                    <hr></hr>
                <p className='text-primary text-center px-5 fs-1'><b>{elem.title}</b></p>
                </div>)}
            </div>
        
        </div>
    </div>;
}



export default Component1;