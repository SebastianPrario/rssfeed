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
             case 'Algo nublado':
                icon= '/icons/partly-cloudy-day.svg'
                break;
            case 'Parcialmente nublado':
                icon= '/icons/cloudy.svg'
                break;
            case 'Nublado' || 'Cubierto' :
                icon= '/icons/cloudy.svg'
                break;
                case 'Cubierto' :
                    icon= '/icons/cloudy.svg'
                    break;    
            case 'Despejado':
                if (hora<18) return icon= '/icons/clear-day.svg'
                else return '/icons/clear-night.svg'
                break;
            case 'Cubierto con neblina':
                icon= '/icons/fog.svg'
                break;
            case 'Cubierto con llovizna':
                icon= '/icons/rain.svg'
                break;
            case 'Nublado con lluvia':
                icon= '/icons/rain.svg'
                break;  
            case 'Cubierto con precipitación a la vista':
                    icon= '/icons/rain.svg'
                    break;    
            case 'Nublado con tormenta':
                icon= '/icons/lightning-bolt.svg'
                break;         
        default:
            icon='/icons/not-available.svg'
            break;
    }
    return icon
}

export default icons