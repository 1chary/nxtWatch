import styled from 'styled-components'

export const VideoDetailsContainer = styled.div`
  width: 80%;
  min-height: 90vh;
  margin-left: 20%;
  background-color: ${props => (props.videoBgColor ? '#0f0f0f' : '#f9f9f9 ')};
  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 5px;
    margin-left: 0%;
  }
`
export const VideoPlayerContainer = styled.div`
  height: 60vh;
  width: 90%;
`

export const VideoDetailImg = styled.img`
  height: 250px;
  width: 250px;
`
export const CheckCount = styled.p`
  font=size: 24px;
  color: black;
`
export const TitleVideoItem = styled.h1`
  color: grey;
  font-size: 32px;
  @media screen and (max-width: 767px) {
    font-size: 18px;
  }
`
export const ViewsDateAndLikeDisLikeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`
export const VideoItemViewAndDate = styled.div`
  display: flex;
  align-items: center;
`
export const VideoView = styled.p`
  color: ${props => (props.videoViewColor ? 'white' : 'black')};
  font-size: 14px;
`

export const VideoDateView = styled.p`
  font-size: 14px;
  margin-left: 10px;
  color: ${props => (props.viewsColor ? 'white' : 'black')};
`
export const LikesAndDisLikesContainer = styled.div`
  display: flex;
  align-items: center;
`
export const ButtonForVideoItem = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: ${props => props.whenClickedOnLike};
  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`

export const HorizontalLine = styled.hr`
  border: 1px solid grey;
`
export const ProfileAndVideoDetails = styled.div`
  display: flex;
`
export const ProfileImageForVideo = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  margin-top: 20px;
`
export const VideoArrangeInColumn = styled.div`
  display: flex;
  flex-direction: column;
`
export const VideoName = styled.h1`
  font-size: 28px;
  color: ${props => (props.videoHeading ? 'white' : 'black')};
`
export const VideoSubscriber = styled.p`
  color: ${props => (props.videoCount ? 'white' : 'black')}
  font-size: 18px;
`
export const VideoParaDescription = styled.p`
  color: ${props => (props.videoPara ? 'white' : 'black')}
  font-size: 20px;
  `
