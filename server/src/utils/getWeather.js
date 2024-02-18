const fs = require ('fs')
const JSZip = require('jszip');


const weatherData = []


const getURL = async () => {
  try{
  const response = await fetch ('https://ssl.smn.gob.ar/dpd/zipopendata.php?dato=tiepre')
  if (!response) { return ('no se pudo conectar con servidor')}
  let array =  []
  array = await response.arrayBuffer()
  return array
  } catch (error) {console.log(error)}
}

const unzip = async (array) =>{ 
  try{
      const array = await getURL()
      JSZip.loadAsync(array).then(function (zip) {
        const respuesta = zip.files
        const name = (Object.keys(respuesta)[0])
        const miArchivo = zip.file(`${name}`);
        if (miArchivo) {
          miArchivo.async('string').then((contenido) => {
            fs.writeFile(__dirname + '/tiempo.txt', contenido, function(err) {
              if (err) {
                return console.log(err);
              }
              console.log("El archivo fue creado correctamente");
            });
          });
        } 
        else {
          console.log('El archivo no existe en el ZIP.');
        }
      })
    }catch (error) { console.log(error)}
}


 


    

  


// }
// const  getFetch = async () => {
//   let weatherData = {}
//   const path = './EstadoTiempo-16022024 (2).zip'
//   fs.readFile(__dirname + '/tiempo.zip', function(err, data) {
//     if (err) throw err;
//     JSZip.loadAsync(data).then(function (zip) {
//         const respuesta = zip.files
//         const name = (Object.keys(respuesta)[0])

//         const miArchivo = zip.file(`${name}`);
//     if (miArchivo) {
//       miArchivo.async('string').then((contenido) => {
//         weatherData = contenido;
//       });
//     } else {
//       console.log('El archivo no existe en el ZIP.');
//     }

//       })
      
//     });
   
   

// }

const  getWeather =  async (data) => {

 
}



module.exports = {
    getWeather,
    getURL,
    unzip

}

// const getURL = async () => {
//   try{
//   const response = await fetch ('https://ssl.smn.gob.ar/dpd/zipopendata.php?dato=tiepre')
//   const array = await response.arrayBuffer()
//   return array
//   } catch (error) {console.log(error)}
// }


// const  getZip= async () => {
//   try{
//     const array = await getURL()
//     JSZip.loadAsync(array).then(function (zip) {
//       const respuesta = zip.files
//       const name = (Object.keys(respuesta)[0])
//       const miArchivo = zip.file(`${name}`);
//       if (miArchivo) {
//         miArchivo.async('string').then((contenido) => {
//         weatherData = contenido;
//         console.log(weatherData)
//         return weatherData
//         });
//       } 
//       else {
//         console.log('El archivo no existe en el ZIP.');
//       }
//     })
//   }catch (error) { console.log(error)}
// }   
    