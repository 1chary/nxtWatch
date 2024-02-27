import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {
  LoginContainer,
  DetailsContainer,
  ImageContainer,
  InputContainer,
  ImageElement,
  LabelElement,
  InputElement,
  LoginButton,
  ShowPasswordContainer,
  CheckBox,
  ShowPassPara,
  ErrorMessage,
} from './styledComponents'

class LoginComponent extends Component {
  state = {username: '', password: '', showPassword: 'false', errorMessage: ''}

  changeUserName = event => {
    this.setState({username: event.target.value})
  }

  renderUsername = () => {
    const {username} = this.state
    return (
      <>
        <LabelElement htmlFor="username">USERNAME</LabelElement>
        <InputElement
          id="username"
          value={username}
          onChange={this.changeUserName}
          placeholder="Username"
          type="text"
        />
      </>
    )
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  renderPassword = () => {
    const {showPassword, password} = this.state
    return (
      <>
        <LabelElement htmlFor="password">PASSWORD</LabelElement>
        <InputElement
          id="password"
          value={password}
          onChange={this.changePassword}
          placeholder="Password"
          type="password"
        />
      </>
    )
  }

  showPassword = async () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({errorMessage: errorMsg})
  }

  submitDetails = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const responseData = await fetch(url, options)
    const data = await responseData.json()
    if (responseData.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    const {errorMessage} = this.state
    return (
      <LoginContainer>
        <DetailsContainer onSubmit={this.submitDetails}>
          <ImageContainer>
            <ImageElement
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="website logo"
            />
          </ImageContainer>
          <InputContainer>
            {this.renderUsername()}
            {this.renderPassword()}
            <ShowPasswordContainer>
              <CheckBox type="checkbox" onClick={this.showPassword} />
              <ShowPassPara>Show Password</ShowPassPara>
            </ShowPasswordContainer>
            <LoginButton type="submit">Login</LoginButton>
            <ErrorMessage>{errorMessage}</ErrorMessage>
          </InputContainer>
        </DetailsContainer>
      </LoginContainer>
    )
  }
}

export default LoginComponent
