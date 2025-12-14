import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: 'SentineLog - API de ingestão e monitoramento de Logs',
      description: "Solução de centralização de logs via API REST, com processamento assíncrono e armazenamento para auditoria. O sistema identifica erros críticos em produção e dispara alertas em tempo real.",
      technologies: ["Java 21", "Spring Boot 4", "RabbitMQ", "MongoDB", "Docker", "k6", "Swagger"],
      github: "https://github.com/EveDoescher/SentineLog"
    },
    {
      title: 'Sistema Acadêmico Colaborativo',
      description: "Sistema desktop para gestão acadêmica em Python e Flet, integrado ao MySQL via SQLAlchemy. A solução inclui controle de acesso, containerização Docker e módulo em C para otimização de performance.",
      technologies: ["Python", "C", "Flet", "MySQL","SQLAlchemy","Docker"],
      github: "https://github.com/EveDoescher/PIM"
    },
    {
      title: 'Calculadora de Passe',
      description: "Sistema calculadora de duração de crédito de passe de ônibus, considerando perfil de consumo do usuário e valor depositado.",
      technologies: ["Java", "Lógica de Negócio", "Manipulação de Datas", "Validação de Dados"],
      github: "https://github.com/EveDoescher/Calculadora-de-Passe/blob/main/Calculadora%20de%20passe/src/Main.java"
    },
    {
      title: 'Portifólio',
      description: "Desenvolvimento de um site de portfólio moderno e performático, com design responsivo e experiência de usuário otimizada. O projeto utiliza React.js e TypeScript para uma base sólida e escalável, Vite para build rápido e eficiente, e Tailwind CSS para estilização ágil e consistente.",
      technologies: ["React.js", "Vite", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/EveDoescher/EveDoescher-portfolio"
    }
  ];

  return (
    <section id="projects" className="py-20 md:py-32 px-6 lg:px-8 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-50">
            Projetos
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group p-6 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          className="p-1.5 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
                          aria-label="GitHub"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-medium text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}