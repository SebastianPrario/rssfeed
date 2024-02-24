import { useState, React, useEffect } from 'react'
import styles from './Component2.module.css'

const Component2 = ({ notes2 }) => {
  const [article, setArticle] = useState(0)
  const slider = () => {
    if (!article.position) {
      setArticle({
        title: notes2[0].title,
        source: notes2[0].source,
        content: notes2[0].content,
        link: notes2[0].link,
        image: notes2[0].enclosure.split('"')[3],
        position: +1
      })
    } else {
      setTimeout(() => {
        setArticle({
          title: notes2[article.position].title,
          source: notes2[article.position].source,
          content: notes2[article.position].content,
          enclosure: notes2[article.position].enclosure,
          link: notes2[article.position].link,
          image: notes2[article.position].enclosure.split('"')[3],
          position: article.position + 1
        })
      }, 7000)
    }
  }

  useEffect(() => slider(), [article])

  return (
    <div className={styles.container}>
      <div className='sm-col-12 md-col-6 me-1 mt-1 text-center'>
        <a className='link-offset-2 link-underline link-underline-opacity-0' href={article.link}>
          <p className='d-blox d-md-none display-7 text-align-center'><b>{article.title}</b></p>
          <p className='d-none d-md-block fs-3 text-align-center'><b>{article.title}</b></p>
        </a>
        <p className='fs-6 md-fs-5'>{article.source}</p>
      </div>
      {article.image && <img className={styles.img} src={article.image} alt={`imagen del sitio ${article.source}`} />}
    </div>
  )
}

export default Component2
