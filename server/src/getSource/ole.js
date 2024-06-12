const Parser = require('rss-parser')

const oleRss = async (URL) => {
  let feed = ''
  const parser = new Parser()
  const articles = []
  console.log('entra OLE')

  for (const elem of URL) {
    feed = await parser.parseURL(elem)
   
    feed.items.map(elem => {
      
      articles.push(
        {
          title: `${elem.title}`,
          content: elem.content?.slice(3, -4) | '',
          link: elem.link,
          source: `${feed.title}`,
          image: JSON.stringify(elem.enclosure.url).slice(1, -1)

        }
      )
    }
    )
  }
  return articles
}

module.exports = oleRss
