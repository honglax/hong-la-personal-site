import i18n from 'i18next'
import translationEN from './locales/en/translation.json'
import translationVI from './locales/vi/translation.json'
import { initReactI18next } from 'react-i18next'

export const resources = {
  en: {
    translation: translationEN
  },
  vi: {
    translation: translationVI
  }
} as const

i18n.use(initReactI18next).init({
  lng: 'en',
  debug: true,
  resources
})
