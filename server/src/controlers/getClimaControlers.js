const { unZip} = require ('../utils/getWeather.js')

const climaInfo = async (ciudad) => {
    let datos = await  unZip()
    setInterval( async () =>
    {
     try{
     datos = await unZip()
     console.log('recargando estado del tiempo')
     return datos
     }catch (error) {console.log(error)}
     }, 50000)


    try {
    const nuevoarray = []
    
    const arrayData = datos ? datos.split('/ \r\n ') : ""
    arrayData.forEach( elem => {
        const datos =  elem.split(';');
           
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