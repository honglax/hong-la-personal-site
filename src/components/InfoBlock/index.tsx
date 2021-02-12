import React, { useContext } from 'react'
import styled, { StyledComponent } from 'styled-components'
import parse from 'html-react-parser'
import { colorPink, colorWhite } from '@/constant'
import { ThemeContext } from '@/context'
import { IconType } from 'react-icons'

export type InfoProps = {
  id?: string
  title: string
  icon: JSX.Element | IconType
  content: string
}

const BlockWrapper: StyledComponent<'div', any, {}, never> = styled.div`
  width: calc(100% / 3);
  background-color: ${colorWhite};
  display: flex;
  flex-flow: column nowrap;
  margin: 1rem 0.75rem;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid ${colorPink};
  align-items: center;
  justify-content: flex-start;

  &.dark {
    background-color: transparent;
  }

  @media only screen and (max-width: 767px) {
    width: 100%;
    margin: 1rem 0;
  }
`

const BlockIcon: StyledComponent<'span', any, {}, never> = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid ${colorPink};
  border-radius: 50%;
  margin-bottom: 0.5rem;
`

const BlockTitle: StyledComponent<'h3', any, {}, never> = styled.h3`
  font-weight: 600;
  margin: 0.25rem 0;
`

const BlockContent: StyledComponent<'p', any, {}, never> = styled.p`
  text-align: center;
  margin-top: 0.5rem;

  a {
    text-decoration: none;
    color: inherit;
  }
`

const InfoBlock = ({ title, icon, content }: InfoProps) => {
  const { darkMode } = useContext(ThemeContext)
  return (
    <BlockWrapper className={darkMode ? 'dark' : 'light'}>
      <BlockIcon>{icon}</BlockIcon>
      <BlockTitle>{title}</BlockTitle>
      <BlockContent>{parse(content)}</BlockContent>
    </BlockWrapper>
  )
}

export default InfoBlock
