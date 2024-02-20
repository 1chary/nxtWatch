import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const VideosContainer = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;

  background-color: ${props => (props.bgColor ? 'black' : '#f1f1f1')};
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`

export const NxtWatchLogoForPopup = styled.img`
  height: 30px;
  width: 60px;
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
  height: 150px;
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
