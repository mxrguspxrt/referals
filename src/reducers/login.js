const initialState = {
  loading: false,
  loggedIn: false,
  user: null
}

function login(state = initialState, action = {}) {
  switch (action.type) {
    case 'LOGOUT_REQUEST':
    case 'LOGIN_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        loading: false,
        loggedIn: true
      }
    case 'LOGIN_FAILURE':
      return {
        ...state,
        loading: false
      }
    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        loading: false,
        loggedIn: false
      }
    case 'LOGOUT_FAILURE':
      return {
        ...state,
        loading: false
      }
    case 'SYNC_USER_AUTH':
      return {
        ...state,
        loggedIn: action.user != null,
        user: action.user
      }
    default:
      return state
  }
}

export default login
