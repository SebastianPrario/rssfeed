function obtenerHoraActual() {
    const fechaActual = new Date();
    const hora = fechaActual.getHours();
  
  
    // Formateamos la hora para mostrarla en un formato legible
    const horaFormateada = `${hora}`;
  
    return horaFormateada;
  }
  
const icons = (icon) => {
    const hora = obtenerHoraActual()
    switch (icon) {
             case 'Algo nublado' :
                icon= '/icons/partly-cloudy-day.svg'
                console.log('entra en nublado')
                break;
            case 'Parcialmente nublado':
                    icon= '/icons/cloudy.svg'
                    console.log('entra en nublado')
                    break;
            case 'Nublado' || 'Cubierto':
                icon= '/icons/cloudy.svg'
                break;
            case 'Despejado'|| hora<18:
                icon= '/icons/clear-day.svg'
                break;
            case 'Despejado'|| hora>18:
                    icon= '/icons/clear-night.svg'
                    break;    
            case 'Cubierto con neblina':
                icon= '/icons/fog.svg'
                break;
                case 'Cubierto con llovizna':
                    icon= '/icons/rain.svg'
                    break;

        default:
            icon='/icons/not-available.svg'
            break;
    }
    return icon
}

export default icons