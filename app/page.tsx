'use client'

import { motion, Transition, TargetAndTransition } from 'framer-motion'
import { Github, Instagram, Twitter, Twitch, Youtube, MessageCircle, ArrowDown, Sparkles } from 'lucide-react'
import { ProjectCard } from '@/components/ProjectCard'
import { Badge } from '@/components/Badge'
import { SKILLS, PROJECTS } from '@/lib/data'

// --- TIPO AÑADIDO ---
// Definimos un tipo para nuestras animaciones para que TypeScript esté contento
type MotionProps = {
  whileHover: TargetAndTransition;
  transition: Transition;
}

export default function HomePage() {
  const sectionAnimation = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6 },
  }

  // --- SOLUCIÓN: Añadimos el tipo a la constante ---
  const iconAnimation: MotionProps = {
    whileHover: { y: -3, scale: 1.1 },
    transition: { type: "spring", stiffness: 300 },
  }
  
  // Añadimos tipo también aquí para ser consistentes
  const cardAnimation: MotionProps = {
    whileHover: { y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" },
    transition: { type: 'spring', stiffness: 300 },
  }

  return (
    <main className="max-w-6xl mx-auto p-8 antialiased">
      {/* SECCIÓN HERO */}
      <motion.section
        id="hero"
        className="min-h-screen flex flex-col justify-center text-center items-center relative"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Elementos decorativos */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-orange-500/8 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
        </div>

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6"
          >
            <Badge variant="primary" size="lg" icon={Sparkles} animated className="mb-4">
              Desarrollador & Diseñador Digital
            </Badge>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-black font-mono bg-gradient-to-r from-[#0652DD] via-primary to-[#12CBC4] bg-clip-text text-transparent mb-6 tracking-tight">
            Hola, soy Jmgamer
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
            Creador de Software & Diseñador Digital en Formación. 
            <span className="text-[#0652DD] font-medium"> Apasionado por la innovación y el aprendizaje continuo.</span>
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <motion.a href="https://github.com/jmgamer1199" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub" {...iconAnimation}>
              <Github className="text-foreground hover:text-purple-500 transition-colors duration-200" size={24} />
            </motion.a>
            <motion.a href="https://www.instagram.com/jmgamer.1199/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram" {...iconAnimation}>
              <Instagram className="text-foreground hover:text-pink-500 transition-colors duration-200" size={24} />
            </motion.a>
            <motion.a href="https://twitter.com/jmgamer1199" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" title="X (Twitter)" {...iconAnimation}>
              <Twitter className="text-foreground hover:text-blue-500 transition-colors duration-200" size={24} />
            </motion.a>
            <motion.a href="https://www.twitch.tv/jmgamer1199" target="_blank" rel="noopener noreferrer" aria-label="Twitch" title="Twitch" {...iconAnimation}>
              <Twitch className="text-foreground hover:text-purple-600 transition-colors duration-200" size={24} />
            </motion.a>
            <motion.a href="https://www.youtube.com/@_JmGamer1199_" target="_blank" rel="noopener noreferrer" aria-label="YouTube" title="YouTube" {...iconAnimation}>
              <Youtube className="text-foreground hover:text-red-500 transition-colors duration-200" size={24} />
            </motion.a>
            <motion.a href="https://discord.gg/Ap8MPDX" target="_blank" rel="noopener noreferrer" aria-label="Discord" title="Discord" {...iconAnimation}>
              <MessageCircle className="text-foreground hover:text-indigo-500 transition-colors duration-200" size={24} />
            </motion.a>
          </div>

          {/* Botón de scroll */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="animate-bounce-gentle"
          >
            <a href="#about" className="inline-flex items-center gap-2 text-muted-foreground hover:text-[#1289A7] transition-colors duration-200">
              <ArrowDown size={20} />
              <span className="text-sm font-medium">Descubre más</span>
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* SECCIÓN SOBRE MÍ */}
      <motion.section id="about" className="py-24" {...sectionAnimation}>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-display mb-4 text-[#0652DD]">Sobre Mí</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#12CBC4] to-[#5758BB] mx-auto mb-6 rounded-full" />
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
            <p className="text-center text-muted-foreground text-lg leading-relaxed">
              Soy un entusiasta en el camino del desarrollo, con experiencia inicial en programación y modelado 3D. 
              A pesar de mi poca trayectoria, he estado inmerso en varios proyectos personales que demuestran mi pasión 
              y que, progresivamente, iré compartiendo. Mi determinación me impulsa a crecer y aportar en cada nuevo desafío.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Badge variant="primary" size="md" animated>Desarrollo Web</Badge>
              <Badge variant="success" size="md" animated>Modelado 3D</Badge>
              <Badge variant="warning" size="md" animated>Diseño Digital</Badge>
              <Badge variant="outline" size="md" animated>Creatividad</Badge>
            </div>
          </div>
        </div>
      </motion.section>

      {/* SECCIÓN DE HABILIDADES */}
      <motion.section id="skills" className="py-24" {...sectionAnimation}>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-display mb-4 text-[#0652DD]">Habilidades Técnicas</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tecnologías y herramientas que utilizo en mis proyectos
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(SKILLS).map(([category, skills], index) => (
            <motion.div 
              key={category} 
              className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-all duration-300"
              {...cardAnimation}
            >
              <h3 className="font-bold text-lg mb-4 text-[#1289A7] font-display">{category}</h3>
              <ul className="space-y-3">
                {skills.map((skill, skillIndex) => (
                  <li key={skill} className="flex items-center gap-2 text-muted-foreground">
                    <div className={`w-2 h-2 rounded-full ${
                      skillIndex % 3 === 0 ? 'bg-purple-500' : 
                      skillIndex % 3 === 1 ? 'bg-emerald-500' : 'bg-orange-500'
                    }`} />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* SECCIÓN DE PROYECTOS */}
      <motion.section id="projects" className="py-24" {...sectionAnimation}>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-display mb-4 text-[#0652DD]">Proyectos Destacados</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Una colección de mis trabajos más recientes y significativos
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </motion.section>

      {/* SECCIÓN DE CONTACTO (FOOTER) */}
      <motion.footer id="contact" className="text-center py-16" {...sectionAnimation}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-display text-center mb-4 text-[#0652DD]">Ponte en Contacto</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Siempre estoy abierto a discutir nuevos proyectos, ideas creativas o oportunidades para ser parte de tus visiones.
          </p>
          
          <motion.a
            href="mailto:jmdeveloper1199@gmail.com"
            className="inline-flex items-center gap-2 text-lg font-semibold text-cyan-500 hover:text-cyan-600 transition-colors duration-200 mb-8"
            whileHover={{ letterSpacing: "0.5px" }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <MessageCircle size={20} />
            jmdeveloper1199@gmail.com
          </motion.a>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <motion.a href="https://github.com/jmgamer1199" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub" {...iconAnimation}>
              <Github className="text-foreground hover:text-purple-500 transition-colors duration-200" size={24} />
            </motion.a>
            <motion.a href="https://www.instagram.com/jmgamer.1199/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram" {...iconAnimation}>
              <Instagram className="text-foreground hover:text-pink-500 transition-colors duration-200" size={24} />
            </motion.a>
            <motion.a href="https://twitter.com/jmgamer1199" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" title="X (Twitter)" {...iconAnimation}>
              <Twitter className="text-foreground hover:text-blue-500 transition-colors duration-200" size={24} />
            </motion.a>
            <motion.a href="https://www.twitch.tv/jmgamer1199" target="_blank" rel="noopener noreferrer" aria-label="Twitch" title="Twitch" {...iconAnimation}>
              <Twitch className="text-foreground hover:text-purple-600 transition-colors duration-200" size={24} />
            </motion.a>
            <motion.a href="https://www.youtube.com/@_JmGamer1199_" target="_blank" rel="noopener noreferrer" aria-label="YouTube" title="YouTube" {...iconAnimation}>
              <Youtube className="text-foreground hover:text-red-500 transition-colors duration-200" size={24} />
            </motion.a>
            <motion.a href="https://discord.gg/Ap8MPDX" target="_blank" rel="noopener noreferrer" aria-label="Discord" title="Discord" {...iconAnimation}>
              <MessageCircle className="text-foreground hover:text-indigo-500 transition-colors duration-200" size={24} />
            </motion.a>
          </div>
          
          <div className="border-t border-border pt-8">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Jmgamer1199. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </motion.footer>
    </main>
  )
}