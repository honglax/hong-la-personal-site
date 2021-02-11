import React from 'react'
import { FaCloudDownloadAlt } from 'react-icons/fa'
import './styles.scss'
import SectionTitle from '@/components/SectionTitle'
import StyledBtn from '@/components/StyledButton'

const Header = () => {
  return (
    <header>
      <SectionTitle
        subTitle='Software Engineer'
        title='WORKING AT KMS TECHNOLOGY VIET NAM - TEAM TRICENTIS FLOOD'
      />
      <div className='header-content'>
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
      </div>
      <div className='header-btn'>
        <StyledBtn hrefLink='https://blog.hongla.dev'>Visit my blog</StyledBtn>
        <StyledBtn hrefLink='/' isReverse={true}>
          <div>
            Download Resume &nbsp;
            <FaCloudDownloadAlt />
          </div>
        </StyledBtn>
      </div>
    </header>
  )
}

export default Header
