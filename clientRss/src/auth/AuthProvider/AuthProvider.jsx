import React, { useReducer } from 'react'
import AuthContext from './../AuthContext/AuthContext'
import { authReducer } from '../AuthReducer/authReducer'
import { types } from '../types'

const inicialState = {
  logged: false

}
const init = () => {
  const user = JSON.parse(window.localStorage.getItem('user'))
  return {
    logged: !!user,
    user
  }
}
export default function AuthProvider ({ children }) {
  const [authState, dispatch] = useReducer(authReducer, inicialState, init)

  const login = (name = '') => {
    const user = {
      id: 'ABC',
      name
    }
    const action = {
      type: types.login,
      payload: user
    }
    window.localStorage.setItem('user', JSON.stringify(user))
    dispatch(action)
  }

  const logout = () => {
    window.localStorage.removeItem('user')
    const action = {
      type: types.logout
    }
    dispatch(action)
  }

  return (
    <AuthContext.Provider value={{
      authState,
      login,
      logout
    }}
    >
      {children}
    </AuthContext.Provider>
  )
}
