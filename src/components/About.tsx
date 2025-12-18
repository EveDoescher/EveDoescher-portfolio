export default function About() {
 const skills = [
  'Java',
  'Spring Boot',
  'Python',
  'RabbitMQ',
  'APIs REST',
  'MySQL',
  'MongoDB',
  'SQLAlchemy',
  'Docker',
  'Git',
  'TypeScript',
  'JavaScript',
  'React.js',
  'Vue.js',
  'Tailwind CSS',
];

  return (
    <section id="about" className="py-20 md:py-32 px-6 lg:px-8 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-50">
              Sobre Mim
            </h2>
            <div className="space-y-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
              <p>
                Minha jornada no desenvolvimento começou em 2019, quando descobri que código é mais do que sintaxe 
                é resolver problemas reais. Do técnico em Informática para Internet na Etec até a graduação em 
                Análise e Desenvolvimento de Sistemas na UNIP, cada projeto me ensinou que construir software confiável 
                exige tanto domínio técnico quanto visão de impacto.
              </p>
              <p>
                Hoje me especializo em backend com Java e Spring Boot, fascinada por como sistemas distribuídos 
                conversam entre si e se mantêm resilientes mesmo sob pressão. Busco oportunidades como estagiária 
                ou júnior onde possa contribuir com código bem pensado, aprender com profissionais experientes 
                e evoluir construindo aplicações que realmente importam para quem as usa.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-50">
              Tecnologias
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm font-medium text-zinc-900 dark:text-zinc-50 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="pt-8 space-y-4">
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 uppercase tracking-wide">
                  Localização
                </h4>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Limeira - SP, Brasil.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}