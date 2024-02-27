import styled from 'styled-components'

export const VideoFailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  background-color: ${props => (props.videoFailureBg ? '#0f0f0f' : '#f9f9f9')};
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`
export const VideoArrangement = styled.div`
  margin-top: 20px;
`

export const VideoFailureImage = styled.img`
  height: 350px;
  width: 70%;
  @media screen and (min-width: 768px) {
    height: 400px;
    width: 50%;
  }
`
export const VideoFailurePara = styled.h1`
  color: ${props => (props.videoFailurePara ? 'white' : 'black')};
  font-size: 32px;
`
export const VideoFailureText = styled.p`
  font-size: 20px;
  color: ${props => (props.videoParaText ? 'white' : 'black')};
`
export const RetryVideoFailure = styled.button`
  height: 30px;
  width: 70px;
  background-color: #4f46e5;
  color: white;
  cursor: pointer;
  outline: none;
  border: none;
`
