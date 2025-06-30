import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Clock, Users, TrendingUp } from 'lucide-react'

const CaseStudy = () => {
  const { id } = useParams()

  // Case studies baseados na experiência da Priscilla
  const caseStudies = {
    'bradesco-seguros-onboarding': {
      title: 'Bradesco Seguros - Redesign do Onboarding Digital',
      subtitle: 'Como simplificamos a contratação de seguros e aumentamos a conversão em 35%',
      category: 'Seguros',
      duration: '4 meses',
      team: 'Product Manager, UX Designer, 2 Developers, UX Researcher',
      role: 'UX Writer Pleno',
      overview: 'O desafio era redesenhar o fluxo de contratação de seguros do Bradesco, que apresentava alta taxa de abandono devido à linguagem técnica complexa e processos burocráticos. Através de uma abordagem centrada no usuário e foco em UX Writing, conseguimos transformar uma experiência frustrante em um processo claro e confiável.',
      challenge: 'O processo de contratação de seguros apresentava 65% de abandono. Os usuários relatavam dificuldade para entender termos técnicos, desconfiança sobre coberturas e frustração com a quantidade de informações apresentadas de uma só vez.',
      process: [
        {
          title: 'Research & Discovery',
          description: 'Realizamos entrevistas com 20 usuários que abandonaram o processo, analisamos dados de analytics e mapeamos a jornada atual identificando pontos críticos de abandono.',
          insights: ['Linguagem muito técnica e jurídica', 'Falta de clareza sobre benefícios', 'Processo muito longo e cansativo', 'Desconfiança sobre termos e condições']
        },
        {
          title: 'Content Strategy',
          description: 'Desenvolvemos uma nova estratégia de conteúdo baseada em transparência, linguagem humanizada e educação progressiva sobre seguros.',
          insights: ['Tom conversacional e educativo', 'Explicações claras sobre coberturas', 'Divisão em etapas menores', 'Glossário de termos técnicos']
        },
        {
          title: 'Testing & Iteration',
          description: 'Criamos protótipos com o novo conteúdo e testamos com 25 usuários em sessões moderadas, iterando com base no feedback.',
          insights: ['90% dos usuários completaram o fluxo', 'Redução de 50% no tempo de conclusão', 'Aumento significativo na compreensão dos produtos']
        }
      ],
      solution: 'Redesenhamos completamente o fluxo de contratação com foco em UX Writing educativo. Criamos um glossário interativo, dividimos o processo em 5 etapas claras, e implementamos microcopy que educa o usuário sobre seguros enquanto ele navega.',
      results: [
        { metric: 'Conversão', value: '+35%', description: 'Aumento na taxa de conclusão da contratação' },
        { metric: 'Tempo de Conclusão', value: '-50%', description: 'Redução no tempo médio para contratar' },
        { metric: 'Satisfação', value: '4.7/5', description: 'Score de satisfação dos usuários' },
        { metric: 'Suporte', value: '-40%', description: 'Redução em dúvidas sobre produtos' }
      ],
      learnings: [
        'Educação progressiva é fundamental em produtos financeiros complexos',
        'Glossários interativos reduzem significativamente a ansiedade do usuário',
        'Dividir processos longos em etapas menores melhora a percepção de progresso',
        'Linguagem humanizada pode tornar produtos técnicos mais acessíveis'
      ]
    },
    'inter-chatbot': {
      title: 'Inter - Chatbot Inteligente para Atendimento',
      subtitle: 'Como criamos um assistente conversacional que resolveu 50% mais problemas',
      category: 'Fintech',
      duration: '6 meses',
      team: 'Product Manager, Conversational Designer, Data Scientist, 3 Developers',
      role: 'UX Writer & Design Conversacional',
      overview: 'O Inter precisava melhorar seu atendimento digital e reduzir a sobrecarga no suporte humano. Desenvolvemos um chatbot inteligente com foco em design conversacional, criando fluxos que realmente ajudam os usuários a resolver seus problemas de forma autônoma.',
      challenge: 'O atendimento via chat apresentava alta demanda e baixa resolução. 70% dos tickets eram sobre dúvidas básicas que poderiam ser resolvidas automaticamente. Os usuários ficavam frustrados com respostas genéricas e falta de personalização.',
      process: [
        {
          title: 'Análise de Dados',
          description: 'Analisamos 10.000 conversas de atendimento para identificar padrões, dúvidas mais frequentes e pontos de frustração dos usuários.',
          insights: ['80% das dúvidas eram sobre 10 tópicos principais', 'Usuários preferem respostas diretas e acionáveis', 'Linguagem formal criava distanciamento', 'Falta de personalização reduzia confiança']
        },
        {
          title: 'Design Conversacional',
          description: 'Criamos fluxos conversacionais naturais, com personalidade da marca Inter e foco na resolução efetiva de problemas.',
          insights: ['Tom amigável e próximo', 'Respostas contextualizadas', 'Opções claras de navegação', 'Escalação inteligente para humanos']
        },
        {
          title: 'Testes e Otimização',
          description: 'Implementamos gradualmente com grupos de teste, coletando feedback e otimizando os fluxos com base em dados reais de uso.',
          insights: ['Taxa de resolução aumentou para 75%', 'Satisfação subiu para 4.5/5', 'Tempo médio de atendimento reduziu 60%']
        }
      ],
      solution: 'Desenvolvemos um chatbot com personalidade única, capaz de entender contexto e fornecer respostas personalizadas. Criamos mais de 200 fluxos conversacionais cobrindo desde dúvidas básicas até processos complexos como contestação de cartão.',
      results: [
        { metric: 'Resolução', value: '+50%', description: 'Aumento na taxa de resolução automática' },
        { metric: 'Satisfação', value: '+30%', description: 'Melhoria na satisfação do atendimento' },
        { metric: 'Tickets', value: '-45%', description: 'Redução em tickets para atendimento humano' },
        { metric: 'Tempo', value: '-60%', description: 'Redução no tempo médio de atendimento' }
      ],
      learnings: [
        'Personalidade da marca no chatbot cria conexão emocional',
        'Análise de dados é fundamental para identificar padrões de comportamento',
        'Escalação inteligente mantém a qualidade do atendimento',
        'Testes graduais permitem otimização contínua sem impactar a experiência'
      ]
    },
    'cupola-content-strategy': {
      title: 'Agência CUPOLA - Estratégia de Conteúdo Multiplataforma',
      subtitle: 'Como desenvolvemos estratégias que aumentaram o tráfego orgânico em 60%',
      category: 'Agência',
      duration: '12 meses',
      team: 'Coordenadora de Conteúdo, SEO Specialist, Social Media, Designers',
      role: 'Coordenadora de Conteúdo & Redatora Sênior',
      overview: 'Na CUPOLA, liderei a criação de estratégias de conteúdo para diversos clientes, desde startups até grandes empresas. O desafio era criar conteúdo que não apenas engajasse, mas que também gerasse resultados mensuráveis de negócio.',
      challenge: 'Os clientes da agência enfrentavam dificuldades para se destacar em mercados competitivos. O conteúdo produzido não estava alinhado com objetivos de negócio e não gerava leads qualificados. Era necessário uma abordagem mais estratégica e orientada a dados.',
      process: [
        {
          title: 'Diagnóstico e Planejamento',
          description: 'Para cada cliente, realizamos auditoria completa de conteúdo, análise da concorrência e definição de personas e jornada do cliente.',
          insights: ['Falta de alinhamento entre conteúdo e funil de vendas', 'Oportunidades não exploradas em SEO', 'Necessidade de diversificação de formatos', 'Importância de métricas específicas por cliente']
        },
        {
          title: 'Execução Estratégica',
          description: 'Implementamos estratégias personalizadas incluindo calendário editorial, otimização SEO, automação de marketing e produção de conteúdo multiplataforma.',
          insights: ['Conteúdo educativo gera mais engajamento', 'SEO técnico é fundamental para resultados', 'Automação melhora nutrição de leads', 'Consistência é chave para construção de autoridade']
        },
        {
          title: 'Monitoramento e Otimização',
          description: 'Estabelecemos KPIs específicos para cada cliente e processo de otimização contínua baseado em dados e feedback do mercado.',
          insights: ['Análise mensal permitiu ajustes rápidos', 'A/B testing melhorou performance', 'Feedback dos clientes direcionou novos conteúdos']
        }
      ],
      solution: 'Desenvolvemos metodologia própria de estratégia de conteúdo, combinando pesquisa de mercado, SEO técnico, automação de marketing e produção de conteúdo de alta qualidade. Criamos mais de 500 peças de conteúdo para 15 clientes diferentes.',
      results: [
        { metric: 'Tráfego', value: '+60%', description: 'Aumento médio no tráfego orgânico dos clientes' },
        { metric: 'Leads', value: '+45%', description: 'Crescimento na geração de leads qualificados' },
        { metric: 'Engajamento', value: '+25%', description: 'Melhoria no engajamento nas redes sociais' },
        { metric: 'ROI', value: '+80%', description: 'Retorno sobre investimento em marketing de conteúdo' }
      ],
      learnings: [
        'Estratégia de conteúdo deve estar alinhada com objetivos de negócio',
        'SEO e conteúdo de qualidade são complementares, não concorrentes',
        'Automação permite escala sem perder personalização',
        'Métricas específicas por cliente geram insights mais acionáveis'
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

