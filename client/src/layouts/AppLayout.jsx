import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Menu } from 'lucide-react'
import Sidebar from '../components/Sidebar'
import ThemeToggle from '../components/ThemeToggle'
import { useAuth } from '../context/AuthContext'
import { COLLEGE_NAME } from '../utils/mockData'

export default function AppLayout() {
  const [open, setOpen] = useState(false)
  const { user } = useAuth()
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])

  return (
    <div className="min-h-screen">
      <Sidebar open={open} onClose={() => setOpen(false)} />
      <div className="lg:pl-72">
        <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-slate-200 bg-white/80 px-4 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80 sm:px-6">
          <button onClick={() => setOpen(true)} className="lg:hidden" aria-label="Open menu">
            <Menu size={22} />
          </button>
          <p className="hidden text-sm font-semibold text-slate-500 dark:text-slate-400 lg:block">
            {COLLEGE_NAME}
          </p>
          <div className="flex items-center gap-2">
            <span className="hidden rounded-full bg-brand-50 px-3 py-1 text-xs font-bold capitalize text-brand-700 dark:bg-brand-500/15 dark:text-brand-200 sm:inline">
              {user.role}
            </span>
            <ThemeToggle />
          </div>
        </header>
        <main className="p-4 sm:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}