import styled from 'styled-components'

export const GameContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const GameVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  min-height: 90vh;
  background-color: ${props => (props.gameBgColor ? 'black' : '#f1f1f1')};
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
export const GamingHeading = styled.h1`
  color: ${props => (props.gameText ? 'white' : 'black')};
  padding-left: 10px;
`
export const GameUnOrderedList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`
export const ListGameElement = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-bottom: 50px;
  @media screen and (max-width: 767px) {
    width: 45%;
    margin-right: 15px;
  }
`
export const GameImage = styled.img`
  height: 350px;
  width: 300px;
  border-radius: 30px;
  @media screen and (max-width: 767px) {
    height: 150px;
    width: 150px;
    border-radius: 10px;
  }
`
export const GameTitleHeading = styled.p`
  color: ${props => (props.gameTitle ? 'white' : 'black')};
  font-size: 24px;
`
export const PeopleGameViews = styled.p`
  color: ${props => (props.viewsColor ? 'white' : 'black')};
  font-size: 18px;
`
export const GameFailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const GameFailureImage = styled.img`
  height: 350px;
  width: 350px;
  @media screen and (max-width: 767px) {
    height: 250px;
    width: 250px;
  }
`
export const GameOops = styled.h1`
  font-size: 32px;
  color: ${props => (props.oopsHeading ? 'white' : 'black')};
`
export const GameTroublePara = styled.p`
  color: gray;
  font-size: 24px;
`
export const RetryGameButton = styled.button`
  height: 30px;
  width: 70px;
  color: white;
  background-color: #4f46e5;
  border: none;
  outline: none;
  cursor: pointer;
`
