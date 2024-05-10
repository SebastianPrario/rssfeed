import React, { useState } from 'react'
import Styled from './styles'
import { loginWithMail } from '../../FireBase/loginwithMail'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { loginWithGoogle } from '../../FireBase/loginWithGoogle'


export default function LoginModal ({ handleLogin }) {
  const [userLogin, setUserLogin] = useState({ email: '', password: '' })

  function handleChange (e) {
    const nameinput = e.target.name
    const valueinput = e.target.value
    setUserLogin({
      ...userLogin,
      [nameinput]: valueinput
    })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    const { errors } = await loginWithMail(userLogin.email, userLogin.password)
    if (errors.length > 0) {
      setUserLogin({ email: '', password: '' })
      return Swal.fire('email o contraseña incorrecta')
    }
    setUserLogin({ email: '', password: '' })
    handleLogin()
  }

  const handleWithGoogle = () => {
    loginWithGoogle()
    setUserLogin({ email: '', password: '' })
    handleLogin()
  }

  return (
    <Styled.StyledModal>
      <div className='container py-1 col-12'>
        <div className='row d-flex  align-items-center h-100'>
          <div className='col-12 col-md-12 col-lg-12 col-xl-5'>
            <div className='card bg-dark text-white' style={{ 'border-radius': '1rem' }}>
              <div className='ms-auto col-1'>
                <button type='button' onClick={handleLogin} className=' text-center mt-2 btn btn-light'>x</button>
              </div>
              <div className='card-body p-5 text-center'>
                <div className='mb-md-5 mt-md-4 pb-5'>
                  <h2 className='fw-bold mb-2 text-uppercase'>Login</h2>
                  <p className='text-white-50 mb-5'>Por favor, ingresar mail y clave</p>

                  <div data-mdb-input-init className='form-outline form-white mb-4'>
                    <input
                      type='email'
                      name='email'
                      className='form-control form-control-lg'
                      value={userLogin.email}
                      onChange={(e) => handleChange(e)}
                    />
                    <label className='form-label' for='typeEmailX'>correo</label>
                  </div>

                  <div data-mdb-input-init className='form-outline form-white mb-4'>
                    <input
                      type='password'
                      name='password'
                      id='typePasswordX'
                      className='form-control form-control-lg'
                      value={userLogin.password}
                      onChange={(e) => handleChange(e)}
                    />
                    <label className='form-label' for='typePasswordX'>clave</label>
                  </div>

                  <p className='small mb-5 pb-lg-2'><a className='text-white-50' href='#!'>Olvidaste la contraseña?</a></p>

                  <button
                    data-mdb-button-end data-mdb-ripple-init className='btn btn-outline-light btn-lg'
                    onClick={handleSubmit}
                    type='submit'
                  >Login
                  </button>

                  <div className='d-flex justify-content-center text-center mt-4 pt-1'>
                    entrar con
                    <button className='ms-2' onClick={handleWithGoogle}>
                      <i className='bi bi-google' />
                    </button>
                  </div>
                  <div>
                    <p className='mt-3'> No tienes cuenta? <Link className='text-white-50 ms-1 fw-bold' to='/form'>Sign Up</Link>
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </Styled.StyledModal>
  )
}
