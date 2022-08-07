import './index.css'

const Login = () => (
  <div className="bg-container">
    <form className="form-container">
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
      />
      <label className="label" htmlFor="password">
        PASSWORD
      </label>
      <input
        type="password"
        id="username"
        className="input-field"
        placeholder="Password"
      />
      <div className="show-password-container">
        <input type="checkbox" id="showPassword" className="checkbox" />
        <label className="label checkbox-label" htmlFor="showPassword">
          Show Password
        </label>
      </div>
      <button className="custom-button" type="button">
        Login
      </button>
    </form>
  </div>
)

export default Login
