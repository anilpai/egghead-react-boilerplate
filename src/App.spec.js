import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders with error', () => {
    render(<App />)
  })
})
