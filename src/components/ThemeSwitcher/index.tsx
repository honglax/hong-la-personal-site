import React, { useContext } from 'react'
import { FaCloudMoon, FaSun } from 'react-icons/fa'
import styled, { StyledComponent } from 'styled-components'
import { ThemeContext } from '@/context/'

const DarkSwitcher: StyledComponent<'button', any, {}, never> = styled.button`
  color: inherit;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  font-size: 2em;

  &:focus {
    outline: none;
  }

  &__icon {
    transition: all 0.25s linear;
  }
`

const ThemeSwitcher = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext)

  return (
    <DarkSwitcher className='dark-switcher' onClick={toggleDarkMode}>
      {darkMode ? (
        <FaSun className='dark-switcher__icon' />
      ) : (
        <FaCloudMoon className='dark-switcher__icon' />
      )}
    </DarkSwitcher>
  )
}

export default ThemeSwitcher
