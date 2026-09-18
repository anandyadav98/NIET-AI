import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MessageSquare, Search, Trash2 } from 'lucide-react'
import { CONVERSATIONS } from '../utils/mockData'
import EmptyState from '../components/EmptyState'

export default function ChatHistory() {
  const [items, setItems] = useState(CONVERSATIONS)
  const [q, setQ] = useState('')
  const filtered = items.filter((c) => (c.title + c.preview).toLowerCase().includes(q.toLowerCase()))

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="text-2xl font-extrabold tracking-tight">Chat history</h1>
      <div className="relative mt-5">
        <Search size={16} className="absolute left-3.5 top-3.5 text-slate-400" />
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search conversations…" className="input !pl-10" />
      </div>

      <div className="mt-5 space-y-3">
        {filtered.length === 0 ? (
          <EmptyState
            icon={MessageSquare}
            title="No conversations found"
            description="Try a different search, or start a new chat."
            action={<Link to="/chat" className="btn-primary">Start a chat</Link>}
          />
        ) : (
          filtered.map((c) => (
            <div key={c.id} className="group flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-brand-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-brand-500">
              <Link to="/chat" className="min-w-0 flex-1">
                <p className="truncate font-bold">{c.title}</p>
                <p className="truncate text-sm text-slate-500 dark:text-slate-400">{c.preview}</p>
                <p className="mt-1 text-xs text-slate-400">{c.updated} · {c.messages} messages</p>
              </Link>
              <button onClick={() => setItems((p) => p.filter((x) => x.id !== c.id))} aria-label="Delete" className="text-slate-400 transition hover:text-rose-500">
                <Trash2 size={17} />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}