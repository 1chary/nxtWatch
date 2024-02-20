import {Component} from 'react'

import {Route, Switch} from 'react-router-dom'
import DarkThemeContext from './context/DarkThemeContext'
import LoginComponent from './components/LoginComponent'
import HomeComponent from './components/HomeComponent'
import TrendingComponent from './components/TrendingComponent'
import GamingComponent from './components/GamingComponent'
import VideoItemDetails from './components/VideoItemDetails'
import './App.css'

// Replace your code here
class App extends Component {
  state = {isDark: false}

  onClickChangeMode = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  render() {
    const {isDark} = this.state
    return (
      <DarkThemeContext.Provider
        value={{isDark, onClickChangeMode: this.onClickChangeMode}}
      >
        <Switch>
          <Route exact path="/login" component={LoginComponent} />
          <Route exact path="/" component={HomeComponent} />
          <Route exact path="/trending" component={TrendingComponent} />
          <Route exact path="/gaming" component={GamingComponent} />
          <Route exact path="/videos/:id" component={VideoItemDetails} />
        </Switch>
      </DarkThemeContext.Provider>
    )
  }
}

export default App
