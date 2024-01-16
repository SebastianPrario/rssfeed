import RSSParser from 'rss-parser'
import Express from 'express'
import  cors  from 'cors'


const feedURL = 'https://netflixtechblog.com/feed'

const parser = new RSSParser()
const articles = []
const parse = async url => {
   
    const feed = await parser.parseURL('https://www.clarin.com/rss')
    console.log(feed.items.map( elem => articles.push( `${elem.title}`)))
    return articles
}

parse()

let app = Express()

app.use(cors())

const server =  app.listen('4000', () =>{
    console.log(`server listen at 4000`)
})

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // * permite acceder desde cualquier ruta (evita error CORS)
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });


app.get("/",(req,res) => {

    res.send(articles)
    console.log('llamando')
} )

