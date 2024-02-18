const icons = (icon) => {
    switch (icon) {
            case 'Algo nublado':
                icon= '../assets/icons/partly-cloudy-day.svg'
                console.log('entra en nublado')
                break;
            case 'Nublado':
                icon= '../assets/icons/cloudy.svg'
                break;
            case 'Despejado':
                icon= '../assets/icons/clear-day.svg'
                break;

        default:
            break;
    }
    return icon
}

export default icons