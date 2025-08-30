import { Link } from 'react-scroll';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className='fixed w-full z-50'>
      <div className='w-full bg-white/15 backdrop-blur-[4px] shadow-lg'>
        {/* Menu Desktop */}
        <div className='p-6 hidden md:flex justify-end'>
          <p className="text-2xl md:text-2xl text-white text-slate-600 mb-8 font-normal">
            <Link className='p-5 hover:text-[#E6E6E6] cursor-pointer' to="Inicio" duration={550}>Inicio</Link>
            <Link className='p-5 hover:text-[#E6E6E6] cursor-pointer' to="Sobre" duration={550}>Sobre mim</Link>
            <Link className='p-5 hover:text-[#E6E6E6] cursor-pointer' to="Habilidades" duration={550}>Habilidades</Link>
            <Link className='p-5 hover:text-[#E6E6E6] cursor-pointer' to="Projetos" duration={550}>Projetos</Link>
            <Link className='p-5 hover:text-[#E6E6E6] cursor-pointer' to="Contatos" duration={550}>Contatos</Link>
          </p>
        </div>

        {/* Menu Mobile */}
        <div className='p-6 flex md:hidden justify-end'>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='text-white text-2xl p-2'
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className='md:hidden absolute top-full left-0 w-full shadow-lg bg-white/15 backdrop-blur-[4px]'>
          <div className='flex flex-col items-center py-4'>
            <Link 
              className='p-3 text-white text-xl hover:text-[#E6E6E6] cursor-pointer' 
              to="Inicio" 
              duration={550}
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link 
              className='p-3 text-white text-xl hover:text-[#E6E6E6] cursor-pointer' 
              to="Sobre" 
              duration={550}
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre mim
            </Link>
            <Link 
              className='p-3 text-white text-xl hover:text-[#E6E6E6] cursor-pointer' 
              to="Habilidades" 
              duration={550}
              onClick={() => setIsMenuOpen(false)}
            >
              Habilidades
            </Link>
            <Link 
              className='p-3 text-white text-xl hover:text-[#E6E6E6] cursor-pointer' 
              to="Projetos" 
              duration={550}
              onClick={() => setIsMenuOpen(false)}
            >
              Projetos
            </Link>
            <Link 
              className='p-3 text-white text-xl hover:text-[#E6E6E6] cursor-pointer' 
              to="Contatos" 
              duration={550}
              onClick={() => setIsMenuOpen(false)}
            >
              Contatos
            </Link>
          </div>
        </div>
      )}
    </section>
  )
}

export default Navbar