import Carousel_projects from '../components/Carousel/Carousel_project'
import { FaPencilRuler } from "react-icons/fa";

function Projetos() {
  return (
    <>
      <section className="min-h-screen flex items-center justify-center py-8 sm:py-12 px-4">
        <div className="w-full mx-auto max-w-8xl">
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-6 shadow-lg bg-[#2a4a8c]">
              <FaPencilRuler className="text-4xl text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray mb-4">
              Projetos
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="w-full">
              <Carousel_projects />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Projetos
