import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import translations from '@/public/locales/translations.json'

i18next
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translations.en },
      uz: { translation: translations.uz },
      ru: { translation: translations.ru },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18next
