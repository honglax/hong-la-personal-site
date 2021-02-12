import React from 'react'
import styled, { StyledComponent } from 'styled-components'
import { colorPink } from '@/constant'

export type TimelineDetailProps = {
  fromDate: string
  toDate: string
  title: string
  subTitle: string
}

const Date: StyledComponent<'div', any, {}, never> = styled.div`
  font-size: 0.75rem;
  border: 1px solid ${colorPink};
  border-radius: 9999px;
  padding: 0.25rem 0.5rem;
  width: fit-content;
`

const Title: StyledComponent<'h3', any, {}, never> = styled.h3`
  margin: 0.75rem 0 0.25rem;
  line-height: 1.5;
  font-weight: 600;
  font-size: 1rem;
  text-transform: capitalize;
`

const SubTitle: StyledComponent<'h4', any, {}, never> = styled.h4`
  font-size: 0.8rem;
  font-weight: 300;
  text-transform: capitalize;
  margin: 0;
`

const TimelineDetail = ({
  fromDate,
  toDate,
  title,
  subTitle,
}: TimelineDetailProps) => (
  <>
    <Date>
      {fromDate} - {toDate}
    </Date>
    <Title>{title}</Title>
    <SubTitle>{subTitle}</SubTitle>
  </>
)

export default TimelineDetail
