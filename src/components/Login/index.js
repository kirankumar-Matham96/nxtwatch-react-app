import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPwd: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onToggleShowPassword = () => {
    this.setState(prevState => ({showPwd: !prevState.showPwd}))
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userData = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userData),
    }
    const response = await fetch(url, options)
    const token = await response.json()
    Cookies.set('jwt_token', token.jwt_token)
  }

  render() {
    const {username, password, showPwd} = this.state

    return (
      <div className="bg-container">
        <form className="form-container" onSubmit={this.onSubmitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="logo"
            className="login-logo"
          />
          <label className="label" htmlFor="username">
            USERNAME
          </label>
          <input
            type="text"
            id="username"
            className="input-field"
            placeholder="Username"
            value={username}
            onChange={this.onChangeUsername}
          />
          <label className="label" htmlFor="password">
            PASSWORD
          </label>
          <input
            type={showPwd ? 'text' : 'password'}
            id="password"
            className="input-field"
            placeholder="Password"
            value={password}
            onChange={this.onChangePassword}
          />
          <div className="show-password-container">
            <input
              type="checkbox"
              id="showPassword"
              className="checkbox"
              onClick={this.onToggleShowPassword}
            />
            <label className="label checkbox-label" htmlFor="showPassword">
              Show Password
            </label>
          </div>
          <button className="custom-button" type="submit">
            Login
          </button>
        </form>
      </div>
    )
  }
}

export default Login
