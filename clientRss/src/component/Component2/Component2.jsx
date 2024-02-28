import  { useState , React, useEffect} from 'react';
import styles from './Component2.module.css'



const Component2 =  ({notes2})  => {
    
    const [ title , setTitle ] = useState ()
    const [ , setContent ] = useState ()
    const [ source , setSource ] = useState ()
    const [ image , setImage ] = useState ()
    const [ link , setLink ] = useState ()
    const [ position , setPosition ]  =useState (0)

    const slider = () => {
        if( position === notes2.length) return  setPosition(0) 
        if (position===0) {
            setTitle(notes2[position].title)
            setContent(notes2[position].content)
            setSource(notes2[position].source)
            setLink(notes2[position].link)
            setImage(notes2[position].enclosure.split('"')[3])
            setPosition(position+1)
        }
         setTimeout(() => {
          
            setTitle(notes2[position].title)
            setContent(notes2[position].content)
            setSource(notes2[position].source)
            setLink(notes2[position].link)
            setImage(notes2[position].enclosure.split('"')[3])
            setPosition(position+1)
        },7000);
    }
    
    useEffect (() => slider() ,[position])

    return (
    <div className={styles.container}>
            <div  className='sm-col-12 md-col-6 me-1 mt-1 text-center'>
                <a className='link-offset-2 link-underline link-underline-opacity-0' href={link}>
                   <p className='d-blox d-md-none display-7 text-align-center'><b>{title}</b></p>
                   <p className='d-none d-md-block fs-3 text-align-center'><b>{title}</b></p>
                </a>
                <p className='fs-6 md-fs-5'>{source}</p>
            </div>
            {image && <img className={styles.img} src={image} alt={title} />}
     </div>)
}



export default Component2;

