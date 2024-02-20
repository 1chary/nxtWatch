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
          const {isDark} = value
          return (
            <SideBarContainer sideBarBackgroundColor={isDark}>
              <UnOrderedSideBar>
                <Link to="/" className="anchorLink">
                  <ListSideElement sideTextColor={isDark}>
                    <MdHome className="homeIcon" />
                    Home
                  </ListSideElement>
                </Link>
                <Link to="/trending" className="anchorLink">
                  <ListSideElement sideTextColor={isDark}>
                    <FaFire className="homeIcon" />
                    Trending
                  </ListSideElement>
                </Link>
                <Link to="/gaming" className="anchorLink">
                  <ListSideElement sideTextColor={isDark}>
                    <SiYoutubegaming className="homeIcon" />
                    Gaming
                  </ListSideElement>
                </Link>
                <Link to="/saved-videos" className="anchorLink">
                  <ListSideElement sideTextColor={isDark}>
                    <FaRegPlusSquare className="homeIcon" />
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
