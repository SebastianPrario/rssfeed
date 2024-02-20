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
                icon= '../assets/icons/partly-cloudy-day.svg'
                console.log('entra en nublado')
                break;
            case 'Parcialmente nublado':
                    icon= '../assets/icons/cloudy.svg'
                    console.log('entra en nublado')
                    break;
            case 'Nublado' || 'Cubierto':
                icon= '../assets/icons/cloudy.svg'
                break;
            case 'Despejado'|| hora<18:
                icon= '../assets/icons/clear-day.svg'
                break;
            case 'Despejado'|| hora>18:
                    icon= '../assets/icons/clear-night.svg'
                    break;    
            case 'Cubierto con neblina':
                icon= '../assets/icons/fog.svg'
                break;
                case 'Cubierto con llovizna':
                    icon= '../assets/icons/rain.svg'
                    break;

        default:
            icon='../assets/icons/not-available.svg'
            break;
    }
    return icon
}

export default icons