import { BookOpenCheck, FileText, MessageSquare, UploadCloud } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { DOCUMENTS } from '../utils/mockData'
import Panel from '../components/Panel'
import StatCard from '../components/StatCard'

export default function TeacherDashboard() {
  const { user } = useAuth()
  const subjects = user.subjects ?? []

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <h1 className="text-2xl font-extrabold tracking-tight">Teacher Hub</h1>

      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard icon={FileText} label="Documents uploaded" value="14" tone="brand" />
        <StatCard icon={BookOpenCheck} label="Subjects taught" value={subjects.length} tone="emerald" />
        <StatCard icon={MessageSquare} label="Student questions (30d)" value="128" tone="amber" />
      </div>

      <Panel title="Upload academic content" icon={UploadCloud}>
        <div className="grid place-items-center rounded-2xl border-2 border-dashed border-slate-300 px-6 py-12 text-center dark:border-slate-700">
          <UploadCloud size={30} className="text-slate-400" />
          <p className="mt-3 font-bold">Drag & drop notes, assignments, lab manuals or notices</p>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">PDF, DOCX, TXT · max 10 MB · Upload goes live in Phase 9</p>
        </div>
      </Panel>

      <div className="grid gap-6 lg:grid-cols-2">
        <Panel title="My subjects">
          <ul className="space-y-2">
            {subjects.map((s) => (
              <li key={s} className="rounded-xl bg-slate-50 px-4 py-3 text-sm font-semibold dark:bg-slate-800/60">{s}</li>
            ))}
          </ul>
        </Panel>
        <Panel title="Recent uploads">
          <ul className="divide-y divide-slate-100 dark:divide-slate-800">
            {DOCUMENTS.slice(0, 4).map((d) => (
              <li key={d.id} className="py-3">
                <p className="text-sm font-bold">{d.title}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{d.type} · {d.updated}</p>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </div>
  )
}