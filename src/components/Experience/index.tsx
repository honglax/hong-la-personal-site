// @ts-nocheck
import React from 'react'
import { Translation } from 'react-i18next'
import Section from '@/layouts/Section'
import SectionTitle from '@/components/SectionTitle'
import Timeline from '@/components/Timeline'

interface IExperience {
  id: string
}

const expericenes: IExperience[] = [
  {
    id: 'kmsTechnology'
  },
  {
    id: 'appsCyclone'
  }
]

const Expericene = () => (
  <Translation>
    {t => (
      <Section>
        <SectionTitle
          title={t('experience.title')}
          subTitle={t('experience.subTitle')}
        />
        {expericenes.map(({ id }: IExperience) => (
          <Timeline
            key={id}
            title={t(`experience.items.${id}.title`)}
            subTitle={t(`experience.items.${id}.subTitle`)}
            fromDate={t(`experience.items.${id}.fromDate`)}
            toDate={t(`experience.items.${id}.toDate`)}
            content={t(`experience.items.${id}.content`)}
          />
        ))}
      </Section>
    )}
  </Translation>
)

export default Expericene
