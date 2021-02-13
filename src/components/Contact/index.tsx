// @ts-nocheck
import React from 'react'
import styled, { StyledComponent } from 'styled-components'
import { FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'
import { Translation } from 'react-i18next'
import Section from '@/layouts/Section'
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

const contactData: Partial<InfoProps>[] = [
  {
    id: 'phone',
    icon: <FaPhone />
  },
  {
    id: 'address',
    icon: <FaMapMarkerAlt />
  },
  {
    id: 'email',
    icon: <FaPaperPlane />
  }
]

const Contact = () => (
  <Translation>
    {t => (
      <Section>
        <SectionTitle
          title={t('contact.title')}
          subTitle={t('contact.subTitle')}
          isCentered={true}
        />
        <ContactWrapper>
          {contactData.map(({ id, icon }: Partial<InfoProps>) => (
            <InfoBlock
              key={id}
              icon={icon ?? <></>}
              title={t(`contact.items.${id}.title`)}
              content={t(`contact.items.${id}.content`)}
            ></InfoBlock>
          ))}
        </ContactWrapper>
      </Section>
    )}
  </Translation>
)

export default Contact
