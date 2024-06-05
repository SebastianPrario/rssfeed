import { Route, Routes } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Home from './views/Home'
import { UserProvider } from '../context/user'

function App () {
  return (
    <>
      <UserProvider>
        <Analytics />
        <Home />
      </UserProvider>
    </>

  )
}

export default App
