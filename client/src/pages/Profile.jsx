import { useAuth } from '../context/AuthContext'
import Panel from '../components/Panel'

export default function Profile() {
  const { user } = useAuth()

  const fields =
    user.role === 'student'
      ? [['ERP ID', user.erpId], ['Department', user.department], ['Branch', user.branch], ['Year', user.year], ['Section', user.section], ['Semester', user.semester]]
      : user.role === 'teacher'
        ? [['Faculty ID', user.facultyId], ['Department', user.department], ['Designation', user.designation]]
        : [['Department', user.department], ['Designation', user.designation]]

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div className="flex items-center gap-4">
        <div className="grid h-16 w-16 place-items-center rounded-2xl bg-linear-to-br from-brand-500 to-brand-800 text-2xl font-extrabold text-white">
          {user.name.charAt(0)}
        </div>
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight">{user.name}</h1>
          <p className="text-sm capitalize text-slate-500 dark:text-slate-400">{user.email} · {user.role}</p>
        </div>
      </div>

      <Panel title="Academic details">
        <dl className="grid gap-4 sm:grid-cols-2">
          {fields.map(([k, v]) => (
            <div key={k}>
              <dt className="text-xs font-semibold uppercase tracking-wider text-slate-400">{k}</dt>
              <dd className="mt-0.5 font-semibold">{v}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-5 text-xs text-slate-400">These details are managed by the college admin and used to personalise answers.</p>
      </Panel>

      {user.subjects && (
        <Panel title={user.role === 'student' ? 'Subjects this semester' : 'Subjects taught'}>
          <div className="flex flex-wrap gap-2">
            {user.subjects.map((s) => (
              <span key={s} className="rounded-lg bg-brand-50 px-3 py-1.5 text-sm font-semibold text-brand-700 dark:bg-brand-500/15 dark:text-brand-200">{s}</span>
            ))}
          </div>
        </Panel>
      )}
    </div>
  )
}