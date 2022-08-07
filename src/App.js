import {Switch, Route} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Home from './components/Home'
import './App.css'

const App = () => (
  <Switch>
    <Route path="/login" exact component={Login} />
    <ProtectedRoute path="/" exact component={Home} />
  </Switch>
)

export default App
