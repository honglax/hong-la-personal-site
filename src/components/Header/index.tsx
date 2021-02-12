// @ts-nocheck
import React from 'react'
import styled, { StyledComponent } from 'styled-components'
import { IoMdCodeDownload } from 'react-icons/io'
import { useTranslation } from 'react-i18next'
import parse from 'html-react-parser'
import Section from '@/components/Section'
import SectionTitle from '@/components/SectionTitle'
import StyledBtn from '@/components/StyledButton'
import resume from '@/assets/resume/La-Xuan-Hong-Software-Engineer.pdf'

const HeaderContent: StyledComponent<'div', any, {}, never> = styled.div`
  p {
    margin-bottom: 0.6rem;
    text-indent: 4%;
    width: 100%;
  }
`

const HeaderBtn: StyledComponent<'div', any, {}, never> = styled.div`
  margin-top: 1.75rem;
  display: flex;
  flex-flow: row nowrap;

  @media only screen and (max-width: 599px) {
    flex-flow: column nowrap;
  }
`

const Header = () => {
  const { t } = useTranslation('translation')

  return (
    <Section>
      <SectionTitle subTitle={t('header.subTitle')} title={t('header.title')} />
      <HeaderContent>{parse(t('header.content'))}</HeaderContent>
      <HeaderBtn>
        <StyledBtn hrefLink='https://blog.hongla.dev'>
          {t('header.button.blog')}
        </StyledBtn>
        <StyledBtn hrefLink={String(resume)} isReverse={true} isDownload={true}>
          <div>
            {t('header.button.resume')} &nbsp;
            <IoMdCodeDownload size='24' />
          </div>
        </StyledBtn>
      </HeaderBtn>
    </Section>
  )
}

export default Header
