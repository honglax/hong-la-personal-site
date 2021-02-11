import React from 'react'
import styled, { StyledComponent } from 'styled-components'
import ProfileImage from '@/components/ProfileImage'
import profileImg from '@/assets/images/profile.jpg'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import { colorPink } from '@/constant'

const Navigation: StyledComponent<'div', any, {}, never> = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 1.125rem 0;

  .left-nav {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;

    h1 {
      margin-left: 1em;
      font-size: 1.25em;
      font-weight: normal;
      color: ${colorPink};
    }
  }
`

const Nav = () => (
  <Navigation>
    <div className='left-nav'>
      <ProfileImage
        imageURL={String(profileImg)}
        siteTitle='Hong La - A Cat Lover'
      />
      <h1>Hong La</h1>
    </div>
    <div className='right-nav'>
      <ThemeSwitcher />
    </div>
  </Navigation>
)

export default Nav
