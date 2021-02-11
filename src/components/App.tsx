import React, { useContext } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeContext } from '@/context/'
import Container from '@/components/Container'
import Nav from '@/components/Nav'
import Header from '@/components/Header'

const App = () => {
  const { darkMode } = useContext(ThemeContext)
  return (
    <Router>
      <div className={darkMode ? 'dark' : 'light'}>
        <Container>
          <Nav />
          <Header />
        </Container>
      </div>
    </Router>
  )
}

export default App
