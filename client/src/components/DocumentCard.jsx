import { Download, FileText } from 'lucide-react'

export default function DocumentCard({ doc }) {
  return (
    <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-3 flex items-start justify-between">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-300">
          <FileText size={19} />
        </div>
        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
          {doc.type}
        </span>
      </div>
      <h3 className="font-bold leading-snug">{doc.title}</h3>
      <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
        {doc.department} · {doc.size} · Updated {doc.updated}
      </p>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex gap-1.5">
          {doc.visibility.length === 0 ? (
            <span className="rounded-md bg-rose-50 px-2 py-0.5 text-[11px] font-semibold text-rose-600 dark:bg-rose-500/10 dark:text-rose-300">
              Admin only
            </span>
          ) : (
            doc.visibility.map((v) => (
              <span key={v} className="rounded-md bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold capitalize text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
                {v}s
              </span>
            ))
          )}
        </div>
        <button className="btn-ghost !px-2.5 !py-1.5" aria-label="Download">
          <Download size={15} />
        </button>
      </div>
    </div>
  )
}