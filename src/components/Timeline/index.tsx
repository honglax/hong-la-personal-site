import React, { useContext } from 'react'
import styled, { StyledComponent } from 'styled-components'
import parse from 'html-react-parser'
import TimelineDetail, { TimelineDetailProps } from './TimelineDetail'
import {
  darkTextColor,
  lightTextColor,
  colorPink,
  lightBg,
  darkBg
} from '@/constant'
import { ThemeContext } from '@/context'

export interface ITimelineProps extends TimelineDetailProps {
  content: string
}

const TimelineWrapper: StyledComponent<'div', any, {}, never> = styled.div`
  display: flex;
  flex-flow: row nowrap;
  padding: 1rem 1rem 1.5rem;
  position: relative;
  width: 100%;
  border-left: 1px solid ${lightTextColor};

  &:last-child {
    padding-bottom: 1rem;
  }

  &.dark {
    border-left-color: ${darkTextColor};

    &::before {
      background-color: ${darkBg};
    }
  }

  &::before {
    content: '';
    position: absolute;
    width: 0.8rem;
    height: 0.8rem;
    background-color: ${lightBg};
    border-radius: 50%;
    border: 1px solid ${colorPink};
    left: -0.45rem;
    top: 1.3rem;
  }

  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }
`

const Detail: StyledComponent<'div', any, {}, never> = styled.div`
  width: calc(100% / 3);
  padding-right: 0.5rem;

  @media only screen and (max-width: 767px) {
    width: 100%;
    padding: 0.5rem;
    padding-top: 0;
  }
`

const Content: StyledComponent<'div', any, {}, never> = styled.div`
  text-indent: 5%;
  width: calc(100% * 2 / 3);
  padding-left: 1rem;
  padding-top: 2rem;

  a {
    color: inherit;
    text-decoration: none;
  }

  p {
    line-height: 1.5;

    &:not(:last-child) {
      margin-bottom: 0.5rem;
    }
  }

  @media only screen and (max-width: 767px) {
    width: 100%;
    padding: 0.5rem;
  }
`

const Timeline = ({
  fromDate,
  toDate,
  title,
  subTitle,
  content
}: ITimelineProps) => {
  const { darkMode } = useContext(ThemeContext)
  return (
    <TimelineWrapper className={darkMode ? 'dark' : 'light'}>
      <Detail>
        <TimelineDetail
          fromDate={fromDate}
          toDate={toDate}
          title={title}
          subTitle={subTitle}
        />
      </Detail>
      <Content>{parse(content)}</Content>
    </TimelineWrapper>
  )
}

export default Timeline
