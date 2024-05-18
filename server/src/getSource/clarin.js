const Parser = require('rss-parser')

const getURLImage = (element) => {
  const regex = /"([^"]+)"/g
  const matches = element?.match(regex)
  return matches
}

const clarinRss = async (URL) => {
  const parser = new Parser()
  const articles = []
  console.log('entra clarin')
  let feed = ''
  for (const elem of URL) {
    feed = await parser.parseURL(elem)
    feed.items.map(elem => {
      const image = getURLImage(JSON.stringify(elem?.enclosure))[1].slice(1, -1)
      console.log(image)
      articles.push(
        {
          title: `${elem.title}`,
          content: `${elem.content}`,
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

module.exports = clarinRss
