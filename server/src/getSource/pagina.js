const Parser = require('rss-parser')

const getURLImage = (element) => {
  const regex = /"([^"]+)"/g
  const matches = element?.match(regex)
  return matches
}

const paginaRss = async (URL) => {
  const parser = new Parser()
  const articles = []

  let feed = ''
  for (const elem of URL) {
    feed = await parser.parseURL(elem)
    console.log(feed.items[0].enclosure.url)
    feed.items.map(elem => {
      articles.push(
        {
          title: `${elem.title}`,
          content: `${elem.content}`,
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

module.exports = paginaRss
