import { useState } from 'react'
import { FolderOpen, Search, Upload } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { DOCUMENTS } from '../utils/mockData'
import DocumentCard from '../components/DocumentCard'
import EmptyState from '../components/EmptyState'

export default function Documents() {
  const { user } = useAuth()
  const [q, setQ] = useState('')
  const [type, setType] = useState('All')

  // Demo of role-based visibility. Real filtering happens server-side in Phase 9/10.
  const visible = DOCUMENTS.filter((d) => user.role === 'admin' || d.visibility.includes(user.role))
  const types = ['All', ...new Set(visible.map((d) => d.type))]
  const filtered = visible.filter(
    (d) => (type === 'All' || d.type === type) && d.title.toLowerCase().includes(q.toLowerCase())
  )
  const canUpload = user.role !== 'student'

  return (
    <div className="mx-auto max-w-6xl">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-extrabold tracking-tight">Documents</h1>
        {canUpload && (
          <button className="btn-primary" disabled title="Enabled in Phase 9">
            <Upload size={16} /> Upload document
          </button>
        )}
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3.5 top-3.5 text-slate-400" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search documents…" className="input !pl-10" />
        </div>
        <select value={type} onChange={(e) => setType(e.target.value)} className="input sm:w-52">
          {types.map((t) => <option key={t}>{t}</option>)}
        </select>
      </div>

      <div className="mt-6">
        {filtered.length === 0 ? (
          <EmptyState icon={FolderOpen} title="No documents match" description="Try a different search or filter." />
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((d) => <DocumentCard key={d.id} doc={d} />)}
          </div>
        )}
      </div>
    </div>
  )
}