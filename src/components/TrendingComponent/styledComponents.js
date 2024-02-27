import styled from 'styled-components'

export const TrendVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  min-height: 90vh;
  padding-left: 10px;
  margin-left: 20%;
  background-color: ${props =>
    props.trendBackgroundColor ? '#0f0f0f ' : '#f9f9f9 '};
  @media screen and (max-width: 767px) {
    width: 100%;
    margin-left: 0px;
  }
`

export const TrendingHeading = styled.h1`
  color: ${props => props.trendColor}
  font-size: 30px;
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
export const TrendVideoArrangeInColumn = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: column;
`

export const TrendingVideoArrangeInRow = styled.li`
  display: flex;
  margin-bottom: 30px;
  list-style-type: none;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`
export const TrendImg = styled.img`
  height: 250px;
  width: 35%;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`
export const TrendingDataArrangeInColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 15px;
  padding-top: 10px;
`
export const TrendTitle = styled.p`
  font-size: 32px;
  @media screen and (max-width: 767px) {
    font-size: 26px;
  }
  color: ${props => (props.changeTrendTitleColor ? 'white' : 'black')};
`
export const TrendCompanyName = styled.p`
  color: #7e858e;
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
export const ProfileAndDetailsContainer = styled.div`
  display: flex;
`

export const ImageOfTheIndividual = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 15px;
  margin-top: 26px;
  margin-left: 10px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const TrendingWithIcon = styled.div`
  display: flex;
  align-items: center;
`

export const IconHolder = styled.div`
  height: 40px;
  width: 40px;
  border-radius; 20px;
`
