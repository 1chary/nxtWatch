import {FaMoon, FaBars, FaSignInAlt} from 'react-icons/fa'
import Cookies from 'js-cookie'
import {Link, withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {BsBrightnessHigh} from 'react-icons/bs'
import DarkThemeContext from '../../context/DarkThemeContext'

import './index.css'
import {
  HeaderContainer,
  Logo,
  ButtonForDarkAndWhite,
  OptionsContainer,
  ProfileImage,
  LogOutButton,
  PopupContainer,
  HmmBurgerIcon,
  UnOrderedSideBar,
  ListSideElement,
  LogButtonForSmallDevices,
  ButtonContainerForLogOut,
  AreYouSure,
  ButtonContainer,
  CancelButton,
  ConfirmButton,
} from './styledComponents'

const Header = props => (
  <DarkThemeContext.Consumer>
    {value => {
      const {isDark, onClickChangeMode} = value

      const changeMode = () => {
        onClickChangeMode()
      }

      const logOut = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const imageUrl = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      return (
        <HeaderContainer bgColor={isDark}>
          <Link to="/" className="logo">
            <Logo src={imageUrl} alt="website logo" />
          </Link>

          <OptionsContainer>
            <ButtonForDarkAndWhite
              data-testid="theme"
              onClick={changeMode}
              getColor={isDark}
            >
              {isDark ? (
                <BsBrightnessHigh className="darkIcon" />
              ) : (
                <FaMoon className="darkIcon" />
              )}
            </ButtonForDarkAndWhite>
            <ProfileImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <Popup
              modal
              trigger={
                <LogOutButton buttonStyle={isDark} type="button">
                  Logout
                </LogOutButton>
              }
              className="popup-content"
            >
              {close => (
                <ButtonContainerForLogOut popUpColor={isDark}>
                  <AreYouSure>Are you sure you want to logout?</AreYouSure>
                  <ButtonContainer>
                    <CancelButton
                      type="button"
                      className="trigger-button"
                      data-testid="closeButton"
                      onClick={() => close()}
                    >
                      Cancel
                    </CancelButton>
                    <ConfirmButton onClick={logOut} type="button">
                      Confirm
                    </ConfirmButton>
                  </ButtonContainer>
                </ButtonContainerForLogOut>
              )}
            </Popup>

            <PopupContainer popBgColor={isDark}>
              <Popup
                trigger={
                  <HmmBurgerIcon hamBurger={isDark}>
                    <FaBars className="hamBurgerMenu" aria-label="20" />
                  </HmmBurgerIcon>
                }
                className="popup-content"
              >
                <UnOrderedSideBar>
                  <Link to="/" className="anchorLink">
                    <ListSideElement sideTextColor={isDark}>
                      Home
                    </ListSideElement>
                  </Link>
                  <Link to="/trending" className="anchorLink">
                    <ListSideElement sideTextColor={isDark}>
                      Trending
                    </ListSideElement>
                  </Link>
                  <Link to="/gaming" className="anchorLink">
                    <ListSideElement sideTextColor={isDark}>
                      Gaming
                    </ListSideElement>
                  </Link>
                  <Link to="/saved-videos" className="anchorLink">
                    <ListSideElement sideTextColor={isDark}>
                      Saved videos
                    </ListSideElement>
                  </Link>
                </UnOrderedSideBar>
              </Popup>
            </PopupContainer>
            <Popup
              modal
              trigger={
                <LogButtonForSmallDevices bgColorForLogOut={isDark}>
                  <FaSignInAlt className="logButton" />
                </LogButtonForSmallDevices>
              }
              className="popup-content"
            >
              {close => (
                <ButtonContainerForLogOut popUpColor={isDark}>
                  <AreYouSure>Are you sure, you want to logout?</AreYouSure>
                  <ButtonContainer>
                    <CancelButton
                      type="button"
                      className="trigger-button"
                      data-testid="closeButton"
                      onClick={() => close()}
                    >
                      Cancel
                    </CancelButton>
                    <ConfirmButton onClick={logOut} type="button">
                      Confirm
                    </ConfirmButton>
                  </ButtonContainer>
                </ButtonContainerForLogOut>
              )}
            </Popup>
          </OptionsContainer>
        </HeaderContainer>
      )
    }}
  </DarkThemeContext.Consumer>
)
export default withRouter(Header)
