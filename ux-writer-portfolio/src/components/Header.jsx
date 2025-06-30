import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-slate-900">Priscilla Scurupa</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              Projetos
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              Contato
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 hover:text-slate-900"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-slate-200">
              <button 
                onClick={() => scrollToSection('hero')}
                className="block px-3 py-2 text-slate-600 hover:text-blue-600 transition-colors w-full text-left"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-slate-600 hover:text-blue-600 transition-colors w-full text-left"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="block px-3 py-2 text-slate-600 hover:text-blue-600 transition-colors w-full text-left"
              >
                Projetos
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-slate-600 hover:text-blue-600 transition-colors w-full text-left"
              >
                Contato
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

