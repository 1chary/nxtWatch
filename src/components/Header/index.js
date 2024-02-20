import {FaMoon, FaBars, FaSignInAlt} from 'react-icons/fa'
import {Link} from 'react-router-dom'
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
} from './styledComponents'

const Header = () => (
  <DarkThemeContext.Consumer>
    {value => {
      const {isDark, onClickChangeMode} = value

      const changeMode = () => {
        onClickChangeMode()
      }

      const imageUrl = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      return (
        <HeaderContainer bgColor={isDark}>
          <Logo src={imageUrl} alt="website logo" />
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

            <PopupContainer popBgColor={isDark}>
              <Popup
                trigger={
                  <HmmBurgerIcon hamBurger={isDark}>
                    <FaBars className="hamBurgerMenu" aria-label="20" />
                  </HmmBurgerIcon>
                }
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
            <LogButtonForSmallDevices bgColorForLogOut={isDark}>
              <FaSignInAlt className="logButton" />
            </LogButtonForSmallDevices>
            <LogOutButton buttonStyle={isDark}>Logout</LogOutButton>
          </OptionsContainer>
        </HeaderContainer>
      )
    }}
  </DarkThemeContext.Consumer>
)
export default Header
