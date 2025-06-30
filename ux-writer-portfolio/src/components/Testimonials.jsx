import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ana Silva',
      role: 'Product Manager',
      company: 'TechCorp',
      content: 'Trabalhar com [Seu Nome] foi transformador para nosso produto. Ela conseguiu simplificar fluxos complexos e melhorar significativamente nossa taxa de conversão. Sua abordagem estratégica e atenção aos detalhes são excepcionais.',
      rating: 5,
      avatar: '/api/placeholder/60/60'
    },
    {
      name: 'Carlos Mendes',
      role: 'UX Designer',
      company: 'StartupXYZ',
      content: 'A colaboração foi perfeita desde o primeiro dia. [Seu Nome] entende profundamente como o conteúdo impacta a experiência do usuário e sempre traz insights valiosos para a equipe de design.',
      rating: 5,
      avatar: '/api/placeholder/60/60'
    },
    {
      name: 'Marina Costa',
      role: 'CEO',
      company: 'FinanceApp',
      content: 'O trabalho de UX Writing dela foi fundamental para o sucesso do nosso app. Conseguimos reduzir o abandono no onboarding em 40% e os usuários constantemente elogiam a clareza da nossa comunicação.',
      rating: 5,
      avatar: '/api/placeholder/60/60'
    }
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            O que dizem sobre meu trabalho
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Feedback de clientes e colegas que trabalharam comigo em projetos 
            de UX Writing e Content Design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-4">
                <Quote className="h-8 w-8 text-blue-200" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              {/* Content */}
              <p className="text-slate-600 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-500">
                    {testimonial.role} • {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Quer ser o próximo a dar um depoimento?
            </h3>
            <p className="text-slate-600 mb-6">
              Vamos trabalhar juntos para criar experiências de conteúdo que seus usuários vão amar.
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
              Iniciar Projeto
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

