import { GraduationCap } from 'lucide-react'

export default function Logo({ light = false }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="grid h-9 w-9 place-items-center rounded-xl bg-linear-to-br from-brand-500 to-brand-800 text-white shadow-lg shadow-brand-600/30">
        <GraduationCap size={20} />
      </div>
      <div className="leading-tight">
        <p className={`text-base font-extrabold tracking-tight ${light ? 'text-white' : ''}`}>
          College<span className="text-amber-500">AI</span>
        </p>
        <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">Digital Campus</p>
      </div>
    </div>
  )
}