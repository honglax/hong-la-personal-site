import React from 'react'
import styled, { StyledComponent } from 'styled-components'
import { colorPink } from '@/constant'

interface ImageProps {
  imageURL: string
  siteTitle: string
}

const StyledProfile: StyledComponent<'div', any, {}, never> = styled.div`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  overflow: hidden;
  padding: 5px;
  border: 2px solid ${colorPink};
  transition: all 0.25s linear;

  &:hover {
    transform: translate(-10px, 30px) scale(1.8);
  }

  img {
    width: 100%;
    border-radius: 50%;
  }
`

const ProfileImage = (props: ImageProps) => {
  const { imageURL, siteTitle }: ImageProps = props

  return (
    <StyledProfile>
      <img width="100%" height="100%" src={imageURL} alt={siteTitle} />
    </StyledProfile>
  )
}

export default ProfileImage
