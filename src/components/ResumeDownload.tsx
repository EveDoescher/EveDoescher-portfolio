import { Download } from 'lucide-react';

export default function ResumeDownload() {
  return (
    <a
      href= "curriculo.pdf"
      download
      className="inline-flex items-center 
                 px-3 py-1.5 border border-zinc-300 dark:border-zinc-700 
                 text-sm font-medium rounded-lg 
                 text-zinc-700 dark:text-zinc-300 
                 bg-zinc-100 dark:bg-zinc-800 
                 hover:bg-zinc-200 dark:hover:bg-zinc-700 
                 transition-colors duration-200 shadow-sm
                 focus:outline-none focus:ring-2 focus:ring-offset-2 
                 focus:ring-indigo-500 focus:ring-offset-zinc-50 dark:focus:ring-offset-zinc-900"
      aria-label="Baixar Currículo"
    >
      <Download className="w-4 h-4 mr-1.5" />
      Baixar Currículo
    </a>
  );
}