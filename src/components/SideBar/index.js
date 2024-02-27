import {Component} from 'react'
import {MdHome} from 'react-icons/md'
import {Link} from 'react-router-dom'
import {FaFire, FaRegPlusSquare} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'

import {
  SideBarContainer,
  UnOrderedSideBar,
  ListSideElement,
  ContactUsDetails,
  ContactUsHeading,
  IconImagesContainer,
  IconImage,
  EnjoyPara,
} from './styledComponents'

import DarkThemeContext from '../../context/DarkThemeContext'
import './index.css'

class SideBar extends Component {
  render() {
    return (
      <DarkThemeContext.Consumer>
        {value => {
          const {isDark, activeTab, changeTab} = value
          const bgColorOfTab = isDark ? '#475569' : '#cbd5e1'

          const currentHomeTab = () => {
            changeTab('Home')
          }

          const currentTrendingTab = () => {
            changeTab('Trending')
          }

          const currentGamingTab = () => {
            changeTab('Gaming')
          }

          const currentSavedTab = () => {
            changeTab('Saved Videos')
          }

          return (
            <SideBarContainer sideBarBackgroundColor={isDark}>
              <UnOrderedSideBar>
                <Link to="/" className="anchorLink">
                  <ListSideElement
                    sideTextColor={isDark}
                    key="home"
                    activeTabBg={activeTab === 'Home' ? bgColorOfTab : 'none'}
                    onClick={currentHomeTab}
                  >
                    <MdHome
                      className="homeIcon"
                      color={activeTab === 'Home' ? '#ff0b37' : '#7e858e'}
                    />
                    Home
                  </ListSideElement>
                </Link>
                <Link to="/trending" className="anchorLink">
                  <ListSideElement
                    sideTextColor={isDark}
                    key="trending"
                    activeTabBg={
                      activeTab === 'Trending' ? bgColorOfTab : 'none'
                    }
                    onClick={currentTrendingTab}
                  >
                    <FaFire
                      className="homeIcon"
                      color={activeTab === 'Trending' ? '#ff0b37' : '#7e858e'}
                    />
                    Trending
                  </ListSideElement>
                </Link>
                <Link
                  to="/gaming"
                  className="anchorLink"
                  activeTabBg={activeTab === 'Gaming' ? bgColorOfTab : 'none'}
                  onClick={currentGamingTab}
                >
                  <ListSideElement sideTextColor={isDark} key="gaming">
                    <SiYoutubegaming
                      className="homeIcon"
                      color={activeTab === 'Gaming' ? '#ff0b37' : '#7e858e'}
                    />
                    Gaming
                  </ListSideElement>
                </Link>
                <Link
                  to="/saved-videos"
                  className="anchorLink"
                  activeTabBg={
                    activeTab === 'Saved Videos' ? bgColorOfTab : 'none'
                  }
                  onClick={currentSavedTab}
                >
                  <ListSideElement sideTextColor={isDark} key="saved">
                    <FaRegPlusSquare
                      className="homeIcon"
                      color={
                        activeTab === 'Saved Videos' ? '#ff0b37' : '#7e858e'
                      }
                    />
                    Saved videos
                  </ListSideElement>
                </Link>
              </UnOrderedSideBar>
              <ContactUsDetails>
                <ContactUsHeading contactColor={isDark}>
                  CONTACT US
                </ContactUsHeading>
                <IconImagesContainer>
                  <IconImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <IconImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <IconImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </IconImagesContainer>
                <EnjoyPara enjoyPara={isDark}>
                  Enjoy! Now to see your channels and recommendations!
                </EnjoyPara>
              </ContactUsDetails>
            </SideBarContainer>
          )
        }}
      </DarkThemeContext.Consumer>
    )
  }
}

export default SideBar
