import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import DarkThemeContext from '../../context/DarkThemeContext'
import Header from '../Header'
import SideBar from '../SideBar'

const apiConstants = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {videoItemDetails: [], apiStatus: ''}

  componentDidMount() {
    this.getProductsWithId()
  }

  getProductsWithId = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const responseData = await fetch(url, options)
    console.log(responseData)
  }

  render() {
    return (
      <div>
        <h1>HI</h1>
      </div>
    )
  }
}

export default VideoItemDetails
