const shuffleArray = require('../utils/shuffle')
const perfilRss = require('../getSource/perfil.js')
const clarinRss = require('./../getSource/clarin')
const oleRss = require('../getSource/ole.js')

const parseInfo = async (source) => {
  let articles = []
  let URL = ''
  switch (source.source) {
    case 'Clarin':
      URL = ['https://www.clarin.com/rss', 'https://www.clarin.com/rss/policiales/',
        'https://www.clarin.com/rss/politica/', 'https://www.clarin.com/rss/internacional/',
        'https://www.clarin.com/rss/deportes/', 'https://www.clarin.com/rss/economia/'
      ]
      articles = clarinRss(URL)
      break
    case 'Ole':
      URL = ['https://www.ole.com.ar/rss/ultimas-noticias/', 'http://www.ole.com.ar/rss/futbol-internacional/libertadores', 'http://www.ole.com.ar/rss/futbol-internacional/champions/']
      articles = oleRss(URL)
      break
    case 'Perfil':
      URL = ['https://www.perfil.com/feed', 'https://www.perfil.com/feed/economia',
        'https://www.perfil.com/feed/politica']
      articles = perfilRss(URL)
      break
    case 'perfildeportes':
      console.log('entro perfil')
      URL = ['https://www.perfil.com/feed/deportes']
      break

    default:
      URL = ''
  }

  if (URL.length > 0) {
    return shuffleArray(articles)
  } else return ('source not valid')
}

module.exports = parseInfo
