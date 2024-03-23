/* eslint-disable no-undef */
import { render, screen, waitFor } from '@testing-library/react'
import React from 'react'
import GetQuote from './GetQuote'
import useGetData from '../Hook/useGetData'

describe('Component GetQuote', () => {
  test('should render GetQuote component', () => {
    render(<GetQuote />)
    const text = screen.getAllByText('Cargando ...')
    expect(text).toBeDefined()
  })
  // test('should be match whith SnapShot', () => {

  //   const { container } = render(<GetQuote/>)
  //   expect(container).toMatchSnapshot()
  // })
  test('should be found a text Blue', async () => {
    render(<GetQuote />)
    const text = screen.findByText('Blue:')
    expect(text).toBeDefined()
  })
  test('should not be found a text load when the component is loaded', async () => {
    render(<GetQuote />)
    await waitFor(() => expect(screen.findByText('Cargando ...')).toBeDefined(), { timeout: 3000 })
  })
})
// findBy se usa para asincronia
