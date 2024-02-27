import styled from 'styled-components'

export const SavedVideosContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const SavedContainer = styled.div`
  min-height: 90vh;
  width: 80%;
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.saved ? '#0f0f0f ' : '#f9f9f9 ')};
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
export const NoVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const NoVideosImage = styled.img`
  width: 50%;
  @media screen and (max-width: 767px) {
    height: 250px;
    width: 70%;
  }
`
export const NoVideosHeading = styled.h1`
  font-size: 32px;
  color: ${props => props.color};
`
export const NoVideosPara = styled.p`
  font-size: 26px;
  color: ${props => props.paraColor};
`

export const ProfileImageForSavedVideos = styled.img`
  height: 30px;
  width: 30px;
`
