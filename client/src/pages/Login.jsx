import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { Eye, EyeOff, Lock, Mail } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const { user, login } = useAuth()
  const navigate = useNavigate()
  const [showPw, setShowPw] = useState(false)

  if (user) return <Navigate to="/dashboard" replace />

  const go = (role) => {
    login(role)
    navigate('/dashboard')
  }

  return (
    <div>
      <h2 className="text-2xl font-extrabold tracking-tight">Welcome back</h2>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Sign in with your college account.</p>

      <form
        className="mt-8 space-y-4"
        onSubmit={(e) => {
          e.preventDefault()
          go('student')
        }}
      >
        <div>
          <label className="mb-1.5 block text-sm font-semibold">College email</label>
          <div className="relative">
            <Mail size={16} className="absolute left-3.5 top-3.5 text-slate-400" />
            <input type="email" required placeholder="you@college.edu" className="input !pl-10" />
          </div>
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-semibold">Password</label>
          <div className="relative">
            <Lock size={16} className="absolute left-3.5 top-3.5 text-slate-400" />
            <input type={showPw ? 'text' : 'password'} required placeholder="••••••••" className="input !px-10" />
            <button type="button" onClick={() => setShowPw((s) => !s)} className="absolute right-3.5 top-3.5 text-slate-400" aria-label="Toggle password">
              {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>
        <button className="btn-primary w-full">Sign in</button>
      </form>

      <div className="my-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
        <span className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
        Phase 1 demo access
        <span className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
      </div>

      <div className="grid grid-cols-3 gap-2">
        {['student', 'teacher', 'admin'].map((r) => (
          <button key={r} onClick={() => go(r)} className="btn-ghost capitalize">
            {r}
          </button>
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
        New to CollegeAI?{' '}
        <Link to="/register" className="font-semibold text-brand-600 hover:underline dark:text-brand-300">
          Verify your account
        </Link>
      </p>
    </div>
  )
}