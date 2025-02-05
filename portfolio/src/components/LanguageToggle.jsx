import { useTranslation } from 'react-i18next'

const LanguageToggle = () => {
  const { i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'pl' : 'en'
    i18n.changeLanguage(newLang)
  }

  return (
    <button
      onClick={toggleLanguage}
      className="btn btn-ghost btn-circle"
      aria-label="Toggle language"
    >
      {i18n.language === 'en' ? '🇬🇧' : '🇵🇱'}
    </button>
  )
}

export default LanguageToggle 