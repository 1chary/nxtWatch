import {Component} from 'react'
import Header from '../Header'
import SideBar from '../SideBar'
import DarkThemeContext from '../../context/DarkThemeContext'
import {
  SavedVideosContainer,
  SavedContainer,
  NoVideosContainer,
  NoVideosImage,
  NoVideosHeading,
  NoVideosPara,
  ProfileImageForSavedVideos,
} from './styledComponents'

class SavedVideos extends Component {
  renderNoSavedVideos = () => (
    <DarkThemeContext.Consumer>
      {value => {
        const {isDark} = value
        const headingColor = isDark ? 'white' : 'black'
        return (
          <NoVideosContainer>
            <NoVideosImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <NoVideosHeading color={headingColor}>
              No Saved Videos found
            </NoVideosHeading>
            <NoVideosPara paraColor={headingColor}>
              You can save your videos while watching them
            </NoVideosPara>
          </NoVideosContainer>
        )
      }}
    </DarkThemeContext.Consumer>
  )

  renderSavedVideos = () => (
    <DarkThemeContext.Consumer>
      {value => {
        const {isDark, savedVideos} = value
        console.log(savedVideos)
      }}
    </DarkThemeContext.Consumer>
  )

  render() {
    return (
      <>
        <Header />

        <DarkThemeContext.Consumer>
          {value => {
            const {isDark, savedVideos} = value

            return (
              <SavedVideosContainer>
                <SideBar />
                <SavedContainer data-testid="savedVideos" saved={isDark}>
                  {savedVideos > 0
                    ? this.renderSavedVideos()
                    : this.renderNoSavedVideos()}
                </SavedContainer>
              </SavedVideosContainer>
            )
          }}
        </DarkThemeContext.Consumer>
      </>
    )
  }
}

export default SavedVideos
