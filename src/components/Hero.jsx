import { ArrowRight, Download } from 'lucide-react'
import heroImage from '../assets/hero-illustration.jpg'

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="pt-16 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                UX Writer &
                <span className="text-blue-600 block">Content Designer</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Transformo ideias complexas em experiências digitais claras e envolventes. 
                Com mais de 14 anos de experiência, especializo-me em criar conteúdo que 
                conecta usuários aos produtos de forma natural e eficiente.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToProjects}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors group"
              >
                Ver Projetos
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={scrollToContact}
                className="inline-flex items-center px-6 py-3 border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors"
              >
                <Download className="mr-2 h-5 w-5" />
                Entrar em Contato
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-200">
              <div>
                <div className="text-2xl font-bold text-slate-900">14+</div>
                <div className="text-sm text-slate-600">Anos de Experiência</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">100+</div>
                <div className="text-sm text-slate-600">Projetos Concluídos</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">20+</div>
                <div className="text-sm text-slate-600">Empresas Atendidas</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="UX Writing Illustration" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

