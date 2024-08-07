const Parser = require('rss-parser')

const getURLImage = (element) => {
  const regex = /"([^"]+)"/g
  const matches = element.content.match(regex)
  return matches[0]
}
const getTextInContent = (element) => {
  const inicio = element.split('>')
  const parteExtraida = inicio[3].split('<')[0]
  return parteExtraida
}
const perfilRss = async (URL) => {
  const parser = new Parser()
  const articles = []
  let feed = ''
  for (const elem of URL) {
    feed = await parser.parseURL(elem)
    feed.items.map(elem => {
      const image = getURLImage(elem).slice(1, -1)
      const content = getTextInContent(elem.content)
      articles.push(
        {
          title: `${elem.title}`,
          content,
          link: `${elem.link}`,
          source: `${feed.title}`,
          image
        }
      )
    }
    )
  }
  return articles
}

module.exports = perfilRss
