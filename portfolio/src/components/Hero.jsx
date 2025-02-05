import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const Hero = () => {
  const { t } = useTranslation()

  return (
    <section className="min-h-screen w-full flex items-center justify-center relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 w-full h-full">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-screen filter blur-xl opacity-30"
            animate={{
              x: [0, 100, 0],
              y: [0, 100, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              delay: i * 2,
            }}
            style={{
              width: '40vh',
              height: '40vh',
              background: `radial-gradient(circle, ${
                ['#4F46E5', '#10B981', '#F59E0B', '#EC4899', '#8B5CF6'][i]
              } 0%, transparent 70%)`,
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto px-4"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1"
          >
            <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
              <span className="text-4xl">👨‍💻</span>
            </div>
          </motion.div>

          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            {t('hero.title')}
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            {t('hero.subtitle')}
          </p>

          <motion.div 
            className="flex gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <a
              href="#projects"
              className="btn btn-lg bg-gradient-to-r from-purple-500 to-pink-500 border-none text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all"
            >
              {t('hero.viewProjects')}
            </a>
            <a
              href="#contact"
              className="btn btn-lg btn-outline text-purple-400 hover:bg-purple-500 hover:text-white transition-all"
            >
              {t('hero.contact')}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-16 flex justify-center gap-8"
          >
            <div className="text-center">
              <h3 className="text-3xl font-bold text-purple-400">3+</h3>
              <p className="text-gray-400">Years Experience</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-pink-400">20+</h3>
              <p className="text-gray-400">Projects</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-purple-400">100%</h3>
              <p className="text-gray-400">Satisfaction</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero 