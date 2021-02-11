import React from 'react'
import styled, { StyledComponent } from 'styled-components'
import { IoMdCodeDownload } from 'react-icons/io'
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
  return (
    <Section>
      <SectionTitle
        subTitle='Software Engineer'
        title='Working at KMS Technology Viet Nam - Team Tricentis Flood'
      />
      <HeaderContent>
        <p>
          Hi, It's me - Hong La - a normal guy who fall madly in love with cat
          🐱, cactus 🌵, and sunflower 🌻.
        </p>
        <p>
          I'm currently working as a Software Engineer with 1+ years of
          experience. Before working in the IT industry, I’ve had over 4 years
          of experience working in F&B as an IT Consultant and a Store Manager.
        </p>
        <p>
          I’m strongly interested not only in JavaScript, HTML, CSS but also in
          many JavaScript libraries and frameworks. Moreover, I'm confident
          about my adaptability, soft skills, English, communication skill, and
          my sense of humour.
        </p>
        <p>Wanna know more about me? Click these buttons below 👇</p>
      </HeaderContent>
      <HeaderBtn>
        <StyledBtn hrefLink='https://blog.hongla.dev'>Visit my blog</StyledBtn>
        <StyledBtn hrefLink={String(resume)} isReverse={true} isDownload={true}>
          <div>
            Download Resume &nbsp;
            <IoMdCodeDownload size='24' />
          </div>
        </StyledBtn>
      </HeaderBtn>
    </Section>
  )
}

export default Header
