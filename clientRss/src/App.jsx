import { Route, Routes } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Home from './views/Home'
import UserForm from './pages/UserForm'
import PreferUser from './pages/PreferUser/PreferUser'
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
