import React from 'react'
import styled, { StyledComponent } from 'styled-components'
import Section from '@/components/Section'
import SectionTitle from '@/components/SectionTitle'
import ProgressBar from '@/components/ProgressBar'

type Skill = {
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

const skills: Skill[] = [
  {
    id: 1,
    name: 'HTML',
    progress: 70,
  },
  {
    id: 2,
    name: 'CSS',
    progress: 70,
  },
  {
    id: 3,
    name: 'Vanilla JavaScript',
    progress: 70,
  },
  {
    id: 4,
    name: 'Typescript',
    progress: 50,
  },
  {
    id: 5,
    name: 'ReactJS',
    progress: 50,
  },
  {
    id: 6,
    name: 'EmberJS',
    progress: 60,
  },
  {
    id: 7,
    name: 'English',
    progress: 70,
  },
  {
    id: 8,
    name: 'Soft skills',
    progress: 80,
  },
]

const Skill = () => (
  <Section>
    <SectionTitle
      title='Technologies & Tools'
      subTitle='Skills'
      isCentered={true}
    />
    <SkillsWrapper>
      {skills.map(({ id, name, progress }: Skill) => (
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
)

export default Skill
