import { Route, Routes } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import ArticleContainer from './containers/ArticleContainer'
import UserForm from './pages/UserForm'

function App () {
  return (
    <>
      <Analytics />
      <Routes>
        <Route path='/' element={<ArticleContainer />} />
        <Route path='/form' element={<UserForm />} />
      </Routes>
    </>

  )
}

export default App
