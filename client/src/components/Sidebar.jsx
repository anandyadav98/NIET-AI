import { NavLink } from 'react-router-dom'
import {
  Bell, BookOpenCheck, FolderOpen, History, LayoutDashboard, LogOut,
  MessageSquare, ShieldCheck, User, X,
} from 'lucide-react'
import Logo from './Logo'
import { useAuth } from '../context/AuthContext'

const BASE_NAV = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/chat', label: 'Ask CollegeAI', icon: MessageSquare },
  { to: '/history', label: 'Chat History', icon: History },
  { to: '/documents', label: 'Documents', icon: FolderOpen },
  { to: '/notices', label: 'Notices', icon: Bell },
  { to: '/profile', label: 'Profile', icon: User },
]

const ROLE_NAV = {
  student: [],
  teacher: [{ to: '/teacher', label: 'Teacher Hub', icon: BookOpenCheck }],
  admin: [
    { to: '/teacher', label: 'Teacher Hub', icon: BookOpenCheck },
    { to: '/admin', label: 'Admin Console', icon: ShieldCheck },
  ],
}

export default function Sidebar({ open, onClose }) {
  const { user, logout } = useAuth()
  const items = [...BASE_NAV, ...(ROLE_NAV[user.role] ?? [])]

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-30 bg-slate-900/50 backdrop-blur-sm lg:hidden" onClick={onClose} />
      )}
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-72 flex-col border-r border-slate-200 bg-white transition-transform duration-300 dark:border-slate-800 dark:bg-slate-900 lg:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-16 items-center justify-between px-5">
          <Logo />
          <button onClick={onClose} className="lg:hidden" aria-label="Close menu">
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
          {items.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition ${
                  isActive
                    ? 'bg-brand-50 text-brand-700 dark:bg-brand-500/15 dark:text-brand-200'
                    : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'
                }`
              }
            >
              <Icon size={18} />
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="border-t border-slate-200 p-3 dark:border-slate-800">
          <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3 dark:bg-slate-800/60">
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-600 text-sm font-bold text-white">
              {user.name.charAt(0)}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-bold">{user.name}</p>
              <p className="text-xs capitalize text-slate-500 dark:text-slate-400">{user.role}</p>
            </div>
            <button onClick={logout} aria-label="Log out" title="Log out" className="text-slate-400 transition hover:text-rose-500">
              <LogOut size={17} />
            </button>
          </div>
        </div>
      </aside>
    </>
  )
}