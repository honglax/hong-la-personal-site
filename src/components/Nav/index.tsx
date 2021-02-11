import React from 'react'
import ProfileImage from '@/components/ProfileImage'
import profileImg from '@/assets/images/profile.jpg'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import './styles.scss'

const Nav = () => (
  <div className='navigation'>
    <div className='navigation__left-nav'>
      <ProfileImage
        imageURL={String(profileImg)}
        siteTitle='Hong La - A Cat Lover'
      />
      <h1>Hong La</h1>
    </div>
    <div className='navigation__right-nav'>
      <ThemeSwitcher />
    </div>
  </div>
)

export default Nav
