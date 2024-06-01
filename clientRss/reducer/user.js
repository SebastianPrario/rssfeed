export const userInitialState = JSON.parse(window.localStorage.getItem('user')) || []
//
export const USER_ACTION_TYPES = {
  GET_DOCUMENT: 'GET_DOCUMENT',
  CLEAR_DOCUMENT: 'CLEAR_DOCUMENT',
  GET_USER: 'GET_USER',
  GET_USERID: 'GET_USERID',
  GET_DOCUMENTID: 'GET_DOCUMENTID'
}

// update localStorage with state
export const updateLocalStorage = state => {
  window.localStorage.setItem('user', JSON.stringify(state))
}

const UPDATE_STATE_BY_ACTION = {
  [USER_ACTION_TYPES.GET_DOCUMENT]: (state, action) => {
    const newState = {
      ...state,
      document: action.payload
    }
    return newState
  },
  [USER_ACTION_TYPES.GET_USER]: (state, action) => {
    const newState = {
      ...state,
      ...action.payload
    }
    updateLocalStorage(newState)
    return newState
  },
  [USER_ACTION_TYPES.GET_DOCUMENTID]: (state, action) => {
    const newState = {
      ...state,
      documentId: action.payload
    }
    return newState
  },
  [USER_ACTION_TYPES.GET_USERID]: (state, action) => {
    const newState = {
      ...state,
      userId: action.payload
    }
    return newState
  },
  [USER_ACTION_TYPES.CLEAR_DOCUMENT]: () => {
    updateLocalStorage([])
    return userInitialState
  }
}

export const userReducer = (state, action) => {
  const { type: actionType } = action
  const updateState = UPDATE_STATE_BY_ACTION[actionType]
  return updateState ? updateState(state, action) : state
}
