import { useEffect, useRef, useState } from 'react'
import styles from './Component1.module.css'
import gsap from 'gsap'

const Component1 = ({ notes }) => {
  console.log(notes)
  const [altura, setAltura] = useState(3000)
  const [article, setArticle] = useState()
  const [source, setSource] = useState()
  const divContext = useRef()
  //console.log(divContext.current.offsetHeight )
  const tl = gsap.timeline({ repeat: -1 })

  divContext.current && tl.to(divContext.current, {
    duration: 0,
    y: 200
  })

  divContext.current && tl.to(divContext && divContext.current, {
    duration: altura * 0.5,
    y: -altura * 9.226,
    ease: 'none'
  })

  useEffect(() => {
    !!notes &&
    setArticle(notes)
    setSource(notes[0].source)
  }, [notes])

  useEffect(() => {
    setAltura(notes.length * 50)
  }, [notes])

  return (
    <div className={styles.component1}>
      <div className='row bg-primary z-3 '>
        <h5 className='text-center fs-1 bg-primary z-3 text-white'>titulares</h5>
      </div>
      <div className='row'>
        <div className='pt-4' id='miDiv' ref={divContext}>
          {article && article.map((elem, index) =>
            <div
              key={index}
              className='px-5'
            >
              <hr />
              <a className='link-offset-2 link-underline link-underline-opacity-0' href={elem.link}>
                <p className='text-primary text-center px-5 fs-1'><b>{elem?.title}</b></p>
              </a>
              <p className='text-center fs-6'>{source}</p>
            </div>)}
        </div>
      </div>
    </div>
  )
}

export default Component1
