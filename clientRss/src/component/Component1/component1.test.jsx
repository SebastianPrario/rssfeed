import { render, screen } from '@testing-library/react'
import Component1 from './Component1'

const notes = [{
  title:
    'Euro blue hoy: el minuto a minuto de la cotización de este miércoles 27 de marzo de 2024',
  content:
    '<p><img src="https://fotos.perfil.com/2023/04/03/trim/540/304/euros-1539936.jpg" alt="Euros" /></p>Seguí en vivo la apertura del mercado de la divisa europea hoy, 27 de marzo del 2024.\r\n' +
    ' <a href="https://www.perfil.com/noticias/economia/euro-blue-hoy-el-minuto-a-minuto-de-la-cotizacion-de-este-miercoles-27-de-marzo-de-2024.phtml">Leer más</a>',
  link:
    'https://www.perfil.com/noticias/economia/euro-blue-hoy-el-minuto-a-minuto-de-la-cotizacion-de-este-miercoles-27-de-marzo-de-2024.phtml',
  source: 'Economia | Perfil',
  enclosure: 'undefined'
}]

describe('<componente1/>', () => {
  test('se espera que se renderise el titulo', () => {
    render(<Component1 notes={notes} />)
    const text = screen.getByText('Euro blue hoy: el minuto a minuto de la cotización de este miércoles 27 de marzo de 2024')
    expect(text).toBeTruthy()
  })
})
