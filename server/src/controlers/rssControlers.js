const shuffleArray = require ('../utils/shuffle')


let Parser = require ('rss-parser')

const parseInfo = async (source) => {
    let parser = new Parser()
    const articles = []
    let URL = ""
    switch (source.source) {
        case "clarin":
            console.log('entro clarin')
          URL = ['https://www.clarin.com/rss','https://www.clarin.com/rss/policiales/',
          'https://www.clarin.com/rss/politica/','https://www.clarin.com/rss/internacional/',
          'https://www.clarin.com/rss/deportes/','https://www.clarin.com/rss/economia/'
            ]
          break;         
        case "telam":
            console.log('entro telam')
            URL = ['https://www.telam.com.ar/rss2/ultimasnoticias.xml'];
            break;           
        case "perfil":
            console.log('entro perfil')
            URL = ['https://www.perfil.com/feed','https://www.perfil.com/feed/economia',
           'https://www.perfil.com/feed/politica'
            ];
            break;    
        case "perfildeportes":
                console.log('entro perfil')
                URL = ['https://www.perfil.com/feed/deportes'];
                break;    
        
        default:
        URL = ""
          
    }
    
 




    if ( URL.length>0 ) {
        let feed = ""
        for ( const elem of URL) {
            feed = await parser.parseURL(elem)

                
                feed.items.map( elem =>{ 
                  
                    articles.push( 
                    {
                        title : `${elem.title}`,
                        content: `${elem.content}`,
                        link: `${elem.link}`,
                        source: `${feed.title}`,
                        enclosure : `${JSON.stringify(elem.enclosure)}`
                    }
                )
               }
            )
        }
        return shuffleArray(articles)
    } else return ('source not valid')
}

module.exports = parseInfo
