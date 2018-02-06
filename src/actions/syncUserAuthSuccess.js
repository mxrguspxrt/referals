export default function(user) {
  return {
    type: 'SYNC_USER_AUTH_SUCCESS',
    user
  }
}
