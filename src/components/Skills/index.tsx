// @ts-nocheck
import React from 'react'
import styled, { StyledComponent } from 'styled-components'
import { Translation } from 'react-i18next'
import Section from '@/layouts/Section'
import SectionTitle from '@/components/SectionTitle'
import ProgressBar from '@/components/ProgressBar'

interface ISkill {
  id: number
  name: string
  progress: number
}

const SkillsWrapper: StyledComponent<'div', any, {}, never> = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
`

const ProgressBarWrapper: StyledComponent<'div', any, {}, never> = styled.div`
  width: 50%;
  padding: 0.75rem;
  margin-bottom: 0.25rem;

  @media only screen and (max-width: 599px) {
    width: 100%;
  }
`

const skills: ISkill[] = [
  {
    id: 1,
    name: 'HTML',
    progress: 70
  },
  {
    id: 2,
    name: 'CSS',
    progress: 70
  },
  {
    id: 3,
    name: 'Vanilla JavaScript',
    progress: 70
  },
  {
    id: 4,
    name: 'Typescript',
    progress: 50
  },
  {
    id: 5,
    name: 'ReactJS',
    progress: 50
  },
  {
    id: 6,
    name: 'EmberJS',
    progress: 60
  },
  {
    id: 7,
    name: 'English',
    progress: 70
  },
  {
    id: 8,
    name: 'Soft skills',
    progress: 80
  }
]

const Skill = () => (
  <Translation>
    {t => (
      <Section>
        <SectionTitle
          title={t('skill.title')}
          subTitle={t('skill.subTitle')}
          isCentered={true}
        />
        <SkillsWrapper>
          {skills.map(({ id, name, progress }: ISkill) => (
            <ProgressBarWrapper key={`${id}-wrapper`}>
              <ProgressBar
                key={`${id}-progress-bar`}
                name={name}
                progress={progress}
              />
            </ProgressBarWrapper>
          ))}
        </SkillsWrapper>
      </Section>
    )}
  </Translation>
)

export default Skill
