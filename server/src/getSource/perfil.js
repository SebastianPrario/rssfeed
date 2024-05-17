const Parser = require('rss-parser')

const getURLImage = (element) => {
  const regex = /"([^"]+)"/g
  const matches = element.content.match(regex)
  return matches[0]
}

const perfilRss = async (URL) => {
  const parser = new Parser()
  const articles = []
  console.log('entra aca')
  let feed = ''
  for (const elem of URL) {
    feed = await parser.parseURL(elem)

    feed.items.map(elem => {
      const image = getURLImage(elem).slice(1, -1)
      articles.push(
        {
          title: `${elem.title}`,
          content: `${elem.content}`,
          link: `${elem.link}`,
          source: `${feed.title}`,
          enclosure: `${JSON.stringify(elem.enclosure)}`,
          image
        }
      )
    }
    )
  }
  return articles
}

module.exports = perfilRss
