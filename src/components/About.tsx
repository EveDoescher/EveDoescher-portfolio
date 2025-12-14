export default function About() {
  const skills = [
  'Java',
  'Spring Boot',
  'Python',
  'MongoDB',
  'MySQL',
  'RabbitMQ',
  'Docker',
  'TypeScript',
  'React.js',
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
                Minha trajetória técnica começou em 2019 com o curso Técnico em Informática para internet (Etec),
                onde consolidei conhecimentos em desenvolvimento de software e UI/UX. Atualmente, aprofundo essa base
                na graduação em Análise e Desenvolvimento de Sistemas (UNIP), focando em arquitetura de software e algoritmos.
              </p>
              <p>
                Com foco em Java e Spring Boot, aplicando boas práticas acadêmicas em projetos reais de alta performance.
                Acredito que a combinação entre estudo contínuo e código limpo é a chave para criar soluções digitais que fazem a diferença.
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
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 uppercase tracking-wide">
                  Disponibilidade
                </h4>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Aberta para novos projetos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}