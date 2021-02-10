import React, { useContext } from 'react'
import { ThemeContext } from '@/context/'
import Nav from '@/components/Nav'
import classNames from 'classnames'

const App = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext)
  return (
    <div className={classNames('container', darkMode ? 'dark' : 'light')}>
      <Nav />
    </div>
  )
}

export default App
