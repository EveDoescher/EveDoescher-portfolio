import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaJava, FaGithub, FaSlidersH } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiTailwindcss, SiMongodb, SiMysql } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { DiCss3, DiHtml5 } from 'react-icons/di';
import { useState } from 'react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
  gradient: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: <FaReact className="text-3xl" />,
    gradient: "from-blue-400 to-purple-600",
    skills: [
      { name: "React", icon: <FaReact />, color: "text-[#61DAFB]" },
      { name: "Next.js", icon: <TbBrandNextjs />, color: "text-black" },
      { name: "TypeScript", icon: <SiTypescript />, color: "text-[#3178C6]" },
      { name: "JavaScript", icon: <SiJavascript />, color: "text-[#F7DF1E]" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-[#06B6D4]" },
      { name: "HTML5", icon: <DiHtml5 />, color: "text-[#E34F26]" },
      { name: "CSS3", icon: <DiCss3 />, color: "text-[#1572B6]" },
    ]
  },
  {
    title: "Backend",
    icon: <FaNodeJs className="text-3xl" />,
    gradient: "from-green-400 to-blue-600",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, color: "text-[#339933]" },
      { name: "Python", icon: <FaPython />, color: "text-[#3776AB]" },
      { name: "MySQL", icon: <SiMysql />, color: "text-[#4479A1]" },
      { name: "MongoDB", icon: <SiMongodb />, color: "text-[#47A248]" },
      { name: "Java", icon: <FaJava />, color: "text-[#ED8B00]" },

    ]
  },
  {
    title: "DevOps & Ferramentas",
    icon: <FaGitAlt className="text-3xl" />,
    gradient: "from-orange-400 to-red-600",
    skills: [
      { name: "Git", icon: <FaGitAlt />, color: "text-[#F05032]" },
      { name: "Github", icon: <FaGithub />, color: "text-[#181717]" },
    ]
  }
];

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group cursor-pointer transform transition-all duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-[2px] from-slate-50 to-slate-100 p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
        <div className="flex flex-col items-center">
          <div className={`text-5xl mb-4 ${skill.color} transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`}>
            {skill.icon}
          </div>

          <h4 className="text-lg font-semibold text-slate-800 mb-2">{skill.name}</h4>
        </div>
      </div>
    </div>
  );
}

function CategoryCard({ category, index }: { category: SkillCategory; index: number }) {
  return (
    <div
      className="relative group animate-fade-in"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <div className="relative rounded-2xl bg-white/10 backdrop-blur-[2px] shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
        <div className={`h-2 bg-gradient-to-r ${category.gradient}`} />

        <div className="p-8">
          <div className="flex items-center mb-6">
            <div className={`p-3 rounded-xl bg-gradient-to-br ${category.gradient} text-white mr-4`}>
              {category.icon}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-800">{category.title}</h3>
              <p className="text-sm text-slate-600">{category.skills.length} tecnologias</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {category.skills.map((skill, skillIndex) => (
              <SkillCard
                key={skill.name}
                skill={skill}
                index={skillIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Habilidades() {
  return (
    <>
      <section className="min-h-screen py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-6 shadow-lg bg-[#2a4a8c]">
              <FaSlidersH className="text-4xl text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray mb-4">
              Minhas Habilidades
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <CategoryCard
                key={category.title}
                category={category}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Habilidades
