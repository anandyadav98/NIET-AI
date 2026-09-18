import { Link } from 'react-router-dom'
import { ArrowRight, Bell, CalendarClock, ClipboardList, MessageSquare } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { ASSIGNMENTS, CONVERSATIONS, NOTICES, UPCOMING_EXAMS } from '../utils/mockData'
import Panel from '../components/Panel'
import StatCard from '../components/StatCard'

const daysUntil = (date) => Math.max(0, Math.ceil((new Date(date) - new Date()) / 86400000))

export default function Dashboard() {
  const { user } = useAuth()
  const next = UPCOMING_EXAMS[0]
  const context =
    user.role === 'student'
      ? `${user.branch} · Year ${user.year} · Semester ${user.semester} · Section ${user.section}`
      : user.department

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <div className="campus-grid relative overflow-hidden rounded-3xl bg-linear-to-br from-brand-700 to-brand-950 p-6 text-white sm:p-8">
        <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-amber-400/20 blur-3xl" />
        <p className="relative text-sm font-semibold text-brand-200">{context}</p>
        <h1 className="relative mt-1 text-2xl font-extrabold tracking-tight sm:text-3xl">
          Hello, {user.name.split(' ')[0]} 👋
        </h1>
        <p className="relative mt-2 max-w-lg text-sm text-brand-100">
          Ask about exams, syllabus, notices or documents. Answers come from verified college records.
        </p>
        <Link to="/chat" className="relative mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-bold text-brand-800 transition hover:bg-brand-50">
          <MessageSquare size={16} /> Ask CollegeAI
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard icon={CalendarClock} label="Next exam" value={`${daysUntil(next.date)} days`} hint={next.subject} tone="rose" />
        <StatCard icon={Bell} label="New notices" value={NOTICES.length} hint="This month" tone="amber" />
        <StatCard icon={ClipboardList} label="Pending assignments" value={ASSIGNMENTS.length} tone="brand" />
        <StatCard icon={MessageSquare} label="Conversations" value={CONVERSATIONS.length} tone="emerald" />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Panel title="Upcoming exams" icon={CalendarClock}>
          <ul className="divide-y divide-slate-100 dark:divide-slate-800">
            {UPCOMING_EXAMS.map((e) => (
              <li key={e.subject} className="flex items-center justify-between py-3">
                <div>
                  <p className="text-sm font-bold">{e.subject}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{e.type} · {e.room}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold">{e.date}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{e.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel title="Recent notices" icon={Bell} action={<Link to="/notices" className="text-xs font-semibold text-brand-600 dark:text-brand-300">View all <ArrowRight size={12} className="inline" /></Link>}>
          <ul className="divide-y divide-slate-100 dark:divide-slate-800">
            {NOTICES.slice(0, 3).map((n) => (
              <li key={n.id} className="py-3">
                <p className="text-sm font-bold">{n.title}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{n.category} · {n.date}</p>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel title="Assignments due" icon={ClipboardList}>
          <ul className="divide-y divide-slate-100 dark:divide-slate-800">
            {ASSIGNMENTS.map((a) => (
              <li key={a.title} className="flex items-center justify-between py-3">
                <div>
                  <p className="text-sm font-bold">{a.title}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{a.subject}</p>
                </div>
                <span className="rounded-lg bg-amber-50 px-2.5 py-1 text-xs font-bold text-amber-700 dark:bg-amber-500/10 dark:text-amber-300">
                  Due {a.due}
                </span>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel title="Recent conversations" icon={MessageSquare} action={<Link to="/history" className="text-xs font-semibold text-brand-600 dark:text-brand-300">View all <ArrowRight size={12} className="inline" /></Link>}>
          <ul className="divide-y divide-slate-100 dark:divide-slate-800">
            {CONVERSATIONS.slice(0, 3).map((c) => (
              <li key={c.id} className="py-3">
                <p className="text-sm font-bold">{c.title}</p>
                <p className="truncate text-xs text-slate-500 dark:text-slate-400">{c.preview}</p>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </div>
  )
}