import { createContext, useReducer } from 'react'
import { userInitialState, userReducer } from '../reducer/user'

export const userContext = createContext()

function userReducir () {
  const [state, dispatch] = useReducer(userReducer, userInitialState)

  const getDocument = (document) => {
    dispatch({
      type: 'GET_DOCUMENT',
      payload: document
    })
  }
  const getDocumentId = (documentId) => {
    dispatch({
      type: 'GET_DOCUMENTID',
      payload: documentId
    })
  }
  const getUser = (user) => {
    dispatch({
      type: 'GET_USER',
      payload: user
    })
  }
  const getUserId = (userId) => {
    dispatch({
      type: 'GET_USERID',
      payload: userId
    })
  }
  const clearDocument = () => {
    dispatch({
      type: 'CLEAR_DOCUMENT'
    })
  }
  return { state, getDocument, clearDocument, getUser, getUserId, getDocumentId }
}

export function UserProvider ({ children }) {
  const { state, clearDocument, getDocument, getUser, getUserId, getDocumentId } = userReducir()
  return (
    <userContext.Provider value={{
      clearDocument,
      getDocument,
      getUser,
      getUserId,
      getDocumentId,
      state
    }}
    >
      {children}
    </userContext.Provider>
  )
}
