import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import SideBar from '../SideBar'
import PlayerVideo from '../PlayerVideo'
import DarkThemeContext from '../../context/DarkThemeContext'

import {
  VideoFailureContainer,
  VideoFailureImage,
  VideoFailurePara,
  VideoFailureText,
  RetryVideoFailure,
} from './styledComponents'

import './index.css'

const apiConstants = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {videoItem: [], isLike: false, isDisLike: false}

  componentDidMount() {
    this.getDetailsOfVideo()
  }

  getDetailsOfVideo = async () => {
    this.setState({apiStatus: apiConstants.loading})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const responseData = await fetch(url, options)
    if (responseData.ok === true) {
      const data = await responseData.json()
      const updatedVideoCase = {
        id: data.video_details.id,
        publishedAt: formatDistanceToNow(
          new Date(data.video_details.published_at),
        ),
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        viewCount: data.video_details.view_count,
        name: data.video_details.channel.name,
        profileImageUrl: data.video_details.channel.profile_image_url,
        videoUrl: data.video_details.video_url,
        subscribeCount: data.video_details.channel.subscriber_count,
        description: data.video_details.description,
      }
      this.setState({
        videoItem: updatedVideoCase,
        apiStatus: apiConstants.success,
      })
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  clickedOnLike = () => {
    this.setState(prevState => ({isLike: !prevState.isLike, isDisLike: false}))
  }

  clickedOnDisLike = () => {
    this.setState(prevState => ({
      isDisLike: !prevState.isDisLike,
      isLike: false,
    }))
  }

  renderSuccess = () => {
    const {videoItem, isLike, isDisLike} = this.state

    return (
      <PlayerVideo
        detailedVideo={videoItem}
        like={isLike}
        disLike={isDisLike}
        clickedOnLike={this.clickedOnLike}
        clickedOnDisLike={this.clickedOnDisLike}
        clickOnSave={this.clickedOnSaved}
      />
    )
  }

  retryAgain = () => {
    this.getDetailsOfVideo()
  }

  renderFailure = () => (
    <DarkThemeContext.Consumer>
      {value => {
        const {isDark} = value

        const videoFailureImg = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <VideoFailureContainer
            videoFailureBg={isDark}
            data-testid="videoItemDetails"
          >
            <VideoFailureImage src={videoFailureImg} alt="failure view" />
            <VideoFailurePara videoFailurePara={isDark}>
              Oops! Something Went Wrong
            </VideoFailurePara>
            <VideoFailureText videoParaText={isDark}>
              We are having some trouble to complete your request. Please try
              again.
            </VideoFailureText>
            <RetryVideoFailure onClick={this.retryAgain}>
              Retry
            </RetryVideoFailure>
          </VideoFailureContainer>
        )
      }}
    </DarkThemeContext.Consumer>
  )

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
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
        return this.renderLoader()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <SideBar />
        {this.renderAllProducts()}
      </>
    )
  }
}

export default VideoItemDetails
