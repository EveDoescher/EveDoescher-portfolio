import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="py-20 md:py-32 px-6 lg:px-8 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-50">
              Vamos Conversar
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
              Estou sempre aberta para discutir tecnologia, trocar experiências e
              explorar novos desafios onde eu possa somar com código eficiente e soluções criativas.
            </p>
          </div>

          <div className="space-y-6">
            <a
              href="mailto:evedoescher@gmail.com"
              className="inline-flex items-center gap-3 text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-50 hover:opacity-70 transition-opacity"
            >
              <Mail className="w-8 h-8" />
              evedoescher@gmail.com
            </a>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/EveDoescher"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/evelynn-doescher/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
          
            </div>
          </div>

          <div className="pt-12 border-t border-zinc-200 dark:border-zinc-800">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              © {currentYear} Evelynn Doescher. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}