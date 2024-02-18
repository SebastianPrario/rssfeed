const { error } = require('console')
const fs = require ('fs')

const climaInfo = async (ciudad) => {
    try {
    const nuevoarray = []
    let data = fs.readFileSync( __dirname + './../utils/tiempo.txt', 'utf-8')
    const arrayData = data.split('/ \r\n ')
    arrayData.forEach( elem => {
        const datos =  elem.split(';');
            console.log(datos)
            nuevoarray.push({
                ciudad: datos[0],
                fecha: datos[1],
                estado: datos[3],
                viento: datos[4],
                temperatura: datos[5],
                termica: datos[6],
                presion: datos[9]
            })
    })
    
    // for (let index = 0; index < arrayData.length; index++) {
    //     const datos =  arrayData[index].split(';');
    //     console.log(datos)
    //     nuevoarray.push({
    //         ciudad: datos[0],
    //         fecha: datos[1],
    //         estado: datos[3],
    //         viento: datos[4],
    //         temperatura:datos[5],
    //         termica: datos[6],
    //         presion: datos[9]

    //     })
    // }
    const response =  nuevoarray.filter (elem => elem.ciudad === ciudad.ciudad)
    return response
    }catch (error) {console.log (error)}
   
}

module.exports = climaInfo