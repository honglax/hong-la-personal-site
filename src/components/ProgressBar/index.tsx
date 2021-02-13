import React from 'react'
import styled, { StyledComponent } from 'styled-components'
import { colorPink, progressBarBg } from '@/constant'

type ProgressProps = {
  name: string
  progress: number
}

interface BarProps {
  progress: number
}

const BarTitle: StyledComponent<'div', any, {}, never> = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;

  h3 {
    font-weight: 600;
    font-size: 1rem;
    margin: 0;
  }
`

const BarWrapper: StyledComponent<'div', any, {}, never> = styled.div`
  width: 100%;
  height: 0.5rem;
  background-color: ${progressBarBg};
  overflow: hidden;
  border-radius: 0.25rem;
  margin-top: 0.25rem;
`

const Bar: StyledComponent<'div', any, BarProps, never> = styled.div<BarProps>`
  background-color: ${colorPink};
  width: ${props => props.progress}%;
  height: 100%;
`

const ProgressBar = ({ name, progress }: ProgressProps) => (
  <>
    <BarTitle>
      <h3>{name}</h3>
      <h3>{progress}%</h3>
    </BarTitle>
    <BarWrapper>
      <Bar progress={progress} />
    </BarWrapper>
  </>
)

export default ProgressBar
