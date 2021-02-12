import React from 'react'
import Section from '@/components/Section'
import SectionTitle from '@/components/SectionTitle'
import Timeline, { ITimelineProps } from '@/components/Timeline'

interface IExperience extends ITimelineProps {
  id: number
}

const expericenes: IExperience[] = [
  {
    id: 1,
    title: 'KMS Technology',
    subTitle: 'Software Engineer',
    fromDate: 'Oct 2019',
    toDate: 'Present',
    content: `<p>Work as a Software Engineering for Tricentis Flood - a Distributed Load Testing DevOps Tools.</p>
    <p>Implementing new Front-end features for Tricentis Flood (https://flood.io)</p>
    <p>Implementing new features for Flood Element - a browser-based load generation tool (https://element.flood.io)</p>`,
  },
  {
    id: 2,
    title: 'Apps Cyclone',
    subTitle: 'Web Developer Internship',
    fromDate: 'Aug 2019',
    toDate: 'Oct 2019',
    content: `<p>Work as a Front-end Developer and develop web application for Apps Cyclone's client.</p>`,
  },
]

const Expericene = () => (
  <Section>
    <SectionTitle title='My experience' subTitle='All companies' />
    {expericenes.map(
      ({ id, title, subTitle, fromDate, toDate, content }: IExperience) => (
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

export default Expericene
