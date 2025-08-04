'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Github, ExternalLink, FolderDown, ChevronDown } from 'lucide-react'
import { Badge } from './Badge'

// Tipos
type DownloadLink = {
  label: string;
  url: string;
}

type Tag = {
  name: string;
  color: string;
}

type ProjectCardProps = {
  title: string
  description: string
  tags: Tag[]
  imageUrl?: string
  liveUrl?: string
  repoUrl?: string
  downloads?: DownloadLink[]
  cardColor?: string
  titleColor?: string
  downloadColor?: string
  demoColor?: string
  codeColor?: string
}

export function ProjectCard({ 
  title, 
  description, 
  tags, 
  imageUrl, 
  liveUrl, 
  repoUrl, 
  downloads,
  cardColor,
  titleColor,
  downloadColor,
  demoColor,
  codeColor
}: ProjectCardProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const linkAnimation = {
    whileHover: { y: -2, scale: 1.05 },
    whileTap: { scale: 0.95 },
  }

  // Estilos personalizados para la tarjeta
  const cardStyles = cardColor ? {
    '--card-hover-border': cardColor,
    '--card-hover-shadow': `${cardColor}20`,
  } as React.CSSProperties : {}

  const titleStyles = titleColor ? {
    color: titleColor,
  } as React.CSSProperties : {}

  // Estilos para los botones de descarga
  const downloadStyles = downloadColor ? {
    '--download-hover-color': downloadColor,
  } as React.CSSProperties : {}

  // Estilos para los botones de demo y código
  const demoStyles = demoColor ? {
    '--demo-hover-color': demoColor,
  } as React.CSSProperties : {}

  const codeStyles = codeColor ? {
    '--code-hover-color': codeColor,
  } as React.CSSProperties : {}

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        y: -8, 
        boxShadow: cardColor ? `0px 20px 40px ${cardColor}20` : "0px 20px 40px rgba(0,0,0,0.1)"
      }}
      className="group flex flex-col h-full bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
      style={{
        ...cardStyles,
        ...downloadStyles, // Añadir los estilos de descarga
        ...demoStyles, // Añadir los estilos de demo
        ...codeStyles, // Añadir los estilos de código
        '--tw-border-opacity': cardColor ? '0.3' : undefined,
        borderColor: cardColor ? `${cardColor}40` : undefined,
      } as React.CSSProperties}
    >
      {/* Sección de la imagen con overlay */}
      {imageUrl && (
        <div className="w-full h-48 relative overflow-hidden">
          <Image src={imageUrl} alt={`Vista previa del proyecto ${title}`} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex-grow">
          <h3 
            className="text-xl font-bold mb-3 text-foreground transition-colors duration-200 group-hover:text-opacity-80"
            style={titleStyles}
          >
            {title}
          </h3>
          <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
          
          {/* Tags mejorados con Badge */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, tagIndex) => (
              <Badge 
                key={tag.name} 
                variant="outline"
                size="sm" 
                animated
                customColor={tag.color}
              >
                {tag.name}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="mt-auto flex items-center gap-4 pt-4 border-t border-border/50">
          {/* Enlace de Demo */}
          {liveUrl && (
            <motion.a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-[var(--demo-hover-color)] transition-colors duration-200" 
              title="Ver demo en vivo" 
              {...linkAnimation}
            >
              <ExternalLink size={16} />
              Demo
            </motion.a>
          )}

          {/* Enlace de Código */}
          {repoUrl && (
            <motion.a 
              href={repoUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-[var(--code-hover-color)] transition-colors duration-200" 
              title="Ver repositorio en GitHub" 
              {...linkAnimation}
            >
              <Github size={16} />
              Código
            </motion.a>
          )}
          
          {/* Lógica de descarga mejorada */}
          {downloads && downloads.length > 0 && (
            <>
              {downloads.length === 1 ? (
                <motion.a 
                  href={downloads[0].url} 
                  download 
                  className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-[var(--download-hover-color)] transition-colors duration-200" 
                  title={downloads[0].label} 
                  {...linkAnimation}
                >
                  <FolderDown size={16} />
                  {downloads[0].label}
                </motion.a>
              ) : (
                <div className="relative">
                  <motion.button 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)} 
                    className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-[var(--download-hover-color)] transition-colors duration-200" 
                    {...linkAnimation}
                  >
                    <FolderDown size={16} />
                    Descargar
                    <ChevronDown size={16} className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </motion.button>
                  {isDropdownOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10, scale: 0.95 }} 
                      animate={{ opacity: 1, y: 0, scale: 1 }} 
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      className="absolute bottom-full mb-2 w-max rounded-lg border border-border/20 shadow-xl z-10 overflow-hidden bg-card/95 backdrop-blur-sm"
                    >
                      <ul className="py-1">
                        {downloads.map((download) => (
                          <li key={download.label}>
                            <a 
                              href={download.url} 
                              download 
                              className="block px-4 py-2 text-sm text-foreground hover:text-[var(--download-hover-color)] transition-colors duration-200" 
                              onClick={() => setIsDropdownOpen(false)}
                            >
                              {download.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </motion.div>
  )
}