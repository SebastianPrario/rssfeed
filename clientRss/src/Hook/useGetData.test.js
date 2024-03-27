/* eslint-disable no-undef */
import { renderHook, waitFor } from '@testing-library/react'
import useGetData from './useGetData'

const URL = 'https://api.bluelytics.com.ar/v2/latest'

describe('pruebas en custom hook', () => {
  // esta prueba se realiza antes con el estado inicial
  test('debe de retornar el estado inicial', () => {
    const { result } = renderHook(() => useGetData(URL, 1000))
    const { data, isloading } = result.current
    expect(Object.keys(data).length).toBe(0)
    expect(isloading).toBeTruthy()
  })
  // esta prueba se realiza cuando recibe la informacion de la api
  test('debe de retornar un objeto al montar el componente', async () => {
    const { result } = renderHook(() => useGetData(URL, 1000))
    await waitFor(() =>
      expect(Object.keys(result.current.data).length).not.toBe(0), {timeout: 6000})
    const { data, isloading } = result.current
    expect(isloading).toBeFalsy()
  })
})
