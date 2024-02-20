import styled from 'styled-components'

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  justify-content: space-between;
  height: 90vh;
  background-color: ${props =>
    props.sideBarBackgroundColor ? 'black' : 'white'};
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const UnOrderedSideBar = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const ListSideElement = styled.li`
  display: flex;
  align-items: center;
  font-size: 18px;
  margin-bottom: 20px;
  cursor: pointer;
  color: ${props => (props.sideTextColor ? 'white' : 'black')};
`
export const ContactUsDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`

export const ContactUsHeading = styled.p`
  color: ${props => (props.contactColor ? 'white' : 'black')};
  font-size: 28px;
`
export const IconImagesContainer = styled.div`
  display: flex;
  width: 100%;
`
export const IconImage = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 20px;
`
export const EnjoyPara = styled.p`
  font-size: 22px;
  color: ${props => (props.enjoyPara ? 'white' : 'black')};
  font-weight: bold;
`
