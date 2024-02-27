import React from 'react'

const DarkThemeContext = React.createContext({
  isDark: false,
  savedVideos: [],
  activeTab: 'Home',
  onClickChangeMode: () => {},
  changeTab: () => {},
  addVideo: () => {},
})

export default DarkThemeContext
