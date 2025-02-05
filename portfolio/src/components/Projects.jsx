import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const Projects = () => {
  const { t } = useTranslation()

  const projects = [
    {
      id: 1,
      name: "Watchiru",
      description: "Modern anime streaming platform with a sleek dark theme, responsive video player, and advanced search. Built with HTML5, CSS3, and Vanilla JS.",
      language: "JavaScript",
      tech: ["HTML5", "CSS3", "JavaScript"],
      link: "https://github.com/wermisek/Watchiru",
      demo: "watchiru.vercel.app",
      icon: "🎬"
    },
    {
      id: 2,
      name: "HelpDeskFlutter",
      description: "Windows help desk app for managing school IT issues. Features user-friendly interface for teachers and admin panel for ticket management.",
      language: "Dart",
      tech: ["Flutter", "Dart"],
      link: "https://github.com/wermisek/HelpDeskFlutter",
      icon: "🎫"
    },
    {
      id: 3,
      name: "SpotifyCloneFlutter",
      description: "A Spotify clone built with Flutter featuring music playback, playlists, and a sleek UI matching Spotify's design language.",
      language: "Dart",
      tech: ["Flutter", "Dart"],
      link: "https://github.com/wermisek/SpotifyCloneFlutter",
      icon: "🎵"
    },
    {
      id: 4,
      name: "PythonDrawing",
      description: "Creative drawing application made with Python. Features custom brushes, layers, and real-time effects.",
      language: "Python",
      tech: ["Python", "Tkinter"],
      link: "https://github.com/wermisek/PythonDrawing",
      icon: "🎨"
    },
    {
      id: 5,
      name: "StocksPredictor",
      description: "ML-powered stock market prediction tool using Python and TensorFlow for trend analysis and price forecasting.",
      language: "Python",
      tech: ["Python", "TensorFlow", "Pandas"],
      link: "https://github.com/wermisek/StocksPredictor",
      icon: "📈"
    },
    {
      id: 6,
      name: "Brainrodle",
      description: "Brain-teasing puzzle game with daily challenges. Think Wordle meets riddles with a twist.",
      language: "JavaScript",
      tech: ["React", "Node.js"],
      link: "https://github.com/wermisek/Brainrodle",
      icon: "🧩"
    }
  ]

  return (
    <section id="projects" className="py-32">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          {t('projects.title')}
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Here's what I've been cooking up 🚀
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="card bg-gray-800/50 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300"
          >
            <div className="card-body">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="card-title text-xl font-bold text-purple-400 mb-2 flex items-center gap-2">
                    <span>{project.icon}</span>
                    {project.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="px-3 py-1 text-sm rounded-full bg-purple-500/20 text-purple-400">
                  {project.language}
                </span>
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-2 py-1 text-xs rounded-full bg-gray-700/50 text-gray-400">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="card-actions justify-end">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm bg-gradient-to-r from-purple-500 to-pink-500 border-none text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all"
                >
                  {t('projects.viewProject')}
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects 