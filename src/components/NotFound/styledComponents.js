import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
export const NotFoundWithImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 90vh;
  background-color: ${props => (props.notFoundBg ? '#0f0f0f' : '#f9f9f9')};
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`
export const NotFoundImage = styled.img`
  height: 250px;
  width: 350px;
`
export const PageNotFound = styled.h1`
  color: ${props => (props.pageTextColor ? 'white' : 'black')};
`
export const NotFoundPara = styled.p`
  color: grey;
`
