import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => (props.bgColor ? 'black' : 'white')};
  height: 10vh;
  width: 100%;
  padding: 20px;
  position: fixed;
`
export const Logo = styled.img`
  height: 30px;
  width: 50%;
  @media screen and (min-width: 768px) {
    width: 25%;
  }
`
export const ButtonForLogo = styled.button`
  background-color: transparent;
  width: 120px;
  height: 30px;
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
  cursor: pointer;
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
export const ButtonContainerForLogOut = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.popUpColor ? 'black' : 'white')};
  width: 30%;
  height: 150px;
  @media screen and (max-width: 767px) {
    width: 70%;
  }
`
export const AreYouSure = styled.p`
  color: grey;
`
export const ButtonContainer = styled.div`
  display: flex;
`
export const CancelButton = styled.div`
  border: 1px solid grey;
  color: grey;
  height: 30px;
  width: 120px;
  cursor: pointer;
  margin-right: 10px;
  font-size: 22px;
`
export const ConfirmButton = styled.button`
  background-color: #3b82f6;
  height: 30px;
  width: 120px;
  border: none;
  outline: none;
  cursor: pointer;
  color: white;
  font-size: 22px;
`
