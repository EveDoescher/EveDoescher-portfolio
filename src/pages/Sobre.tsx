import { FaGraduationCap, FaCode, FaHeart, FaUser } from "react-icons/fa";

function Sobre() {
  return (
    <>
      <section className="min-h-screen py-20 px-6" >
        <div className="max-w-5xl mx-auto">
          

          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-6 shadow-lg bg-[#2a4a8c]">
              <FaUser className="text-4xl text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Sobre Mim
            </h1>
          </div>

          <div className="space-y-16">
            
            <div className="text-center mb-12">
              <div className="max-w-3xl mx-auto">
                <p className="text-lg text-blue-100 leading-relaxed">
                Olá! Sou <span className="font-semibold text-white">Evelynn Doescher</span>, desenvolvedora de software, e minha paixão por tecnologia começou muito cedo. 
                Cresci explorando o mundo dos computadores e, desde então, a programação se tornou minha principal ferramenta para transformar curiosidade em realidade. 
                Com cada linha de código, busco criar soluções que vão além de simplesmente resolver problemas e sim usar a tecnologia para fazer a diferença no mundo.
                </p>
              </div>
            </div>

          
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-300 rounded-full hidden md:block"></div>
              
             
              <div className="relative flex items-center mb-12 ">
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-800 rounded-full border-4 border-[#3868c4] shadow-lg z-10 "></div>
                <div className="w-full md:w-1/2 md:pr-8 md:text-right">
                  <div className="rounded-2xl p-8 border border-blue-300 ">
                    <div className="flex items-center justify-center md:justify-end mb-4">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4 bg-[#2a4a8c]">
                        <FaGraduationCap className="text-white text-xl" />
                      </div>
                      <h3 className="text-2xl font-bold text-blue-200">Formação & Educação</h3>
                    </div>
                    <p className="text-blue-100 leading-relaxed">
                      Me formei como <span className="font-semibold text-white">Técnica em informática para internet</span> em 2021 e atualmente estou cursando <span className="font-semibold text-white">Análise e Desenvolvimento de Sistemas</span>  na UNIP onde pretendo concluir meus estudos ao final de 2026.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative flex items-center mb-12">
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-900 rounded-full border-4 border-[#3868c4] shadow-lg z-10"></div>
                <div className="w-full md:w-1/2 md:pl-8 md:ml-auto">
                  <div className="rounded-2xl p-8 border border-blue-300">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4 bg-[#2a4a8c]">
                        <FaCode className="text-white text-xl" />
                      </div>
                      <h3 className="text-2xl font-bold text-blue-200">Jornada Dev</h3>
                    </div>
                    <p className="text-blue-100 leading-relaxed">
                      Minha jornada começou no ensino técnico, onde descobri minha vocação para criar soluções através do código. Desde então, venho me dedicando a aprimorar minhas habilidades.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative flex items-center">
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-800 rounded-full border-4 border-[#3868c4] shadow-lg z-10"></div>
                <div className="w-full md:w-1/2 md:pr-8 md:text-right">
                  <div className="rounded-2xl p-8 border border-blue-300">
                    <div className="flex items-center justify-center md:justify-end mb-4">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4 bg-[#2a4a8c]">
                        <FaHeart className="text-white text-xl" />
                      </div>
                      <h3 className="text-2xl font-bold text-blue-200">Objetivos & Paixões</h3>
                    </div>
                    <p className="text-blue-100 leading-relaxed">
                      Meu maior objetivo é me inserir no mundo dev, contribuindo para projetos inovadores que unam tecnologia e criatividade.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Sobre
