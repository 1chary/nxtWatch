import {Component} from 'react'
import {BsSearch} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'
import {IoIosClose} from 'react-icons/io'
import DarkThemeContext from '../../context/DarkThemeContext'

import Header from '../Header'
import SideBar from '../SideBar'

import {
  VideosContainer,
  BannerContainer,
  BannerLeft,
  HomeNxtWatch,
  BuyNxtWatch,
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
  GetItNow,
  BannerRight,
  CloseButton,
} from './styledComponents'
import './index.css'

const apiConstants = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class HomeComponent extends Component {
  state = {arrayWithUpdatedCase: [], apiStatus: '', bannerDisplay: 'flex'}

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiConstants.loading})
    this.setState({bannerDisplay: 'flex'})
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
                  <Link
                    to={`/videos/${eachItem.id}`}
                    className="adjustBackground"
                  >
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
                  </Link>
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

  remove = () => {
    this.setState({bannerDisplay: 'none'})
  }

  render() {
    return (
      <>
        <Header />
        <SideBar />
        <DarkThemeContext.Consumer>
          {value => {
            const {isDark} = value
            const {bannerDisplay} = this.state
            const display = bannerDisplay === 'flex' ? 'flex' : 'none'
            return (
              <VideosContainer bgColor={isDark} data-testid="home">
                <BannerContainer data-testid="banner" display={display}>
                  <BannerLeft>
                    <HomeNxtWatch
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                      alt="nxt watch logo"
                    />
                    <BuyNxtWatch>
                      Buy Nxt Watch Premium prepaid plans with UPI
                    </BuyNxtWatch>
                    <GetItNow>GET IT NOW</GetItNow>
                  </BannerLeft>
                  <BannerRight>
                    <CloseButton
                      data-testid="close"
                      onClick={this.remove}
                      type="button"
                    >
                      <IoIosClose size={25} />
                    </CloseButton>
                  </BannerRight>
                </BannerContainer>
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
            )
          }}
        </DarkThemeContext.Consumer>
      </>
    )
  }
}

export default HomeComponent
