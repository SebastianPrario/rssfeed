import { useContext } from 'react'
import './Footer.css'
import { userContext } from '../../../context/user'

export default function Footer () {
  // const { filters } = useFilters()
  const user = (window.localStorage.getItem('user'))
  const { state } = useContext(userContext)
  return (
    <footer className='footer'>
      <h4> useContext</h4>
      <h5>{JSON.stringify(state)}</h5>
      <h4> LocalStorage</h4>
      {user && <h5>{user}</h5>}
    </footer>
  )
}
