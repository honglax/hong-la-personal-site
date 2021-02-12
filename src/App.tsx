import React, { useContext } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import styled, { StyledComponent } from 'styled-components'
import { ThemeContext } from '@/context/'
import Container from '@/components/Container'
import Nav from '@/components/Nav'
import Header from '@/components/Header'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import HorizontalSeperator from '@/components/HorizontalSeperator'

const Wrapper: StyledComponent<'div', any, {}, never> = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 100%;
`

const pageData: (JSX.Element | JSX.Element[])[] = [
  [<Nav />, <Header />],
  <Experience />,
  <Education />,
  <Skills />,
  <Contact />,
  <Footer />,
]

const App = () => {
  const { darkMode } = useContext(ThemeContext)
  return (
    <Router>
      <Wrapper className={darkMode ? 'dark' : 'light'}>
        {pageData.map((data, idx) => (
          <>
            <Container key={`${idx}-container`}>{data}</Container>
            {idx !== pageData.length - 1 ? (
              <HorizontalSeperator key={`${idx}-seperator`} />
            ) : (
              <></>
            )}
          </>
        ))}
      </Wrapper>
    </Router>
  )
}

export default App
