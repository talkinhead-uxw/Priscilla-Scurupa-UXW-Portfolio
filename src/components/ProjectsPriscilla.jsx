import { ArrowRight, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'

const Projects = () => {
  const projects = [
    {
      id: 'bradesco-seguros-onboarding',
      title: 'Bradesco Seguros - Onboarding Digital',
      description: 'Redesign completo do fluxo de contratação de seguros, simplificando linguagem técnica e reduzindo abandono.',
      category: 'Seguros',
      tags: ['UX Writing', 'Onboarding', 'Seguros'],
      image: '/api/placeholder/400/300',
      metrics: {
        conversion: '+35%',
        completion: '+40%',
        satisfaction: '4.7/5'
      }
    },
    {
      id: 'inter-chatbot',
      title: 'Inter - Chatbot Inteligente',
      description: 'Criação de conteúdo conversacional para chatbot bancário, melhorando atendimento e reduzindo tickets.',
      category: 'Fintech',
      tags: ['Design Conversacional', 'Chatbot', 'Banking'],
      image: '/api/placeholder/400/300',
      metrics: {
        resolution: '+50%',
        satisfaction: '+30%',
        tickets: '-45%'
      }
    },
    {
      id: 'cupola-content-strategy',
      title: 'Agência CUPOLA - Estratégia de Conteúdo',
      description: 'Desenvolvimento de estratégia de conteúdo multiplataforma para diversos clientes da agência.',
      category: 'Agência',
      tags: ['Content Strategy', 'SEO', 'Inbound Marketing'],
      image: '/api/placeholder/400/300',
      metrics: {
        traffic: '+60%',
        leads: '+45%',
        engagement: '+25%'
      }
    }
  ]

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Projetos em Destaque
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Alguns dos projetos que mais me orgulho, onde pude aplicar UX Writing 
            e estratégia de conteúdo para resolver problemas reais e gerar impacto mensurável.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-indigo-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-slate-400 text-sm">Imagem do Projeto</div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 text-slate-700 text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 mb-4 p-3 bg-slate-50 rounded-lg">
                  {Object.entries(project.metrics).map(([key, value], index) => (
                    <div key={index} className="text-center">
                      <div className="text-sm font-semibold text-slate-900">{value}</div>
                      <div className="text-xs text-slate-500 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link 
                  to={`/case-study/${project.id}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group"
                >
                  Ver Case Study
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-slate-600 mb-6">
            Quer ver mais projetos ou discutir uma colaboração?
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Vamos Conversar
            <ExternalLink className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects

