import React, { useContext } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import AuthContext from '../auth/AuthContext/AuthContext'
import styled from 'styled-components'

const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    align-content: end;
    width: 100%;
    justify-content: space-between;
    background-color: #4040f5;
    position: fixed;
    z-index: 100;
`

export default function NavBar () {
  const { login, logout, authState } = useContext(AuthContext)

  const setLogin = () => {
    login('sebastian')
  }
  const setLogout = () => {
    logout()
  }

  return (
    <Nav>
      <div className='ms-0 mt-2'>
        <Dropdown align='start'>
          <Dropdown.Toggle className='ms-0' variant='Primary' id='dropdown-basic'>
            <svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24'><path fill='#000000' d='M4 17.27v-1h16v1zm0-4.77v-1h16v1zm0-4.77v-1h16v1z' /></svg>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href='#/action-1'>Crear Cuenta</Dropdown.Item>
            <Dropdown.Item onClick={setLogin}>Ingresar </Dropdown.Item>
            <Dropdown.Item onClick={setLogout}>Salir</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className='col-4'>
        <h5 className='text-center fs-1 '>titulares</h5>
      </div>
      <div className='col-3'>
        {authState.user?.name && <div className='d-none d-md-block fs-4  mt-2'><b>Hola,{authState.user.name}</b></div>}
      </div>
    </Nav>
  )
}
