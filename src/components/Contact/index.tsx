import React from 'react'
import styled, { StyledComponent } from 'styled-components'
import { FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'
import Section from '@/components/Section'
import SectionTitle from '@/components/SectionTitle'
import InfoBlock, { InfoProps } from '@/components/InfoBlock'

const ContactWrapper: StyledComponent<'div', any, {}, never> = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: stretch;
  justify-content: center;

  @media only screen and (max-width: 767px) {
    flex-flow: column nowrap;
  }
`

const contactData: InfoProps[] = [
  {
    id: 1,
    title: 'Phone',
    content: '<a href="tel:+84989110991">(+84) 989.11.09.91</a>',
    icon: <FaPhone />,
  },
  {
    id: 2,
    title: 'Address',
    content:
      '<span>02 Tan Vien, Ward 2, Tan Binh District, Ho Chi Minh City, Vietnam</span>',
    icon: <FaMapMarkerAlt />,
  },
  {
    id: 3,
    title: 'Email',
    content: '<a href="mailto:hongla.html@gmail.com">hongla.html@gmail.com</a>',
    icon: <FaPaperPlane />,
  },
]

const Contact = () => (
  <Section>
    <SectionTitle
      title='For more info, please contact me'
      subTitle='Contact'
      isCentered={true}
    />
    <ContactWrapper>
      {contactData.map(({ id, title, content, icon }: InfoProps) => (
        <InfoBlock
          key={id}
          icon={icon}
          title={title}
          content={content}
        ></InfoBlock>
      ))}
    </ContactWrapper>
  </Section>
)

export default Contact
