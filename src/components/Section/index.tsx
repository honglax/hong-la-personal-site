import styled, { StyledComponent } from 'styled-components'

const Section: StyledComponent<'section', any, {}, never> = styled.section`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  padding: 4rem 0;
`

export default Section
