const initialState = {
  loading: false,
  users: []
}

function users(state = initialState, action = {}) {
  switch (action.type) {
    case 'SYNC_USERS_SUCCESS':
      return {
        ...state,
        users: action.users
      }
    default:
      return state
  }
}

export default users
