import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-16">
      <div className="max-w-7xl w-full">
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-zinc-900 dark:text-zinc-50 leading-tight tracking-tight">
            Evelynn Doescher
          </h1>

          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
            Criando experiências digitais completas através de código limpo,
            interfaces intuitivas e foco na qualidade técnica.
          </p>

          <button
            onClick={scrollToAbout}
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 dark:text-zinc-50 hover:opacity-70 transition-opacity"
          >
            Veja mais
            <ArrowDown className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}