import {Component} from 'react'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'
import DarkThemeContext from '../../context/DarkThemeContext'
import Header from '../Header'
import SideBar from '../SideBar'
import {
  TrendingContainer,
  TrendingHeading,
  TrendVideosContainer,
  FailureContainerImage,
  TroublePara,
  Oops,
  RetryButton,
  TrendVideoArrangeInColumn,
  TrendingVideoArrangeInRow,
  TrendingDataArrangeInColumn,
  TrendTitle,
  ProfileAndDetailsContainer,
  ImageOfTheIndividual,
  TrendImg,
  TrendCompanyName,
  ViewsAndUpdatedTime,
  ViewsPara,
  DatePara,
} from './styledComponents'

const apiConstants = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class TrendingComponent extends Component {
  state = {trendingArrayWithUpdatedCase: [], apiStatus: ''}

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiConstants.loading})
    const token = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const trendingData = await fetch(url, options)
    if (trendingData.ok === true) {
      const trendConvertData = await trendingData.json()
      console.log(trendConvertData)
      const updatedTrendCase = trendConvertData.videos.map(eachItem => ({
        id: eachItem.id,
        publishedAt: formatDistanceToNow(new Date(eachItem.published_at)),
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
        name: eachItem.channel.name,
        profileImageUrl: eachItem.channel.profile_image_url,
      }))
      this.setState({
        trendingArrayWithUpdatedCase: updatedTrendCase,
        apiStatus: apiConstants.success,
      })
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  renderLoading = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  retry = () => {
    this.getTrendingVideos()
  }

  renderFailure = () => (
    <DarkThemeContext.Consumer>
      {value => {
        const {isDark} = value
        const imageLink = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <>
            <FailureContainerImage src={imageLink} alt="failure view" />
            <Oops colorText={isDark}>Oops! Something Went Wrong</Oops>
            <TroublePara>
              We are having some trouble to complete your request.Please try
              again.
            </TroublePara>
            <RetryButton onClick={this.retry}>Retry</RetryButton>
          </>
        )
      }}
    </DarkThemeContext.Consumer>
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

  renderSuccess = () => {
    const {trendingArrayWithUpdatedCase} = this.state
    return (
      <DarkThemeContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <TrendVideoArrangeInColumn>
              {trendingArrayWithUpdatedCase.map(eachItem => (
                <TrendingVideoArrangeInRow>
                  <TrendImg src={eachItem.thumbnailUrl} />
                  <ProfileAndDetailsContainer>
                    <ImageOfTheIndividual src={eachItem.profileImageUrl} />
                    <TrendingDataArrangeInColumn>
                      <TrendTitle changeTrendTitleColor={isDark}>
                        {eachItem.title}
                      </TrendTitle>
                      <TrendCompanyName>{eachItem.name}</TrendCompanyName>
                      <ViewsAndUpdatedTime>
                        <ViewsPara countColor={isDark}>
                          {eachItem.viewCount}
                        </ViewsPara>
                        <DatePara dateColor={isDark}>
                          {eachItem.publishedAt}
                        </DatePara>
                      </ViewsAndUpdatedTime>
                    </TrendingDataArrangeInColumn>
                  </ProfileAndDetailsContainer>
                </TrendingVideoArrangeInRow>
              ))}
            </TrendVideoArrangeInColumn>
          )
        }}
      </DarkThemeContext.Consumer>
    )
  }

  render() {
    return (
      <>
        <Header />
        <DarkThemeContext.Consumer>
          {value => {
            const {isDark} = value
            return (
              <TrendingContainer data-testid="trending">
                <SideBar />
                <TrendVideosContainer trendBackgroundColor={isDark}>
                  <TrendingHeading trendingHeading={isDark}>
                    Trending
                  </TrendingHeading>
                  {this.renderAllProducts()}
                </TrendVideosContainer>
              </TrendingContainer>
            )
          }}
        </DarkThemeContext.Consumer>
      </>
    )
  }
}

export default TrendingComponent
