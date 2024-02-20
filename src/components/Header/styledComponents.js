import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => (props.bgColor ? 'black' : 'white')};
  height: 10vh;
  width: 100%;
  padding: 20px;
`
export const Logo = styled.img`
  height: 30px;
  width: 30%;
  @media screen and (min-width: 768px) {
    width: 15%;
  }
`
export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ButtonForDarkAndWhite = styled.button`
  color: ${props => (props.getColor ? 'white' : 'black')};
  outline: none;
  border: none;
  cursor: pointer;
  background-color: ${props => (props.getColor ? 'black' : 'white')};
`

export const ProfileImage = styled.img`
  height: 30px;
  width: 30px;
  margin-left: 15px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const LogOutButton = styled.button`
  height: 30px;
  width: 80px;
  outline: 1px solid ${props => (props.buttonStyle ? 'white' : '#3b82f6')};
  color: ${props => (props.buttonStyle ? 'white' : '#3b82f6')};
  background-color: transparent;
  margin-left: 15px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.popBgColor ? 'black' : 'white')};
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const HmmBurgerIcon = styled.button`
  color: ${props => (props.hamBurger ? 'white' : 'black')};
  border: none;
  outline: none;
  cursor: pointer;
  background-color: ${props => (props.hamBurger ? 'black' : 'white')};
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
export const LogButtonForSmallDevices = styled.button`
  color: ${props => (props.bgColorForLogOut ? 'white' : 'black')};
  border: none;
  outline: none;
  cursor: pointer;
  background-color: ${props => (props.bgColorForLogOut ? 'black' : 'white')};
`
