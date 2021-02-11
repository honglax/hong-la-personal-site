import React from 'react'
import { IconType } from 'react-icons'
import { FaCat, FaGithub, FaLinkedin } from 'react-icons/fa'
import styled, { StyledComponent } from 'styled-components'

type SocialData = {
  id: number
  name: string
  icon: IconType
  href: string
}

const FooterWrapper: StyledComponent<'div', any, {}, never> = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;

  .social-wrapper {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.25rem;
  }
`

const SocialButton: StyledComponent<'a', any, {}, never> = styled.a`
  margin: 0 0.5rem;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  font-weight: 600;
  transition: all 0.25s linear;
  display: flex;
  flex-flow: row nowrap;
  line-height: 1.25rem;

  &:not(:first-child) {
    margin-left: 1.5rem;
  }

  &:hover {
    color: rgb(237, 100, 166);
  }

  .social-icon {
    margin-right: 0.5rem;
  }
`

const FooterText: StyledComponent<'p', any, {}, never> = styled.p`
  text-align: center;
  line-height: 1.5;
`

const socialData: SocialData[] = [
  {
    id: 1,
    name: 'Blog',
    icon: FaCat,
    href: 'https://blog.hongla.dev',
  },
  {
    id: 2,
    name: 'Github',
    icon: FaGithub,
    href: 'https://github.com/honglax',
  },
  {
    id: 3,
    name: 'LinkedIn',
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/hongla/',
  },
]

const Footer = () => (
  <FooterWrapper>
    <div className='social-wrapper'>
      {socialData.map((data) => (
        <SocialButton
          key={data.id}
          target='_blank'
          rel='noreferrer noopener'
          title={data.name}
          href={data.href}
        >
          <data.icon className='social-icon' />
          <span>{data.name}</span>
        </SocialButton>
      ))}
    </div>
    <FooterText>© Copyright 2021 by Hong La.</FooterText>
    <FooterText>
      Build with ❤️ React, TypeScript, and Webpack from scratch.
    </FooterText>
  </FooterWrapper>
)

export default Footer
