import { FileText } from 'lucide-react'

export default function SourceCard({ source }) {
  return (
    <div className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 dark:border-slate-700 dark:bg-slate-800/60">
      <FileText size={16} className="shrink-0 text-brand-500" />
      <div className="min-w-0">
        <p className="truncate text-xs font-semibold">{source.title}</p>
        <p className="text-[11px] text-slate-500 dark:text-slate-400">
          {source.type}
          {source.page ? ` · Page ${source.page}` : ''}
        </p>
      </div>
    </div>
  )
}