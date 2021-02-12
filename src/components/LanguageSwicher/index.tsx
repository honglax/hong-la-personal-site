import React from 'react'
import styled, { StyledComponent } from 'styled-components'
import { useTranslation } from 'react-i18next'
import vnFlag from '@/assets/images/vietnam.svg'
import usaFlag from '@/assets/images/usa.svg'

type Language = {
  id: number
  imgURL: any
  alt: string
  lang: string
}

const BlockWrapper: StyledComponent<'div', any, {}, never> = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  min-width: 5rem;
  padding-right: 2rem;

  @media only screen and (max-width: 639px) {
    padding-right: 0;
    padding-bottom: 1rem;
  }
`

const BtnSwitcher: StyledComponent<'button', any, {}, never> = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  margin: 0;
  padding: 0;
  outline: none;

  &:not(:last-child) {
    margin-right: 1rem;
  }
`

const languages: Language[] = [
  {
    id: 1,
    imgURL: vnFlag,
    alt: 'Viet Nam',
    lang: 'vi-VN',
  },
  {
    id: 2,
    imgURL: usaFlag,
    alt: 'The United States of America',
    lang: 'en-US',
  },
]

const LanguageSwicher = () => {
  const { i18n } = useTranslation()
  const changeLanguage = (lng: string) => i18n.changeLanguage(lng)

  return (
    <BlockWrapper>
      {languages.map(({ id, imgURL, alt, lang }: Language) => (
        <BtnSwitcher key={id} onClick={() => changeLanguage(lang)}>
          <img src={imgURL} alt={alt} />
        </BtnSwitcher>
      ))}
    </BlockWrapper>
  )
}

export default LanguageSwicher
