import styled from 'styled-components'

export const LoginContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const DetailsContainer = styled.form`
  min-height: 50vh;
  box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.08);
  width: 40%;
  @media screen and (max-width: 767px) {
    width: 90%;
  }
`
export const ImageContainer = styled.div`
  height: 10vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ImageElement = styled.img`
  height: 50px;
  width: 40%;
`
export const InputContainer = styled.div`
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  padding: 20px;
`

export const LabelElement = styled.label`
  color: #475569;
  font-size: 20px;
  text-decoration: none;
  font-family: 'Roboto';
  margin-top: 10px;
`
export const InputElement = styled.input`
  color: #475569;
  border: 1px solid #475569;
  border-radius: 5px;
  height: 35px;
  margin-top: 5px;
`
export const LoginButton = styled.button`
  height: 40px;
  background-color: #3b82f6;
  color: #ffffff;
  border: none;
  outline: none;
  margin-top: 5px;
  cursor: pointer;
  border-radius: 5px;
`

export const ShowPasswordContainer = styled.div`
  display: flex;
  align-items: center;
`
export const CheckBox = styled.input`
  height: 15px;
  width: 15px;
`
export const ShowPassPara = styled.label`
  color: black;
  font-size: 18px;
`
export const ErrorMessage = styled.p`
  color: #ff0b37;
  font-size: 16px;
`
