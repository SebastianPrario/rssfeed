import { Route, Routes } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Home from './views/Home'
import UserForm from './views/NavBar/components/UserForm'
import PreferUser from './views/NavBar/components/PreferUser'
import { UserProvider } from '../context/user'

function App () {
  return (
    <>
      <UserProvider>
        <Analytics />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/form' element={<UserForm />} />
          <Route path='/preferUser' element={<PreferUser />} />
        </Routes>
      </UserProvider>
    </>

  )
}

export default App
