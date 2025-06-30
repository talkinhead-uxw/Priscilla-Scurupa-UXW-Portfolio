import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Clock, Users, TrendingUp } from 'lucide-react'

const CaseStudy = () => {
  const { id } = useParams()

  // Dados dos case studies (em um projeto real, isso viria de uma API ou banco de dados)
  const caseStudies = {
    'fintech-app': {
      title: 'App de Fintech - Redesign do Onboarding',
      subtitle: 'Como simplificamos o processo de cadastro e aumentamos a conversão em 40%',
      category: 'Mobile App',
      duration: '3 meses',
      team: 'Product Manager, UX Designer, 2 Developers',
      role: 'UX Writer & Content Strategist',
      overview: 'O desafio era redesenhar completamente o fluxo de onboarding de um app de fintech, que apresentava alta taxa de abandono e baixa conversão. Através de uma abordagem centrada no usuário e foco em UX Writing, conseguimos transformar uma experiência frustrante em um processo fluido e confiável.',
      challenge: 'O app de fintech estava enfrentando uma taxa de abandono de 70% durante o processo de onboarding. Os usuários relatavam confusão sobre os passos necessários, desconfiança em relação à segurança dos dados e frustração com a linguagem técnica utilizada.',
      process: [
        {
          title: 'Research & Discovery',
          description: 'Realizamos entrevistas com 15 usuários que abandonaram o processo, analisamos heatmaps e gravações de sessão, e mapeamos a jornada atual identificando pontos de atrito.',
          insights: ['Linguagem muito técnica e formal', 'Falta de transparência sobre segurança', 'Muitos campos obrigatórios de uma vez', 'Ausência de feedback de progresso']
        },
        {
          title: 'Content Strategy',
          description: 'Desenvolvemos uma nova estratégia de conteúdo baseada em transparência, simplicidade e construção gradual de confiança.',
          insights: ['Tom conversacional e acolhedor', 'Explicações claras sobre segurança', 'Divisão em etapas menores', 'Feedback constante de progresso']
        },
        {
          title: 'Prototyping & Testing',
          description: 'Criamos protótipos de alta fidelidade com o novo conteúdo e testamos com 20 usuários em sessões moderadas.',
          insights: ['95% dos usuários completaram o fluxo', 'Redução de 60% no tempo de conclusão', 'Aumento significativo na confiança percebida']
        }
      ],
      solution: 'Redesenhamos completamente o fluxo de onboarding com foco em UX Writing. Dividimos o processo em 4 etapas claras, criamos microcopy que transmite segurança e confiança, e implementamos um sistema de feedback de progresso que mantém o usuário engajado.',
      results: [
        { metric: 'Conversão', value: '+40%', description: 'Aumento na taxa de conclusão do onboarding' },
        { metric: 'Tempo de Conclusão', value: '-60%', description: 'Redução no tempo médio para completar o cadastro' },
        { metric: 'Satisfação', value: '4.8/5', description: 'Score de satisfação dos usuários' },
        { metric: 'Suporte', value: '-45%', description: 'Redução em tickets de suporte relacionados ao onboarding' }
      ],
      learnings: [
        'A transparência sobre segurança é fundamental em produtos financeiros',
        'Dividir processos complexos em etapas menores reduz a ansiedade do usuário',
        'Feedback de progresso mantém o usuário motivado a continuar',
        'Tom de voz acolhedor pode compensar a natureza formal de produtos financeiros'
      ]
    }
  }

  const caseStudy = caseStudies[id]

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Case Study não encontrado</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-700">
            Voltar para o início
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-16 bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Voltar para Projetos
          </Link>
          
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
              {caseStudy.category}
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
              {caseStudy.title}
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              {caseStudy.subtitle}
            </p>
            
            {/* Project Info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-slate-400" />
                <div>
                  <div className="text-sm text-slate-500">Duração</div>
                  <div className="font-medium text-slate-900">{caseStudy.duration}</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="h-5 w-5 text-slate-400" />
                <div>
                  <div className="text-sm text-slate-500">Equipe</div>
                  <div className="font-medium text-slate-900">{caseStudy.team}</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <TrendingUp className="h-5 w-5 text-slate-400" />
                <div>
                  <div className="text-sm text-slate-500">Meu Papel</div>
                  <div className="font-medium text-slate-900">{caseStudy.role}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Overview */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Visão Geral</h2>
          <p className="text-lg text-slate-600 leading-relaxed">{caseStudy.overview}</p>
        </section>

        {/* Challenge */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">O Desafio</h2>
          <p className="text-lg text-slate-600 leading-relaxed">{caseStudy.challenge}</p>
        </section>

        {/* Process */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Processo</h2>
          <div className="space-y-8">
            {caseStudy.process.map((step, index) => (
              <div key={index} className="border-l-4 border-blue-200 pl-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 mb-4">{step.description}</p>
                <div className="bg-slate-50 rounded-lg p-4">
                  <h4 className="font-medium text-slate-900 mb-2">Principais Insights:</h4>
                  <ul className="space-y-1">
                    {step.insights.map((insight, i) => (
                      <li key={i} className="text-slate-600 text-sm">• {insight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Solution */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">A Solução</h2>
          <p className="text-lg text-slate-600 leading-relaxed">{caseStudy.solution}</p>
        </section>

        {/* Results */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Resultados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {caseStudy.results.map((result, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{result.value}</div>
                <div className="font-medium text-slate-900 mb-1">{result.metric}</div>
                <div className="text-sm text-slate-600">{result.description}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Learnings */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Aprendizados</h2>
          <div className="space-y-4">
            {caseStudy.learnings.map((learning, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-slate-600">{learning}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-slate-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Gostou deste projeto?
          </h3>
          <p className="text-slate-600 mb-6">
            Vamos conversar sobre como posso ajudar no seu próximo desafio de UX Writing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/#contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Entrar em Contato
            </Link>
            <Link 
              to="/#projects"
              className="inline-flex items-center px-6 py-3 border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors"
            >
              Ver Outros Projetos
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default CaseStudy

