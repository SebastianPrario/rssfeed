/* eslint-disable no-undef */
import { render, screen, waitFor } from '@testing-library/react'
import React from 'react'
import GetQuote from './GetQuote'
import useGetData from '../Hook/useGetData'

// esta funcion hace un mock del custom hook que se esta requiriendo
jest.mock('../Hook/useGetData')

describe('Component GetQuote', () => {
  test('should render in GetQuote the text Cargando ...', () => {
  // se mockea el hook con su valor inicial de loading: true y deberia devolver el texto Cargando...
    useGetData.mockReturnValue({
      data: '',
      isloading: true
    })
    render(<GetQuote />)
    const text = screen.getByText('Cargando ...') // es sincronico
    expect(text).toBeDefined()
  })
  // test('should be match whith SnapShot', () => {

  //   const { container } = render(<GetQuote/>)
  //   expect(container).toMatchSnapshot()
  // })
  test('se espera que cuando el compomente este cargado no aparezca el texto cargando', () => {
    // hacer un mock de un custom hook
    useGetData.mockReturnValue({
      data:
      {
        oficial: { value_avg: 172.5, value_sell: 902, value_buy: 843 },
        blue: { value_avg: 1000, value_sell: 1015, value_buy: 985 },
        oficial_euro: { value_avg: 948.5, value_sell: 980, value_buy: 917 },
        blue_euro: { value_avg: 1087, value_sell: 1103, value_buy: 1071 },
        last_update: '2024-03-26T19:00:34.920837-03:00'
      },
      isloading: false
    })

    render(<GetQuote />)
    // screen.debug()  esto sirve para ver lo que se esta renderizando
    const text = screen.queryByText('Cargando ...')
    expect(text).toBeFalsy()
  })
  // test('should not be found a text load when the component is loaded', async () => {
  //   render(<GetQuote />)
  //   await waitFor(() => expect(screen.findByText('Cargando ...')).toBeDefined(), { timeout: 3000 })
  // })
  test('should be found a text Blue when the component is mounted', () => {
    // hacer un mock de un custom hook
    useGetData.mockReturnValue({
      data:
      {
        oficial: { value_avg: 172.5, value_sell: 902, value_buy: 843 },
        blue: { value_avg: 1000, value_sell: 1015, value_buy: 985 },
        oficial_euro: { value_avg: 948.5, value_sell: 980, value_buy: 917 },
        blue_euro: { value_avg: 1087, value_sell: 1103, value_buy: 1071 },
        last_update: '2024-03-26T19:00:34.920837-03:00'
      },
      isloading: false
    })

    render(<GetQuote />)
    // screen.debug()  esto sirve para ver lo que se esta renderizando
    const text = screen.queryByText('Cargando ...')
    expect(text).toBeFalsy()
  })
})

// findBy se usa para asincronia
