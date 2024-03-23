import { render , screen } from '@testing-library/react'
import React from 'react'
import App from './App.jsx'


describe('<App/>', () => { 
    
test('deberia renderizar componente ', () => {
    render(<App/>)
    console.log(render.container)
})


})