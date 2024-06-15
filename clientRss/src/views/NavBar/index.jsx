import React, { useContext, useEffect, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import styled from 'styled-components'
import LoginModal from './components/LoginModal'
import { signOut, onAuthStateChanged } from 'firebase/auth'
import { fireBaseConfig } from '../../FireConfig/fireBaseConfig'
import logo from '/logo.jpg'
import { userContext } from '../../../context/user'
import FormLogin from './components/FormLogin'
import UserForm from './components/UserForm'
import PreferUser from './components/PreferUser'

const Nav = styled.nav`
    display: flex;
    position: fixed;
    flex-direction: row;
    align-content: end;
    width: 100%;
    justify-content: space-between;
    background-color: #4040f5;
    position: fixed;
    z-index: 100;
`

export default function NavBar () {
  const [handleChange, setHandleChange] = useState('')
  const { state, clearDocument } = useContext(userContext)
  const [user, setUser] = useState(null)
  const auth = fireBaseConfig()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) { setUser(user) } else { setUser(null) }
      if (!user) { clearDocument() }
    })
  }, [])

  const handleLogin = () => {
    setHandleChange('')
  }
  const setLogout = () => {
    signOut(auth).then(
      () => clearDocument()
    )
  }

  if (handleChange === 'login') {
    return (
      <LoginModal handleLogin={handleLogin}>
        <FormLogin onCloseModal={setHandleChange} />
      </LoginModal>
    )
  }
  if (handleChange === 'form') {
    return (
      <LoginModal handleLogin={handleLogin}>
        <UserForm onCloseModal={setHandleChange} />
      </LoginModal>
    )
  }
  if (handleChange === 'pref') {
    return (
      <LoginModal handleLogin={handleLogin}>
        <PreferUser setHandleChange={setHandleChange} />
      </LoginModal>
    )
  }
  return (
    <Nav>
      <div className='col-4 ms-0 mt-2'>
        <Dropdown align='start'>
          <Dropdown.Toggle className='ms-0 text-white' variant='Primary' id='dropdown-basic'>
            <i className='bi bi-list' />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item disabled={user} onClick={() => setHandleChange('form')}>
              Crear Cuenta
            </Dropdown.Item>
            <Dropdown.Item disabled={user} onClick={() => setHandleChange('login')}>Ingresar </Dropdown.Item>
            <Dropdown.Item disabled={!user} onClick={() => setHandleChange('pref')}>
              Preferencias
            </Dropdown.Item>
            <Dropdown.Item disabled={!user} onClick={() => setLogout()}>Salir</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className='col-4 d-inline-flex'>
        <img src={logo} style={{ width: '50px' }} alt='imagen del logo de la pagina' />
        <h5 className='d-none d-sm-flex text-center ms-1 text-white fs-1 '>Las Noticias Ya</h5>
        <h5 className='col-12 d-flex d-sm-none text-center ms-auto my-auto text-white fs-6 '>Las Noticias Ya</h5>
      </div>
      <div className='col-4'>
        {state.user && <div className='d-none d-md-block fs-4 mt-2 text-white'><b>Hola, {state.user}</b></div>}
      </div>
    </Nav>
  )
}
