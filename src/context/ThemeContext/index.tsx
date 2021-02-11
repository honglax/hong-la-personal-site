import React, { createContext, useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme, GlobalStyles } from '@/styles/Theme'

type ContextProps = {
  toggleDarkMode: () => void
  darkMode: boolean
}

export const ThemeContext = createContext<Partial<ContextProps>>({})

const AppProvider = ({ children }: { children: any }) => {
  const [darkMode, setDarkMode] = useState(false)
  const toggleDarkMode = () => {
    localStorage.setItem('darkMode', JSON.stringify(!darkMode))
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    setDarkMode(localStorage.getItem('darkMode') === 'true' ? true : false)
  }, [])

  const value: ContextProps = { toggleDarkMode, darkMode }

  return (
    <ThemeContext.Provider value={value}>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default AppProvider
