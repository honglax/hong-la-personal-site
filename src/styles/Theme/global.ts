import { createGlobalStyle } from 'styled-components'
import { ITheme } from './theme'

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box
  }

  body {
    padding: 0;
    margin: 0;
    letter-spacing: 0.02rem;
  }

  p, ul {
    margin: 0;
  }

  #root {
    font-family: 'Raleway', sans-serif;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${({ theme }: { theme: ITheme }) => theme.body};
    color: ${({ theme }: { theme: ITheme }) => theme.text};
    transition: all 0.25s linear;
  }

  .container {
    width: 100%;
    max-width: 1024px;
    padding: 1.125rem;
  }

  p {
    text-align: justify;
    line-height: 1.5;
  }
`
