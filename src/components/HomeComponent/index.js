import {Component} from 'react'
import {BsSearch} from 'react-icons/bs'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'
import DarkThemeContext from '../../context/DarkThemeContext'
import Header from '../Header'
import SideBar from '../SideBar'

import {
  HomeContainer,
  VideosContainer,
  SearchContainer,
  HomeElementButton,
  SearchInputElement,
  SearchIconContainer,
  SearchButton,
  UnorderedList,
  ListElement,
  ImageOfDisplay,
  DetailsOfTheVideo,
  ProfileImageContainer,
  NameAndLeagueContainer,
  TitleParagraph,
  ChannelName,
  ViewsAndUpdatedTime,
  ViewsPara,
  DatePara,
  FailureContainerImage,
  Oops,
  TroublePara,
  RetryButton,
} from './styledComponents'
import './index.css'

const apiConstants = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class HomeComponent extends Component {
  state = {arrayWithUpdatedCase: [], apiStatus: ''}

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiConstants.loading})
    const token = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/all?search='
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
        publishedAt: formatDistanceToNow(new Date(eachItem.published_at)),
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
        name: eachItem.channel.name,
        profileImageUrl: eachItem.channel.profile_image_url,
      }))
      this.setState({
        arrayWithUpdatedCase: updatedCase,
        apiStatus: apiConstants.success,
      })
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  renderSuccess = () => {
    const {arrayWithUpdatedCase} = this.state
    return (
      <DarkThemeContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <UnorderedList>
              {arrayWithUpdatedCase.map(eachItem => (
                <ListElement key={eachItem.id}>
                  <HomeElementButton>
                    <ImageOfDisplay
                      src={eachItem.thumbnailUrl}
                      alt="video thumbnail"
                    />
                  </HomeElementButton>
                  <DetailsOfTheVideo>
                    <ProfileImageContainer
                      src={eachItem.profileImageUrl}
                      alt="channel logo"
                    />
                    <NameAndLeagueContainer>
                      <TitleParagraph paraColor={isDark}>
                        {eachItem.title}
                      </TitleParagraph>
                      <ChannelName>{eachItem.name}</ChannelName>
                      <ViewsAndUpdatedTime>
                        <ViewsPara countColor={isDark}>
                          {eachItem.viewCount}
                        </ViewsPara>
                        <DatePara dateColor={isDark}>
                          {eachItem.publishedAt}
                        </DatePara>
                      </ViewsAndUpdatedTime>
                    </NameAndLeagueContainer>
                  </DetailsOfTheVideo>
                </ListElement>
              ))}
            </UnorderedList>
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
        <DarkThemeContext.Consumer>
          {value => {
            const {isDark} = value
            return (
              <HomeContainer>
                <SideBar />
                <VideosContainer bgColor={isDark} data-testid="home">
                  <SearchContainer color={isDark}>
                    <SearchInputElement type="search" bgColor={isDark} />
                    <SearchIconContainer>
                      <SearchButton data-testid="searchButton">
                        <BsSearch />
                      </SearchButton>
                    </SearchIconContainer>
                  </SearchContainer>
                  {this.renderAllProducts()}
                </VideosContainer>
              </HomeContainer>
            )
          }}
        </DarkThemeContext.Consumer>
      </>
    )
  }
}

export default HomeComponent
