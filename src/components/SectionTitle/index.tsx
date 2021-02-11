import React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import VerticalSeperator from '@/components/VerticalSeperator'

type TitleProps = {
  subTitle: string
  title: string
  isCentered?: boolean
}

const StyledectionTitle = styled.div`
  &.centered {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }
`

const H4 = styled.h4`
  font-size: 0.9rem;
  font-weight: 600;
  color: rgb(237, 100, 166);
  margin: 0;
  padding: 0;
`

const H2 = styled.h2`
  font-size: 1.125rem;
  text-transform: uppercase;
  margin: 0;
  margin: 0.5rem 0;
`

const SectionTitle = ({ subTitle, title, isCentered }: TitleProps) => (
  <StyledectionTitle
    className={classNames('section-title', isCentered ? 'centered' : '')}
  >
    <H4>{subTitle}</H4>
    <H2>{title}</H2>
    <VerticalSeperator />
  </StyledectionTitle>
)

export default SectionTitle
