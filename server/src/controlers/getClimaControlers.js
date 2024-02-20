const { unZip} = require ('../utils/getWeather.js')




// setInterval( async () =>
// {
//     try{
//     datos = await  unzip()
//     console.log(datos)
//     }catch (error) {console.log(error)}
// }, 50000)



const climaInfo = async (ciudad) => {
    let datos = await  unZip()

    try {
    const nuevoarray = []
    
    const arrayData = datos ? datos.split('/ \r\n ') : ""
    arrayData.forEach( elem => {
        const datos =  elem.split(';');
            nuevoarray.push({
                ciudad: datos[0],
                fecha: datos[1],
                hora: datos[2],
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