import React, { useContext } from 'react'
import { FaCloudMoon, FaSun } from 'react-icons/fa'
import { ThemeContext } from '@/context/'
import './styles.scss'

const ThemeSwitcher = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext)

  return (
    <button className='dark-switcher' onClick={toggleDarkMode}>
      {darkMode ? (
        <FaSun className='dark-switcher__icon' />
      ) : (
        <FaCloudMoon className='dark-switcher__icon' />
      )}
    </button>
  )
}

export default ThemeSwitcher
