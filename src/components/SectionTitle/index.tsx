import React from 'react'
import './styles.scss'
import Seperator from '@/components/Seperator'

type TitleProps = {
  subTitle: string
  title: string
}

const SectionTitle = (props: TitleProps) => {
  const { subTitle, title }: TitleProps = props

  return (
    <div className='section-title'>
      <h4>{subTitle}</h4>
      <h2>{title}</h2>
      <Seperator />
    </div>
  )
}

export default SectionTitle
