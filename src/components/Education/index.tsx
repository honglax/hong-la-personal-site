import React from 'react'
import Section from '@/components/Section'
import SectionTitle from '@/components/SectionTitle'

import Timeline, { ITimelineProps } from '@/components/Timeline'

interface IEducation extends ITimelineProps {
  id: number
}

const qualifications: IEducation[] = [
  {
    id: 1,
    title: 'Ho Chi Minh University of Information Technology',
    subTitle: 'Bachelor degree of Software Engineering',
    fromDate: 'Jan 2021',
    toDate: 'Present',
    content: `<p>Currently studying for a Bachelor degree majoring in Software Engineering at Ho Chi Minh University of Information Technology</p>`,
  },
  {
    id: 2,
    title: 'FPT Polytechnic Ho Chi Minh',
    subTitle: 'The Degree Of Associate of Software Engineering',
    fromDate: 'Jan 2014',
    toDate: 'Jul 2016',
    content: `<p>After graduated from FPT Polytechnic HCM, with GPA “8.8”, knowledge and soft skills, I can work as a Software Engineer with good skill at HTML, CSS, and some JavaScript frameworks and libraries (ReactJS, EmberJS, Angular), or a Network Administrator, or a Test Engineer.</p>
    <p>Otherwise, I also have knowledge about NodeJS, and data management (SQL, Oracle).</p>`,
  },
]

const Education = () => (
  <Section>
    <SectionTitle title='My qualification' subTitle='Education' />
    {qualifications.map(
      ({ id, title, subTitle, fromDate, toDate, content }: IEducation) => (
        <Timeline
          key={id}
          title={title}
          subTitle={subTitle}
          fromDate={fromDate}
          toDate={toDate}
          content={content}
        />
      )
    )}
  </Section>
)

export default Education
