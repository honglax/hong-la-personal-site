import React from 'react'
import { Translation } from 'react-i18next'
import Section from '@/components/Section'
import SectionTitle from '@/components/SectionTitle'

import Timeline from '@/components/Timeline'

interface IEducation {
  id: string
}

const qualifications: IEducation[] = [
  {
    id: 'uit',
  },
  {
    id: 'fptPoly',
  },
]

const Education = () => (
  <Translation>
    {(t) => (
      <Section>
        <SectionTitle
          title={t('education.title')}
          subTitle={t('education.subTitle')}
        />
        {qualifications.map(({ id }: IEducation) => (
          <Timeline
            key={id}
            title={t(`education.items.${id}.title`)}
            subTitle={t(`education.items.${id}.subTitle`)}
            fromDate={t(`education.items.${id}.fromDate`)}
            toDate={t(`education.items.${id}.toDate`)}
            content={t(`education.items.${id}.content`)}
          />
        ))}
      </Section>
    )}
  </Translation>
)

export default Education
