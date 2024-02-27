import {Component} from 'react'

import {Route, Switch} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import DarkThemeContext from './context/DarkThemeContext'
import LoginComponent from './components/LoginComponent'
import HomeComponent from './components/HomeComponent'
import TrendingComponent from './components/TrendingComponent'
import GamingComponent from './components/GamingComponent'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'
import './App.css'

// Replace your code here
class App extends Component {
  state = {isDark: false, savedVideos: [], activeTab: 'Home'}

  onClickChangeMode = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  changeTab = tab => {
    this.setState({activeTab: tab})
  }

  addVideo = item => {
    const {savedVideos} = this.state
    const index = savedVideos.findIndex(eachItem => eachItem.id === item.id)
    if (index !== -1) {
      this.setState({
        savedVideos: [...savedVideos, item],
      })
    } else {
      savedVideos.splice(index, 1)
      this.setState({savedVideos})
    }
  }

  removeVideo = id => {
    const {savedVideos} = this.state
    const updatedList = savedVideos.filter(eachId => eachId.id !== id)
    this.setState({savedVideos: updatedList})
  }

  render() {
    const {isDark, savedVideos, activeTab} = this.state
    return (
      <DarkThemeContext.Provider
        value={{
          isDark,
          savedVideos,
          activeTab,
          onClickChangeMode: this.onClickChangeMode,
          addVideo: this.addVideo,
          changeTab: this.changeTab,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginComponent} />
          <ProtectedRoute exact path="/" component={HomeComponent} />
          <ProtectedRoute
            exact
            path="/trending"
            component={TrendingComponent}
          />
          <ProtectedRoute exact path="/gaming" component={GamingComponent} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route component={NotFound} />
        </Switch>
      </DarkThemeContext.Provider>
    )
  }
}

export default App
