
import { 
  Email as EmailIcon, 
  LinkedIn as LinkedInIcon, 
  GitHub as GitHubIcon
} from '@mui/icons-material';

function Contatos() {
  const contactInfo = [
    {
      icon: <EmailIcon sx={{ fontSize: 60 }} />,
      label: "Email",
      value: "evedoescher@gmail.com",
      link: "mailto:evedoescher@gmail.com",
      color: "#EA4335"
    },
    {
      icon: <LinkedInIcon sx={{ fontSize: 60 }} />,
      label: "LinkedIn",
      value: "Evelynn Doescher",
      link: "https://www.linkedin.com/in/evelynn-doescher",
      color: "#0077B5"
    },
    {
      icon: <GitHubIcon sx={{ fontSize: 60 }} />,
      label: "GitHub",
      value: "@EveDoescher",
      link: "https://github.com/EveDoescher",
      color: "#333"
    }
  ];

  return (
    <>
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div
          className="absolute inset-0 mask-t-from-85% mask-t-to-100% bg-[url('./assets/frieren_bg_2.jpg')] bg-cover bg-center"
        />

        
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 mb-30">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray mb-6">
              Entre em Contato
            </h1>
            <p className="text-xl text-gray font-semibold">
              Vamos conversar sobre como posso ajudar no seu próximo projeto!
            </p>
          </div>

        
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/15 backdrop-blur-lg rounded-2xl p-12 text-center 
                         hover:bg-white/25 transition-all duration-300 transform hover:scale-110
                         border border-white/30 hover:border-white/50"
              >
                <div className="flex flex-col items-center space-y-6">
                  <div style={{ color: item.color }} className="mb-4">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#41404E] mb-3">
                      {item.label}
                    </h3>
                    <p className="text-lg text-[#41404E]/80 group-hover:text-[#41404E] transition-colors">
                      {item.value}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Contatos
