export default function(error) {
  return {
    type: 'LOGIN_FAILURE',
    error: error
  }
}
