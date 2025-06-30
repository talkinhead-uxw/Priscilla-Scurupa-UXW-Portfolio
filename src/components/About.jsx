import { CheckCircle, Users, Target, Lightbulb } from 'lucide-react'
import contentDesignImage from '../assets/content-design.jpeg'

const About = () => {
  const skills = [
    'UX Writing & Microcopy',
    'Design Conversacional',
    'SEO & Content Strategy',
    'Inbound Marketing',
    'Guias de Tom e Voz',
    'Pesquisa com Usuários',
    'Chatbots & Automação',
    'Audiovisual & Roteiros'
  ]

  const values = [
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Storytelling Envolvente',
      description: 'Acredito que a comunicação eficaz está na habilidade de contar histórias que conectam pessoas.'
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Simplificação Inteligente',
      description: 'Especializo-me em simplificar a complexidade de produtos e serviços para melhor compreensão.'
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: 'Inovação Digital',
      description: 'Entusiasta na contribuição para projetos inovadores e experiências digitais que conectam pessoas.'
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img 
              src={contentDesignImage} 
              alt="Content Design Process" 
              className="w-full h-auto rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-2xl"></div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Sobre Mim
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Sou formada em jornalismo, estudei cinema e gestão cultural, e conto com uma 
                trajetória de mais de 14 anos de experiência profissional. Já atuei em rádios, 
                emissoras de TV, editoras, assessorias de imprensa, agências de publicidade e 
                design, seguradoras e bancos digitais.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Como profissional, acredito que a chave para uma comunicação eficaz está na 
                habilidade de contar histórias de maneira envolvente, e na capacidade de 
                simplificar a complexidade de produtos e serviços. Sou entusiasta na contribuição 
                para o sucesso de projetos inovadores e criação de experiências digitais que 
                conectem pessoas.
              </p>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Principais Habilidades</h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-12">
            Meus Valores
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-lg mb-4">
                  {value.icon}
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">{value.title}</h4>
                <p className="text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

