import React from 'react'
import './styles.scss'

interface ImageProps {
  imageURL: string
  siteTitle: string
}

const ProfileImage = (props: ImageProps) => {
  const { imageURL, siteTitle }: ImageProps = props

  return (
    <div className='nav__profile-image'>
      <img src={imageURL} alt={siteTitle} />
    </div>
  )
}

export default ProfileImage
