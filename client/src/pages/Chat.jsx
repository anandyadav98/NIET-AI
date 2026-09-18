import { useEffect, useRef, useState } from 'react'
import { Plus, Send, Sparkles, Trash2 } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import MessageBubble from '../components/MessageBubble'
import { SUGGESTED_PROMPTS } from '../utils/mockData'
import { mockReply } from '../utils/mockAI'

export default function Chat() {
  const { user } = useAuth()
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const endRef = useRef(null)
  const timer = useRef(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  useEffect(() => () => clearTimeout(timer.current), [])

  const respond = (question, replaceId) => {
    setLoading(true)
    timer.current = setTimeout(() => {
      const reply = { id: crypto.randomUUID(), role: 'assistant', question, ...mockReply(question) }
      setMessages((prev) =>
        replaceId ? prev.map((m) => (m.id === replaceId ? reply : m)) : [...prev, reply]
      )
      setLoading(false)
    }, 1300)
  }

  const send = (text = input) => {
    const t = text.trim()
    if (!t || loading) return
    setMessages((p) => [...p, { id: crypto.randomUUID(), role: 'user', content: t }])
    setInput('')
    respond(t)
  }

  const reset = () => {
    clearTimeout(timer.current)
    setMessages([])
    setLoading(false)
  }

  const context =
    user.role === 'student'
      ? `${user.branch} · Year ${user.year} · Sem ${user.semester}`
      : user.role === 'teacher'
        ? `Teacher · ${user.department}`
        : 'Admin'

  return (
    <div className="mx-auto flex h-[calc(100dvh-8rem)] max-w-4xl flex-col">
      <div className="mb-3 flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1.5 text-xs font-bold text-brand-700 dark:bg-brand-500/15 dark:text-brand-200">
          <Sparkles size={13} /> Personalised for: {context}
        </span>
        <div className="flex gap-2">
          <button onClick={reset} className="btn-ghost"><Plus size={15} /> New chat</button>
          <button onClick={reset} disabled={!messages.length} className="btn-ghost"><Trash2 size={15} /> Clear</button>
        </div>
      </div>

      <div className="flex-1 space-y-5 overflow-y-auto rounded-2xl border border-slate-200 bg-slate-100/50 p-4 dark:border-slate-800 dark:bg-slate-900/40 sm:p-6">
        {messages.length === 0 && !loading ? (
          <div className="flex h-full flex-col items-center justify-center text-center">
            <div className="mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-linear-to-br from-brand-500 to-brand-800 text-white shadow-lg shadow-brand-600/30">
              <Sparkles size={26} />
            </div>
            <h2 className="text-xl font-extrabold">What can I help you with?</h2>
            <p className="mt-1 max-w-md text-sm text-slate-500 dark:text-slate-400">
              I answer from verified college information and always tell you when something isn't available.
            </p>
            <div className="mt-6 grid w-full max-w-xl gap-2 sm:grid-cols-2">
              {SUGGESTED_PROMPTS.map((p) => (
                <button key={p} onClick={() => send(p)} className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-left text-sm font-medium transition hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:hover:border-brand-500">
                  {p}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <>
            {messages.map((m) => (
              <MessageBubble key={m.id} message={m} onRegenerate={(msg) => respond(msg.question, msg.id)} />
            ))}
            {loading && (
              <div className="flex items-center gap-3">
                <div className="grid h-8 w-8 place-items-center rounded-xl bg-linear-to-br from-brand-500 to-brand-800 text-[11px] font-extrabold text-white">AI</div>
                <div className="flex items-center gap-1.5 rounded-2xl border border-slate-200 bg-white px-4 py-3 dark:border-slate-800 dark:bg-slate-900">
                  {[0, 1, 2].map((i) => (
                    <span key={i} className="typing-dot h-2 w-2 rounded-full bg-brand-500" style={{ animationDelay: `${i * 0.16}s` }} />
                  ))}
                </div>
              </div>
            )}
          </>
        )}
        <div ref={endRef} />
      </div>

      <div className="mt-3 flex items-end gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm focus-within:ring-4 focus-within:ring-brand-500/15 dark:border-slate-700 dark:bg-slate-900">
        <textarea
          rows={1}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault()
              send()
            }
          }}
          placeholder="Ask about exams, syllabus, notices…  (Shift+Enter for new line)"
          className="field-sizing-content max-h-40 min-h-10 flex-1 resize-none bg-transparent px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-hidden"
        />
        <button onClick={() => send()} disabled={!input.trim() || loading} className="btn-primary !rounded-xl !p-2.5" aria-label="Send">
          <Send size={17} />
        </button>
      </div>
    </div>
  )
}