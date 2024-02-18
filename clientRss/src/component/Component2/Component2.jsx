import  { useRef, useState , React, useEffect, useReducer } from 'react';
import styles from './Component2.module.css'



const Component2 =  ({notes2})  => {
 
    const [ title , setTitle ] = useState ()
    const [ content , setContent ] = useState ()
    const [ source , setSource ] = useState ()
    const [ image , setImage ] = useState ()
    const [ link , setLink ] = useState ()
    const [ position , setPosition ]  =useState (0)

    const slider = () => {
        setTimeout(() => {
            if( position === notes2.length+1 ) return  setPosition(0)   
            setPosition(position+1)
            setTitle(notes2[position].title)
            setContent(notes2[position].content)
            setSource(notes2[position].source)
            setLink(notes2[position].link)
            setImage(notes2[position].enclosure.split('"')[3])
        },5000);
    }
    
    useEffect (() => slider() ,[position])

    return (
    <div className={styles.container}>
            <div  className='col-6 me-1 mt-1 text-center'>
                <a className='link-offset-2 link-underline link-underline-opacity-0' href={link}>
                   <p className='display-7 sm-4 text-align-center'><b>{title}</b></p>
                </a>
                <p>{source}</p>
            </div>
            {image && <img className={styles.img} src={image} alt={title} />}
     </div>)
}



export default Component2;

