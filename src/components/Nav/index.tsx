import React from 'react'
import styled, { StyledComponent } from 'styled-components'
import ProfileImage from '@/components/ProfileImage'
import profileImg from '@/assets/images/profile.jpg'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import LanguageSwicher from '@/components/LanguageSwicher'
import { colorPink } from '@/constant'
import { useTranslation } from 'react-i18next'

const Navigation: StyledComponent<'div', any, {}, never> = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 1.125rem 0;

  .left-nav,
  .right-nav {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    height: 100%;

    h1 {
      margin-left: 1em;
      font-size: 1.25em;
      font-weight: normal;
      color: ${colorPink};
    }
  }

  .right-nav {
    min-width: 5rem;

    @media only screen and (max-width: 639px) {
      flex-flow: column nowrap;
    }
  }
`

const Nav = () => {
  const { t } = useTranslation()
  return (
    <Navigation>
      <div className='left-nav'>
        <ProfileImage
          imageURL={String(profileImg)}
          siteTitle='Hong La - A Cat Lover'
        />
        <h1>{t('name')}</h1>
      </div>
      <div className='right-nav'>
        <LanguageSwicher />
        <ThemeSwitcher />
      </div>
    </Navigation>
  )
}

export default Nav
