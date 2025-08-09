import { Link } from 'react-scroll';



const Navbar = () => {
  return (
    <>
      <section className='fixed w-full bg-white/10 backdrop-blur-[2px] z-50 shadow-lg'>
        <div className='m-6 flex justify-end'>
          <p className="text-2xl md:text-2xl text-white text-slate-600 mb-8 font-normal ">
            <Link className='p-5 hover:text-[#E6E6E6] cursor-pointer' to="Inicio" duration={550}>Inicio</Link>
            <Link className='p-5 hover:text-[#E6E6E6] cursor-pointer' to="Sobre" duration={550}>Sobre mim</Link>
            <Link className='p-5 hover:text-[#E6E6E6] cursor-pointer' to="Habilidades" duration={550}>Habilidades</Link>
            <Link className='p-5 hover:text-[#E6E6E6] cursor-pointer' to="Projetos" duration={550}>Projetos</Link>
            <Link className='p-5 hover:text-[#E6E6E6] cursor-pointer' to="Contatos" duration={550}>Contatos</Link>
          </p>
        </div>
      </section>
    </>
  )
}

export default Navbar
