import {Route} from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoute = props => {
  const jwt = Cookies.get('jwt_token')
  if (jwt) {
    return <Route {...props} />
  }
  return 'error!'
}

export default ProtectedRoute
