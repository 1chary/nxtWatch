import React from 'react'

const DarkThemeContext = React.createContext({
  isDark: false,
  onClickChangeMode: () => {},
})

export default DarkThemeContext
