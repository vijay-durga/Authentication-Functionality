import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookie from 'js-cookie'
import './index.css'

class Login extends Component {
  setCookie = jwtToken => {
    const {history} = this.props
    Cookie.set('jwt_token', jwtToken, {expires: 10})
    history.replace('/')
  }

  getRoutes = async event => {
    event.preventDefault()
    const userDetails = {username: 'rahul', password: 'rahul@2021'}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const requiredData = await fetch(url, options)
    const data = await requiredData.json()
    console.log(data)
    if (requiredData.ok === true) {
      this.setCookie(data.jwt_token)
    }
  }

  render() {
    const jwtToken = Cookie.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <form onSubmit={this.getRoutes} className="bg-cont">
        <h1>Please Login</h1>
        <div>
          <button type="submit" onSubmit={this.getRoutes}>
            Login with Sample creds
          </button>
        </div>
      </form>
    )
  }
}

export default Login
