export interface ITheme {
  body: string
  text: string
  toggleBorder: string
  gradient: string
}

export const lightTheme: ITheme = {
  body: '#fff',
  text: 'rgb(60, 54, 107)',
  toggleBorder: '#FFF',
  gradient: 'linear-gradient(#39598A, #79D7ED)',
}

export const darkTheme: ITheme = {
  body: '#000',
  text: '#f7fafc',
  toggleBorder: '#6B8096',
  gradient: 'linear-gradient(#091236, #1E215D)',
}
