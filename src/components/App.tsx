import React, { useContext } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import styled, { StyledComponent } from 'styled-components'
import { ThemeContext } from '@/context/'
import Container from '@/components/Container'
import Nav from '@/components/Nav'
import Header from '@/components/Header'
import Working from '@/components/Working'
import Education from '@/components/Education'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import HorizontalSeperator from '@/components/HorizontalSeperator'

const Wrapper: StyledComponent<'div', any, {}, never> = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 100%;
`

const SubWrapper = styled.div`
  width: 1024px;
`

const pageData = [
  [<Nav />, <Header />],
  <Working />,
  <Education />,
  <Skills />,
  <Contact />,
]

const App = () => {
  const { darkMode } = useContext(ThemeContext)
  return (
    <Router>
      <Wrapper className={darkMode ? 'dark' : 'light'}>
        {pageData.map((data, idx) => (
          <>
            <Container key={`${idx}-container`}>{data}</Container>
            <HorizontalSeperator key={`${idx}-seperator`} />
          </>
        ))}
      </Wrapper>
    </Router>
  )
}

export default App
