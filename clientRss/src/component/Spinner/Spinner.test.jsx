import { render, screen } from '@testing-library/react'
import React from 'react'
import Spinner from './Spinner'

describe('Component Spinner', () => {
  test('should render spinner component', () => {
    render(<Spinner />)
    const text = screen.getByText('Loading...')
    expect(text).toBeDefined()
  })
})
