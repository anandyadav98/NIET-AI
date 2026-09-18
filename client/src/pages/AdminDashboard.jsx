import { GraduationCap, MessageSquare, ThumbsUp, UserCheck, Users } from 'lucide-react'
import { ADMIN_STATS as S } from '../utils/mockData'
import Panel from '../components/Panel'
import StatCard from '../components/StatCard'

export default function AdminDashboard() {
  const max = Math.max(...S.topTopics.map((t) => t.count))

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <h1 className="text-2xl font-extrabold tracking-tight">Admin Console</h1>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-5">
        <StatCard icon={GraduationCap} label="Students" value={S.totalStudents.toLocaleString()} tone="brand" />
        <StatCard icon={Users} label="Teachers" value={S.totalTeachers} tone="emerald" />
        <StatCard icon={UserCheck} label="Active users" value={S.activeUsers} tone="amber" />
        <StatCard icon={MessageSquare} label="Questions asked" value={S.questionsAsked.toLocaleString()} tone="brand" />
        <StatCard icon={ThumbsUp} label="Helpful rate" value={`${S.helpfulRate}%`} tone="emerald" />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Panel title="Most asked topics">
          <ul className="space-y-4">
            {S.topTopics.map((t) => (
              <li key={t.topic}>
                <div className="mb-1 flex justify-between text-sm">
                  <span className="font-semibold">{t.topic}</span>
                  <span className="text-slate-500">{t.count}</span>
                </div>
                <div className="h-2 rounded-full bg-slate-100 dark:bg-slate-800">
                  <div className="h-2 rounded-full bg-brand-500 transition-all" style={{ width: `${(t.count / max) * 100}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel title="Most accessed documents">
          <ul className="divide-y divide-slate-100 dark:divide-slate-800">
            {S.topDocuments.map((d) => (
              <li key={d.title} className="flex justify-between py-3 text-sm">
                <span className="font-semibold">{d.title}</span>
                <span className="text-slate-500">{d.views} views</span>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel title="Unanswered queries" className="lg:col-span-2">
          <p className="mb-3 text-xs text-slate-400">Shown as anonymised query text only; no user identity or full conversations.</p>
          <ul className="space-y-2">
            {S.unanswered.map((u) => (
              <li key={u} className="rounded-xl bg-rose-50 px-4 py-2.5 text-sm font-medium text-rose-700 dark:bg-rose-500/10 dark:text-rose-300">{u}</li>
            ))}
          </ul>
        </Panel>
      </div>
    </div>
  )
}