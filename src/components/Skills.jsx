import { PenTool, Search, Users, Zap, FileText, Layers } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'UX Writing',
      icon: <PenTool className="h-6 w-6" />,
      skills: ['Microcopy', 'Voice & Tone', 'Content Strategy', 'Error Messages', 'CTAs', 'Onboarding Flows']
    },
    {
      title: 'Research',
      icon: <Search className="h-6 w-6" />,
      skills: ['User Interviews', 'Content Testing', 'A/B Testing', 'Analytics', 'Personas', 'Journey Mapping']
    },
    {
      title: 'Collaboration',
      icon: <Users className="h-6 w-6" />,
      skills: ['Design Systems', 'Cross-functional Teams', 'Stakeholder Management', 'Workshops', 'Presentations']
    },
    {
      title: 'Tools',
      icon: <Zap className="h-6 w-6" />,
      skills: ['Figma', 'Sketch', 'Notion', 'Miro', 'Google Analytics', 'Hotjar']
    }
  ]

  const processes = [
    {
      step: '01',
      title: 'Research & Discovery',
      description: 'Entendo o usuário, o negócio e o contexto através de pesquisas e análise de dados.',
      icon: <Search className="h-8 w-8" />
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'Defino a estratégia de conteúdo, tom de voz e arquitetura da informação.',
      icon: <FileText className="h-8 w-8" />
    },
    {
      step: '03',
      title: 'Creation & Testing',
      description: 'Crio o conteúdo, prototipo e testo com usuários reais para validar as soluções.',
      icon: <Layers className="h-8 w-8" />
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Skills Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Habilidades & Ferramentas
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Um conjunto abrangente de habilidades para criar experiências de conteúdo 
            que realmente funcionam.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <div key={index} className="p-6 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 text-blue-600 rounded-lg mr-3">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-slate-600 text-sm">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Meu Processo
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Uma abordagem estruturada que garante resultados consistentes e 
            soluções centradas no usuário.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processes.map((process, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < processes.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-slate-200 z-0"></div>
              )}
              
              <div className="relative z-10 text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4">
                  {process.icon}
                </div>
                <div className="text-sm font-bold text-blue-600 mb-2">{process.step}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{process.title}</h3>
                <p className="text-slate-600">{process.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

