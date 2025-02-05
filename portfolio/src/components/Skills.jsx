import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const Skills = () => {
  const { t } = useTranslation()
  
  const skills = [
    { name: 'JavaScript', icon: '⚡', level: 90, desc: 'My trusty sidekick' },
    { name: 'React', icon: '⚛️', level: 85, desc: 'Building UIs like LEGO' },
    { name: 'Node.js', icon: '🚀', level: 80, desc: 'Server-side shenanigans' },
    { name: 'TypeScript', icon: '📘', level: 75, desc: 'JavaScript with a seatbelt' },
    { name: 'HTML5', icon: '🌐', level: 95, desc: 'The backbone of the web' },
    { name: 'CSS3', icon: '🎨', level: 90, desc: 'Making things pretty' },
    { name: 'Tailwind', icon: '💨', level: 85, desc: 'Styling at lightspeed' },
    { name: 'Git', icon: '📦', level: 80, desc: 'Time travel for code' },
    { name: 'MongoDB', icon: '🍃', level: 75, desc: 'NoSQL? No problem!' },
    { name: 'SQL', icon: '📊', level: 70, desc: 'Data wrangling' },
    { name: 'Python', icon: '🐍', level: 75, desc: 'When in doubt, import this' },
    { name: 'Docker', icon: '🐳', level: 70, desc: 'Container captain' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="skills" className="py-32">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          {t('skills.title')}
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          My digital toolbox - each tool has its own superpower! 🛠️
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-3xl">{skill.icon}</span>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-purple-400">{skill.name}</h3>
                <p className="text-sm text-gray-400 mt-1">{skill.desc}</p>
                <div className="w-full bg-gray-700 rounded-full h-2.5 mt-2">
                  <motion.div
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-center mt-16"
      >
        <p className="text-gray-400">
          And yes, I'm still collecting more tools! 🎮
        </p>
      </motion.div>
    </section>
  )
}

export default Skills 