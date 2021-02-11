import React from 'react'
import styled from 'styled-components'
import VerticalSeperator from '@/components/VerticalSeperator'

type TitleProps = {
  subTitle: string
  title: string
}

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

const SectionTitle = (props: TitleProps) => {
  const { subTitle, title }: TitleProps = props

  return (
    <div className='section-title'>
      <H4>{subTitle}</H4>
      <H2>{title}</H2>
      <VerticalSeperator />
    </div>
  )
}

export default SectionTitle
