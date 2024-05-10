import React, { useEffect, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import styled from 'styled-components'
import LoginModal from '../pages/LoginModal'
import { signOut, onAuthStateChanged } from 'firebase/auth'
import { fireBaseConfig } from '../FireBase/fireBaseConfig'

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
  const [user, setUser] = useState(null)
  const [loginModal, setLoginModal] = useState(false)
  const auth = fireBaseConfig()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) { setUser(user) } else { setUser(null) }
    })
  }, [])
   console.log(user)
  const handleLogin = () => {
    if (!loginModal) setLoginModal(true)
    else setLoginModal(false)
  }
  const setLogout = () => {
    // logout()
    signOut(auth)
  }

  return (
    <Nav>
      {loginModal && <LoginModal handleLogin={handleLogin} />}
      <div className='col-4 ms-0 mt-2'>
        <Dropdown align='start'>
          <Dropdown.Toggle className='ms-0' variant='Primary' id='dropdown-basic'>
            <i className='bi bi-list' />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href='/form'>Crear Cuenta</Dropdown.Item>
            <Dropdown.Item disabled={user} onClick={() => handleLogin()}>Ingresar </Dropdown.Item>
            <Dropdown.Item onClick={setLogout}>Salir</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className='col-4'>
        <h5 className='text-center fs-1 '>titulares</h5>
      </div>
      <div className='col-4'>
        {user?.reloadUserInfo.email && <div className='d-none d-md-block fs-4 mt-2'><b>Hola,{user?.reloadUserInfo.email}</b></div>}
      </div>
    </Nav>
  )
}
