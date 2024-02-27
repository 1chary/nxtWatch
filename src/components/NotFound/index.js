import DarkThemeContext from '../../context/DarkThemeContext'
import Header from '../Header'
import SideBar from '../SideBar'
import {
  NotFoundContainer,
  NotFoundWithImageContainer,
  NotFoundImage,
  PageNotFound,
  NotFoundPara,
} from './styledComponents'

const NotFound = () => (
  <DarkThemeContext.Consumer>
    {value => {
      const {isDark} = value

      const notFoundImageUrl = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <>
          <Header />
          <NotFoundContainer>
            <SideBar />
            <NotFoundWithImageContainer notFoundBg={isDark}>
              <NotFoundImage src={notFoundImageUrl} alt="not found" />
              <PageNotFound pageTextColor={isDark}>Page Not Found</PageNotFound>
              <NotFoundPara>
                we are sorry, the page you requested could not be found.
              </NotFoundPara>
            </NotFoundWithImageContainer>
          </NotFoundContainer>
        </>
      )
    }}
  </DarkThemeContext.Consumer>
)

export default NotFound
