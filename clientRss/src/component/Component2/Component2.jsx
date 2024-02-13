import  { useRef, useState , React, useEffect, useReducer } from 'react';
import styles from './Component2.module.css'



const Component2 =  ({notes2})  => {
 
    const [ title , setTitle ] = useState ()
    const [ content , setContent ] = useState ()
    const [ source , setSource ] = useState ()

    const [ position , setPosition ]  =useState (0)

    const slider = () => {
        setTimeout(() => {
            if( position === notes2.length+1 ) return  setPosition(0)   
            setPosition(position+1)
            setTitle(notes2[position].title)
            setContent(notes2[position].content)
            setSource(notes2[position].source)
        },5000);
    }
    
    useEffect (() => slider() ,[position])

    return (
    <div className={styles.container}>
        <div>
            <div  className='my-4 mx-4 text-center'>
                <p className='display-6 md-display-5 text-align-center'><b>{title}</b></p>
                <p>{source}</p>
            </div>
        </div>
    </div>)
}



export default Component2;