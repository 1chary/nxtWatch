import styled from 'styled-components'

export const TrendingContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const TrendVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  min-height: 90vh;
  padding-left: 10px;
  background-color: ${props =>
    props.trendBackgroundColor ? 'black' : '#f1f1f1'};
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`

export const TrendingHeading = styled.h1`
  color: ${props => (props.trendingHeading ? 'Yellow' : 'black')}
  font-size: 32px;
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
export const TrendTitle = styled.h1`
  color: ${props => (props.changeTrendTitleColor ? 'white' : 'black')}
  font-size: 26px;
  @media screen and (max-width: 767px) {
      font-size: 18px;
  }
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
