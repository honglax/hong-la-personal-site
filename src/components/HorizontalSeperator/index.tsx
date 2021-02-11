import React, { useContext } from 'react'
import styled from 'styled-components'
import { lightTextColor, colorPink } from '@/constant'
import { ThemeContext } from '@/context'

const StyledHr = styled.hr`
  width: 100%;
  border: 0;
  border-top: 1px solid ${lightTextColor};
  margin: 0;

  &.dark {
    border-color: ${colorPink};
    background-color: ${colorPink};
  }
`

const HorizontalSeperator = () => {
  const { darkMode } = useContext(ThemeContext)
  return <StyledHr className={darkMode ? 'dark' : 'light'} />
}

export default HorizontalSeperator
