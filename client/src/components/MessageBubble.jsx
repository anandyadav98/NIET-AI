import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Check, Copy, Globe, RefreshCw, SearchX, ShieldCheck, ThumbsDown, ThumbsUp } from 'lucide-react'
import SourceCard from './SourceCard'

const KIND = {
  college: {
    label: 'From college records',
    icon: ShieldCheck,
    cls: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300',
  },
  general: {
    label: 'General knowledge',
    icon: Globe,
    cls: 'bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300',
  },
  unavailable: {
    label: 'Not in college database',
    icon: SearchX,
    cls: 'bg-rose-50 text-rose-700 dark:bg-rose-500/10 dark:text-rose-300',
  },
}

export default function MessageBubble({ message, onRegenerate }) {
  const [copied, setCopied] = useState(false)
  const [vote, setVote] = useState(null)

  if (message.role === 'user') {
    return (
      <div className="flex justify-end">
        <div className="max-w-[85%] whitespace-pre-wrap rounded-2xl rounded-br-md bg-brand-600 px-4 py-2.5 text-sm text-white shadow-sm">
          {message.content}
        </div>
      </div>
    )
  }

  const badge = KIND[message.kind] ?? KIND.general
  const BadgeIcon = badge.icon

  const copy = async () => {
    await navigator.clipboard.writeText(message.content)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="flex gap-3">
      <div className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-linear-to-br from-brand-500 to-brand-800 text-[11px] font-extrabold text-white">
        AI
      </div>
      <div className="min-w-0 max-w-[92%] flex-1">
        <span className={`mb-2 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold ${badge.cls}`}>
          <BadgeIcon size={12} />
          {badge.label}
        </span>

        <div className="rounded-2xl rounded-tl-md border border-slate-200 bg-white px-4 py-3 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="prose prose-sm max-w-none dark:prose-invert prose-pre:bg-slate-900 prose-pre:text-slate-100 prose-table:text-sm">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{message.content}</ReactMarkdown>
          </div>

          {message.sources?.length > 0 && (
            <div className="mt-3 border-t border-slate-100 pt-3 dark:border-slate-800">
              <p className="mb-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">Sources</p>
              <div className="grid gap-2 sm:grid-cols-2">
                {message.sources.map((s) => (
                  <SourceCard key={s.title} source={s} />
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mt-1.5 flex items-center gap-1 text-slate-400">
          <IconBtn onClick={copy} label="Copy">
            {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
          </IconBtn>
          <IconBtn onClick={() => onRegenerate(message)} label="Regenerate">
            <RefreshCw size={14} />
          </IconBtn>
          <IconBtn onClick={() => setVote('up')} label="Helpful" active={vote === 'up'}>
            <ThumbsUp size={14} />
          </IconBtn>
          <IconBtn onClick={() => setVote('down')} label="Not helpful" active={vote === 'down'}>
            <ThumbsDown size={14} />
          </IconBtn>
        </div>
      </div>
    </div>
  )
}

function IconBtn({ children, onClick, label, active }) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      title={label}
      className={`grid h-7 w-7 place-items-center rounded-lg transition hover:bg-slate-100 dark:hover:bg-slate-800 ${
        active ? 'bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-300' : ''
      }`}
    >
      {children}
    </button>
  )
}