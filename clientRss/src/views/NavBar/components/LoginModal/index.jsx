import React from 'react'
import Styled from './styles'

export default function LoginModal ({ handleLogin, children }) {
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
