import { useEffect, useState } from "react";


function Inicio() {

  const [displayText, setDisplayText] = useState("");
  const fullText = "Boas vindas ao meu Portfólio";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);

  }, []);

  return (
    <>
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div
          className="absolute inset-0 mask-b-from-5% mask-b-to-100% bg-[url('./assets/frieren_bg.jpg')] bg-cover bg-center"
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 ">
          <div className="mb-8">
            <h1 className=" text-6xl md:text-8xl text-white font-cormorant font-bold text-slate-800 mb-4">
              {displayText}
              <span className="animate-pulse">|</span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-white text-slate-600 mb-8 font-light leading-relaxed">
            Me chamo Evelynn Doescher e se você está em busca de uma desenvolvedora, esse é o lugar certo!
          </p>
        </div>
      </section>

    </>
  )
}

export default Inicio
