export default function(error) {
  return {
    type: 'LOGOUT_FAILURE',
    error: error
  }
}
