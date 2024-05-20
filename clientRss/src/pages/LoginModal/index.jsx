import React, { Children, useState } from 'react'
import Styled from './styles'
import { loginWithMail } from '../../FireBase/loginwithMail'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { loginWithGoogle } from '../../FireBase/loginWithGoogle'


export default function LoginModal ({ handleLogin, children }) {
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
              {children}
            </div>
          </div>
        </div>
      </div>
    </Styled.StyledModal>
  )
}
