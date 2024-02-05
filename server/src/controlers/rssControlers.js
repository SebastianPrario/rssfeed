let Parser = require ('rss-parser')

const parseInfo = async (source) => {
    let parser = new Parser()
    const articles = []
    URL = ""
    console.log(source.source)
    switch (source.source) {
        case "clarin":
            console.log('entro clarin')
          URL = 'https://www.clarin.com/rss'
          break;         
        case "telam":
            console.log('entro telam')
            URL = 'https://www.telam.com.ar/rss2/ultimasnoticias.xml';
            break;           
        case "perfil":
            console.log('entro perfil')
            URL = 'https://www.perfil.com/feed';
            break;    
            case "perfildeportes":
                console.log('entro perfil')
                URL = 'https://www.perfil.com/feed/deportes';
                break;    
        
        default:
        URL = ""
          
    }
    
    if ( URL.length>0 ) {
        let feed = ""
        feed = await parser.parseURL(URL)
        feed.items.map( elem => articles.push( 
            {title : `${elem.title}`,
            content: `${elem.content}`,
            source: `${feed.title}`
        }))
        
        return articles
    } else return ('source not valid')
}

module.exports = parseInfo
