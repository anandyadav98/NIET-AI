import { Outlet } from 'react-router-dom'
import { BookMarked, Lock, Sparkles } from 'lucide-react'
import Logo from '../components/Logo'
import ThemeToggle from '../components/ThemeToggle'

const POINTS = [
  { icon: BookMarked, text: 'Answers grounded in your college syllabus, notices and timetables' },
  { icon: Lock, text: 'Private and verified: only students and faculty get in' },
  { icon: Sparkles, text: 'Every college answer shows its source document' },
]

export default function AuthLayout() {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="campus-grid relative hidden flex-col justify-between overflow-hidden bg-brand-950 p-12 text-white lg:flex">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-500/30 blur-3xl" />
        <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl" />
        <div className="relative"><Logo light /></div>
        <div className="relative">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight">
            Your campus, <br />
            <span className="text-amber-400">answered.</span>
          </h1>
          <ul className="mt-8 space-y-4">
            {POINTS.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-3 text-sm text-brand-100">
                <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-white/10"><Icon size={15} /></span>
                {text}
              </li>
            ))}
          </ul>
        </div>
        <p className="relative text-xs text-brand-300">© {new Date().getFullYear()} CollegeAI · Internal use only</p>
      </div>

      <div className="relative flex items-center justify-center p-6">
        <div className="absolute right-5 top-5"><ThemeToggle /></div>
        <div className="w-full max-w-md">
          <div className="mb-8 lg:hidden"><Logo /></div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}