import React, { useContext } from 'react'
import styled, { StyledComponent } from 'styled-components'
import { ThemeContext } from '@/context'
import { lightTextColor, lightBg, colorPink } from '@/constant'

const Seperator: StyledComponent<'div', any, {}, never> = styled.div`
  position: relative;
  height: 2rem;
  width: 0.5rem;
  margin-bottom: 1.5rem;
  transition: all 0.25s linear;

  &::before,
  &::after {
    position: absolute;
    content: '';
    width: 1px;
  }

  &::before {
    left: 0;
    height: 100%;
    background-color: ${lightTextColor};
  }

  &::after {
    left: 0.25rem;
    height: 75%;
    background-color: ${colorPink};
  }

  &.dark::before {
    background-color: ${lightBg};
  }
`

const VerticalSeperator = () => {
  const { darkMode } = useContext(ThemeContext)
  return <Seperator className={darkMode ? 'dark' : 'light'} />
}

export default VerticalSeperator
