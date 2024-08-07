const Parser = require('rss-parser')

const getTextInContent = (element) => {
  const inicio = element.split('\n')
  const parteExtraida = inicio[2]
  return parteExtraida
}
const profesionalRss = async (URL) => {
  const parser = new Parser()
  const articles = []
  console.log('entra iprofesional')
  let feed = ''
  for (const elem of URL) {
    feed = await parser.parseURL(elem)

    feed.items.map(elem => {
      const content = getTextInContent(elem.content).trim()
      articles.push(
        {
          title: `${elem.title}`,
          content,
          link: `${elem.link}`,
          source: `${feed.title}`,
          image: `${elem.enclosure.url}`
        }
      )
    }
    )
  }
  return articles
}

module.exports = profesionalRss
