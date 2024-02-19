const JSZip = require('jszip');

const getURL = async () => {
  try{
  const response = await fetch ('https://ssl.smn.gob.ar/dpd/zipopendata.php?dato=tiepre')
  if (!response) { return ('no se pudo conectar con servidor')}
  let array =  []
  array = await response.arrayBuffer()
  return array
  } catch (error) {console.log(error)}
}

const  unZip= async () => {

  const array = await getURL()
  const zip = await JSZip.loadAsync(array)
  const respuesta = zip.files
  const name = (Object.keys(respuesta)[0])
  const miArchivo = zip.file(`${name}`);
  if (miArchivo) {
      const contenido = await miArchivo.async('string')
      return contenido
    } else {
        console.log('El archivo no existe en el ZIP.');
    }
  
}   



  

module.exports = {
  
    getURL,
    unZip

}
