import React, { useContext } from 'react'
import classNames from 'classnames'
import styled from 'styled-components'
import { ThemeContext } from '@/context'
import { colorPink, darkTextColor } from '@/constant'

type BtnProps = {
  isReverse?: boolean
  hrefLink: string
  children?: React.ReactNode | string | Element
  isDownload?: boolean
}

const StyledLink = styled.a`
  &:not(:first-child) {
    margin-left: 1.75rem;

    @media only screen and (max-width: 599px) {
      margin-left: 0;
      margin-top: 1.75rem;
    }
  }
`

const Button = styled.button`
  padding: 0.5rem 2rem;
  border: 1px solid ${colorPink};
  background-color: ${colorPink};
  color: ${darkTextColor};
  border-radius: 9999px;
  font-size: 1rem;
  line-height: 1.5;
  cursor: pointer;
  outline: none;

  & > div {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }

  &.reverse {
    background-color: transparent;
    color: ${colorPink};

    &.dark {
      background-color: ${colorPink};
      color: ${darkTextColor};
    }
  }

  &.dark {
    background-color: transparent;
    color: ${colorPink};
  }
`

const StyledButton = ({
  isReverse = false,
  hrefLink,
  children,
  isDownload = false,
}: BtnProps) => {
  const { darkMode } = useContext(ThemeContext)

  return (
    <StyledLink
      href={hrefLink}
      target='_blank'
      rel='noreferrer noopener'
      title="Hong La's Blog"
      download={isDownload}
    >
      <Button
        className={classNames(
          'styled-btn--btn',
          darkMode ? 'dark' : 'light',
          isReverse ? 'reverse' : ''
        )}
      >
        {children}
      </Button>
    </StyledLink>
  )
}

export default StyledButton
