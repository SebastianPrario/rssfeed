import React, { useContext, useState } from 'react'
import Styled from './styles'
import { loginWithMail } from '../../FireBase/loginwithMail'
import AuthContext from '../../auth/AuthContext/AuthContext'
import Swal from 'sweetalert2'

export default function LoginModal ({ handleLogin }) {
  const [userLogin, setUserLogin] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState(null)
  const { login } = useContext(AuthContext)

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
    const { user, errors } = await loginWithMail(userLogin.email, userLogin.password)
    console.log(errors.length)
    if (errors.length > 0) {
      setUserLogin({ email: '', password: '' })
      return Swal.fire(errors)
    }
    login(user.email)
    setUserLogin({ email: '', password: '' })
    handleLogin()
  }

  return (
    <Styled.StyledModal>
      <div className='container py-1 col-12'>
        <div className='row d-flex justify-content-center align-items-center h-100'>
          <div className='col-12 col-md-12 col-lg-12 col-xl-5'>
            <div className='card bg-dark text-white' style={{ 'border-radius': '1rem' }}>
              <button type='button' onClick={handleLogin} className='mt-2 mx-auto col-1 btn btn-light'>cerrar </button>
              <div className='card-body p-5 text-center'>
                <div className='mb-md-5 mt-md-4 pb-5'>
                  <h2 className='fw-bold mb-2 text-uppercase'>Login</h2>
                  <p className='text-white-50 mb-5'>Por favor, ingresar usuario y clave</p>

                  <div data-mdb-input-init className='form-outline form-white mb-4'>
                    <input
                      type='email'
                      name='email'
                      className='form-control form-control-lg'
                      value={userLogin.email}
                      onChange={(e) => handleChange(e)}
                    />
                    <label className='form-label' for='typeEmailX'>Usuario</label>
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
                    <label className='form-label' for='typePasswordX'>Clave</label>
                  </div>

                  <p className='small mb-5 pb-lg-2'><a className='text-white-50' href='#!'>Forgot password?</a></p>

                  <button
                    data-mdb-button-init data-mdb-ripple-init className='btn btn-outline-light btn-lg px-5'
                    onClick={handleSubmit}
                    type='submit'
                  >Login
                  </button>

                  <div className='d-flex justify-content-center text-center mt-4 pt-1'>
                    <a href='#!' className='text-white'><i className='fab fa-google fa-lg' /></a>
                  </div>

                </div>

                <div>
                  <p className='mb-0'>Don't have an account? <a href='#!' className='text-white-50 fw-bold'>Sign Up</a>
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </Styled.StyledModal>
  )
}
