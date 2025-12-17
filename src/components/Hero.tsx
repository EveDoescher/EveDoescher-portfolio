import { ArrowDown } from 'lucide-react';
import { InteractiveCharacter } from './InteractiveCharacter';

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-20 relative overflow-hidden">
      <div className="max-w-7xl w-full">
        {/* Grid responsivo: 1 coluna no mobile, 2 colunas no desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Lado Esquerdo: Conteúdo de Texto */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000 order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-zinc-900 dark:text-zinc-50 leading-tight tracking-tight">
              Evelynn Doescher
            </h1>

            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Criando experiências digitais completas através de código limpo,
              interfaces intuitivas e foco na qualidade técnica.
            </p>

            <button
              onClick={scrollToAbout}
              className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 dark:text-zinc-50 hover:opacity-70 transition-opacity"
            >
              Veja mais
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </button>
          </div>

          {/* Espaço vazio para manter o grid balanceado no desktop */}
          <div className="hidden lg:block order-1 lg:order-2"></div>

        </div>
      </div>

      {/* Personagem GRANDE no fundo (z-index baixo) - Oculto no mobile */}
      <div className="hidden lg:block absolute right-50 bottom-0 h-[calc(100vh-80px)] w-[700px] xl:w-[800px] z-0 opacity-75 grayscale contrast-150">
        <InteractiveCharacter />
      </div>
    </section>
  );
}