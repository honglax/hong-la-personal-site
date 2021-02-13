import React, { useState, useEffect } from 'react'
import styled, { StyledComponent } from 'styled-components'
import { useTranslation } from 'react-i18next'
import vnFlag from '@/assets/images/vietnam.svg'
import ukFlag from '@/assets/images/uk.svg'

type Language = {
  id: number
  imgURL: any
  alt: string
  lng: string
}

const BlockWrapper: StyledComponent<'div', any, {}, never> = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  min-width: 2rem;
  padding-right: 1rem;

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
    alt: 'Tiếng Việt',
    lng: 'vi'
  },
  {
    id: 2,
    imgURL: ukFlag,
    alt: 'English',
    lng: 'en'
  }
]

const LanguageSwicher = () => {
  const [currentLanguage, setCurrentLanguage] = useState('')
  const { i18n } = useTranslation()

  useEffect(() => {
    setCurrentLanguage(i18n.language)
  }, [i18n.language])

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    setCurrentLanguage(lng === 'en' ? 'en' : 'vi')
  }

  return (
    <BlockWrapper>
      {languages.map(
        ({ id, imgURL, alt, lng }: Language) =>
          lng !== currentLanguage && (
            <BtnSwitcher key={id} onClick={() => changeLanguage(lng)}>
              <img src={imgURL} alt={alt} />
            </BtnSwitcher>
          )
      )}
    </BlockWrapper>
  )
}

export default LanguageSwicher
