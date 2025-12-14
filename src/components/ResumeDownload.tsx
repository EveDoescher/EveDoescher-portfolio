import { Download } from 'lucide-react';

export default function ResumeDownload() {
  return (
    <a
      href= "Curriculo_Evelynn_Dev.pdf"
      download
      className="flex items-center gap-2 px-4 py-3 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all"
      aria-label="Baixar Currículo"
    >
      <Download className="w-5 h-5" />
      <span className="font-medium">Baixar Currículo</span>
    </a>
  );
}