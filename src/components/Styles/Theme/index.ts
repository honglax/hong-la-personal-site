import { lightBg, lightTextColor, darkBg, darkTextColor } from '@/constant'

export interface ITheme {
  body: string
  text: string
}

export const lightTheme: ITheme = {
  body: lightBg,
  text: lightTextColor
}

export const darkTheme: ITheme = {
  body: darkBg,
  text: darkTextColor
}
