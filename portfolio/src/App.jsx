import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import LanguageToggle from './components/LanguageToggle'
import ThemeToggle from './components/ThemeToggle'

function App() {
  const [theme, setTheme] = useState('dark')
  const [isAnimating, setIsAnimating] = useState(false)
  const [pendingTheme, setPendingTheme] = useState(null)

  const handleThemeChange = (newTheme) => {
    setIsAnimating(true)
    setPendingTheme(newTheme)
  }

  useEffect(() => {
    if (pendingTheme && !isAnimating) {
      setTheme(pendingTheme)
      setPendingTheme(null)
    }
  }, [isAnimating, pendingTheme])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document.documentElement.style.colorScheme = theme
  }, [theme])

  const onAnimationComplete = () => {
    setTheme(pendingTheme)
    setTimeout(() => {
      setIsAnimating(false)
      setPendingTheme(null)
    }, 50)
  }

  const generateHexagons = () => {
    const hexagons = []
    const rows = 8
    const cols = 12
    const stagger = 0.02

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        hexagons.push({
          id: `${row}-${col}`,
          delay: (row + col) * stagger,
          x: col * 100 + (row % 2) * 50,
          y: row * 86
        })
      }
    }
    return hexagons
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background with gradient */}
      <div className={`fixed inset-0 w-full h-full transition-all duration-300 ${
        theme === 'dark' 
          ? 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900' 
          : 'bg-gradient-to-b from-blue-50 via-white to-blue-50'
      }`} />

      {/* Theme change animation overlay */}
      <AnimatePresence>
        {isAnimating && (
          <motion.div
            initial={{ 
              clipPath: 'circle(0% at 85% 7%)',
              opacity: 0.7
            }}
            animate={{ 
              clipPath: 'circle(170% at 85% 7%)',
              opacity: 1,
            }}
            exit={{ 
              clipPath: 'circle(0% at 85% 7%)',
              opacity: 0.7,
            }}
            transition={{ 
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1]
            }}
            onAnimationComplete={onAnimationComplete}
            className={`fixed inset-0 z-[45] ${pendingTheme === 'dark'
              ? 'bg-[radial-gradient(circle_at_top_right,#1f2937_0%,#111827_50%,#030712_100%)]'
              : 'bg-[radial-gradient(circle_at_top_right,#fff_0%,#f3f4f6_50%,#e5e7eb_100%)]'}`}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.3, times: [0, 0.7, 1] }}
              className={`absolute top-[7%] right-[15%] w-4 h-4 rounded-full ${
                pendingTheme === 'dark' 
                  ? 'bg-gray-800 shadow-lg shadow-gray-900/50' 
                  : 'bg-white shadow-lg shadow-gray-200/50'
              }`}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content wrapper */}
      <div className="relative min-h-screen flex flex-col overflow-x-hidden">
        {/* Navbar */}
        <div className={`fixed top-0 w-full backdrop-blur-md z-50 transition-all duration-500 ${
          theme === 'dark' 
            ? 'bg-gray-900/80' 
            : 'bg-white/90 border-b border-gray-200'
        }`}>
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <motion.a 
              href="#"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
            >
              wermis
            </motion.a>
            <nav className="flex items-center gap-6">
              <a href="#projects" className={`transition-colors ${theme === 'dark' ? 'hover:text-purple-400' : 'text-gray-700 hover:text-purple-600'}`}>Projects</a>
              <a href="#skills" className={`transition-colors ${theme === 'dark' ? 'hover:text-purple-400' : 'text-gray-700 hover:text-purple-600'}`}>Skills</a>
              <a href="#contact" className={`transition-colors ${theme === 'dark' ? 'hover:text-purple-400' : 'text-gray-700 hover:text-purple-600'}`}>Contact</a>
              <div className="flex gap-2">
                <LanguageToggle />
                <ThemeToggle theme={theme} setTheme={handleThemeChange} />
              </div>
            </nav>
          </div>
        </div>
        
        {/* Main content */}
        <main className={`flex-grow pt-20 ${theme === 'dark' ? '' : 'text-gray-800'}`}>
          <Hero />
          <Projects />
          <Skills />
          <Contact />
        </main>

        {/* Footer */}
        <footer className={`w-full py-8 text-center transition-colors duration-500 ${
          theme === 'dark' 
            ? 'bg-gray-900/80 text-gray-400' 
            : 'bg-white/90 text-gray-600 border-t border-gray-200'
        }`}>
          <p>© 2024 wermis. Built with React & Tailwind CSS</p>
        </footer>
      </div>
    </div>
  )
}

export default App
