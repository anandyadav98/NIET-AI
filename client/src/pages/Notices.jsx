import { Bell } from 'lucide-react'
import { NOTICES } from '../utils/mockData'

export default function Notices() {
  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="text-2xl font-extrabold tracking-tight">Notices</h1>
      <div className="mt-6 space-y-3">
        {NOTICES.map((n) => (
          <article key={n.id} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${n.important ? 'bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-300' : 'bg-slate-100 text-slate-500 dark:bg-slate-800'}`}>
              <Bell size={18} />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="font-bold">{n.title}</h2>
                {n.important && <span className="rounded-md bg-rose-50 px-2 py-0.5 text-[11px] font-bold text-rose-600 dark:bg-rose-500/10 dark:text-rose-300">Important</span>}
              </div>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{n.category} · {n.department} · {n.date}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}