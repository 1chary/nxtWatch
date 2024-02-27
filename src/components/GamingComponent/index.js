import {Component} from 'react'
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import DarkThemeContext from '../../context/DarkThemeContext'

import Header from '../Header'
import SideBar from '../SideBar'
import './index.css'
import {
  GameVideosContainer,
  GamingHeading,
  GameUnOrderedList,
  ListGameElement,
  GameImage,
  GameTitleHeading,
  PeopleGameViews,
  GameFailureContainer,
  GameFailureImage,
  GameOops,
  GameTroublePara,
  RetryGameButton,
  GamingWithIcon,
  GameIconHolder,
} from './styledComponents'

const apiConstants = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class GamingComponent extends Component {
  state = {apiStatus: '', gameVideos: []}

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiConstants.loading})
    const token = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const responseData = await fetch(url, options)
    if (responseData.ok === true) {
      const data = await responseData.json()
      const updatedCase = data.videos.map(eachItem => ({
        id: eachItem.id,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))
      this.setState({
        gameVideos: updatedCase,
        apiStatus: apiConstants.success,
      })
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  renderSuccess = () => {
    const {gameVideos} = this.state
    return (
      <DarkThemeContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <GameUnOrderedList>
              {gameVideos.map(eachItem => (
                <ListGameElement key={eachItem.id}>
                  <Link
                    to={`/videos/${eachItem.id}`}
                    className="adjustBackground"
                  >
                    <GameImage
                      src={eachItem.thumbnailUrl}
                      alt="video thumbnail"
                    />
                    <GameTitleHeading gameTitle={isDark}>
                      {eachItem.title}
                    </GameTitleHeading>
                    <PeopleGameViews viewsColor={isDark}>
                      {eachItem.viewCount} Watching Worldwide
                    </PeopleGameViews>
                  </Link>
                </ListGameElement>
              ))}
            </GameUnOrderedList>
          )
        }}
      </DarkThemeContext.Consumer>
    )
  }

  retry = () => {
    this.getVideos()
  }

  renderFailure = () => (
    <DarkThemeContext.Consumer>
      {value => {
        const {isDark} = value
        const GameFailure = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <GameFailureContainer>
            <GameFailureImage src={GameFailure} alt="failure view" />
            <GameOops oopsHeading={isDark}>Oops! Something Went Wrong</GameOops>
            <GameTroublePara>
              We are having some trouble to complete your request.Please try
              again.
            </GameTroublePara>
            <RetryGameButton onClick={this.retry}>Retry</RetryGameButton>
          </GameFailureContainer>
        )
      }}
    </DarkThemeContext.Consumer>
  )

  renderLoading = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderAllProducts = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstants.success:
        return this.renderSuccess()
      case apiConstants.failure:
        return this.renderFailure()
      case apiConstants.loading:
        return this.renderLoading()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <SideBar />
        <DarkThemeContext.Consumer>
          {value => {
            const {isDark} = value
            return (
              <GameVideosContainer gameBgColor={isDark} data-testid="gaming">
                <GamingWithIcon>
                  <GameIconHolder>
                    <SiYoutubegaming size={35} color="#ff0000" />
                  </GameIconHolder>
                  <GamingHeading gameText={isDark}>Gaming</GamingHeading>
                </GamingWithIcon>

                {this.renderAllProducts()}
              </GameVideosContainer>
            )
          }}
        </DarkThemeContext.Consumer>
      </>
    )
  }
}

export default GamingComponent
