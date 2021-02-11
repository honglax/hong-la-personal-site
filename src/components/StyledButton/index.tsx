import React from 'react'
import classNames from 'classnames'
import './styles.scss'

type BtnProps = {
  isReverse?: boolean
  hrefLink: string
  children?: React.ReactNode | string | Element
}

const StyledButton = ({ isReverse = false, hrefLink, children }: BtnProps) => {
  return (
    <a
      href={hrefLink}
      className='styled-btn--link'
      target='_blank'
      rel='noreferrer noopener'
      title="Hong La's Blog"
    >
      <button
        className={classNames('styled-btn--btn', isReverse ? 'reverse' : '')}
      >
        {children}
      </button>
    </a>
  )
}

export default StyledButton
