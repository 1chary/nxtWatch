import styled from 'styled-components'

export const VideosContainer = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin-left: 20%;
  background-color: ${props => (props.bgColor ? '#181818' : '#f9f9f9 ')};
  @media screen and (max-width: 767px) {
    width: 100%;
    margin-left: 0px;
  }
`

export const NxtWatchLogoForPopup = styled.img`
  height: 30px;
  width: 60px;
`
export const BannerContainer = styled.div`
  height: 300px;
  width: 100%;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  display: flex;
  justify-content: space-between;
  background-size: cover;
`
export const BannerLeft = styled.div`
  display: flex;
  flex-direction: column;
`
export const HomeNxtWatch = styled.img`
  height: 50px;
  width: 250px;
`
export const BuyNxtWatch = styled.p`
  font-size: 30px;
  color: grey;
`
export const GetItNow = styled.button`
  height: 30px;
  width: 200px;
  border: 1px solid #616e7c;
  color: #616e7c;
  background-color: transparent;
  cursor: pointer;
`
export const BannerRight = styled.div`
  display: flex;
`
export const CloseButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
  outline: none;
`

export const SearchContainer = styled.div`
  height: 30px;
  width: 50%;
  display: flex;
  justify-content: center;
  background-color: ${props => (props.color ? 'black' : 'white')};
  @media screen and (max-width: 767px) {
    width: 90%;
  }
`
export const SearchInputElement = styled.input`
  height: 30px;
  width: 100%;
  background-color: ${props => (props.bgColor ? 'black' : 'white')};
  @media screen and (max-width: 767px) {
    width: 90%;
  }
`
export const SearchIconContainer = styled.div`
  height: 30px;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #7e858e;
`
export const SearchButton = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`

export const UnorderedList = styled.ul`
  display: flex;
  width: 90%;
  flex-wrap: wrap;
`

export const ListElement = styled.li`
  width: 30%;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  margin-bottom: 50px;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`
export const HomeElementButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`

export const ImageOfDisplay = styled.img`
  height: 200px;
  width: 100%;
  @media screen and (max-width: 767px) {
    height: 200px;
    width: 100%;
  }
`
export const DetailsOfTheVideo = styled.div`
  display: flex;
  align-items: flex-start;
`
export const ProfileImageContainer = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 10px;
  margin-top: 15px;
`

export const NameAndLeagueContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const TitleParagraph = styled.p`
  font-size: 14px;
  margin-left: 5px;
  color: ${props => (props.paraColor ? 'white' : 'black')};
`
export const ChannelName = styled.p`
  color: #7e858e;
  font-size: 14px;
`
export const ViewsAndUpdatedTime = styled.div`
  display: flex;
  align-items: center;
`
export const ViewsPara = styled.p`
  color: ${props => (props.countColor ? 'white' : 'black')};
  font-size: 14px;
`
export const DatePara = styled.p`
  color: ${props => (props.dateColor ? 'white' : 'black')};
  font-size: 14px;
  margin-left: 10px;
`
export const FailureContainerImage = styled.img`
  height: 50vh;
  width: 50%;
  @media screen and (max-width: 767px) {
    margin-top: 20px;
  }
`
export const Oops = styled.h1`
  color: ${props => (props.colorText ? 'white' : 'black')}
  font-size: 32px;
   @media screen and (max-width: 767px) {
    font-size: 26px

  }

`
export const TroublePara = styled.p`
  color: '#94a3b8';
  font-size: 28px;
`
export const RetryButton = styled.button`
  height: 30px;
  width: 70px;
  color: white;
  background-color: '#4f46e5';
  border: none;
  outline: none;
  cursor: pointer;
`

export const SubTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const TitleHolder = styled.div`
  display: flex;
`

export const RandomSearch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const RandomSearchImage = styled.img`
  height: 150px;
  width: 50%;
  @media screen and (max-width: 767px) {
    width: 80%;
  }
`
export const RandomSearchHeading = styled.h1`
  font-size: 30px;
`

export const RandomSearchPara = styled.p`
  font-size: 24px;
`
