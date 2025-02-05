import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      hero: {
        title: 'Hey, I\'m Wiktor',
        subtitle: 'I build cool stuff for the web. Sometimes it even works!',
        viewProjects: 'See My Work',
        contact: 'Say Hello'
      },
      projects: {
        title: 'My Projects',
        viewProject: 'Check it out'
      },
      skills: {
        title: 'Things I Know'
      },
      contact: {
        title: 'Get In Touch',
        name: 'Your Name',
        email: 'Your Email',
        message: 'Your Message',
        send: 'Send It!',
        or: 'OR'
      }
    }
  },
  pl: {
    translation: {
      hero: {
        title: 'Siema, jestem Wiktor',
        subtitle: 'Tworzę fajne rzeczy w sieci. Czasami nawet działają!',
        viewProjects: 'Zobacz Projekty',
        contact: 'Napisz'
      },
      projects: {
        title: 'Moje Projekty',
        viewProject: 'Zobacz'
      },
      skills: {
        title: 'Co Potrafię'
      },
      contact: {
        title: 'Napisz Do Mnie',
        name: 'Twoje Imię',
        email: 'Twój Email',
        message: 'Twoja Wiadomość',
        send: 'Wyślij!',
        or: 'ALBO'
      }
    }
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n 