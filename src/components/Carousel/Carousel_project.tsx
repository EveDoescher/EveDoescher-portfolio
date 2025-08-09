import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GearsImage from "../../assets/Gears.jpg";
import PasseImage from "../../assets/Passe_onibus.jpg";

export default function ProgrammingProjectsCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "25%",
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerPadding: "20%",
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "15%",
        }
      }
    ]
  };

  const projects = [
    {
      id: 1,
      title: "Calculadora de Passe",
      description: "Esse sistema é uma calculadora de duração de crédito de passe de ônibus, que leva em consideração o perfil de consumo do usuário e o valor depositado.",
      image: PasseImage,
      tags: ["Java"],
      github: "https://github.com/EveDoescher/Calculadora-de-Passe/blob/main/Calculadora%20de%20passe/src/Main.java",
    },
    {
      id: 2,
      title: "Projeto em desenvolvimento",
      description: "Este é um projeto em desenvolvimento ativo. O objetivo é construir uma solução robusta e eficiente.",
      image: GearsImage,
      tags: ["TypeScript", "React.js", "Java", "Tailwind CSS"],
      github: "https://github.com/EveDoescher",
    },
    {
      id: 3,
      title: "Projeto em desenvolvimento",
      description: "Este é um projeto em desenvolvimento ativo. O objetivo é construir uma solução robusta e eficiente.",
      image: GearsImage,
      tags: ["TypeScript", "React.js", "Java", "Tailwind CSS"],
      github: "https://github.com/EveDoescher",
    }
  ];

  return (
    <div className="w-full max-w-full mx-auto py-12 px-4">
      <Slider {...settings}>
        {projects.map((project) => (
          <div key={project.id} className="px-6">
            <div className="bg-white rounded-2xl overflow-hidden transform transition-transform duration-300 hover:scale-102">
              <div className="relative">
                <img 
                  className="w-full h-96 object-cover" 
                  src={project.image} 
                  alt={project.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6 text-lg flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-gray-800 text-base px-4 py-2 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-center">
                  <a 
                    href={project.github} 
                    className="bg-gray-900 text-white text-center py-3 px-6 rounded-xl hover:bg-gray-800 transition-colors font-medium text-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver Código
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
