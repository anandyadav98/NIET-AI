import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'

export default function Register() {
  const [step, setStep] = useState(1)

  return (
    <div>
      <h2 className="text-2xl font-extrabold tracking-tight">Verify your college account</h2>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
        Only students and faculty of the college can register.
      </p>

      <div className="mt-6 flex gap-2">
        {[1, 2, 3].map((s) => (
          <span key={s} className={`h-1.5 flex-1 rounded-full transition ${s <= step ? 'bg-brand-600' : 'bg-slate-200 dark:bg-slate-800'}`} />
        ))}
      </div>

      {step === 1 && (
        <form
          className="mt-6 space-y-4"
          onSubmit={(e) => {
            e.preventDefault()
            setStep(2)
          }}
        >
          <input required placeholder="Full name" className="input" />
          <input required type="email" placeholder="College email (@college.edu)" className="input" />
          <input required placeholder="ERP ID / Faculty ID" className="input" />
          <select className="input" defaultValue="student">
            <option value="student">I am a student</option>
            <option value="teacher">I am a teacher</option>
          </select>
          <input required type="password" minLength={8} placeholder="Password (min 8 characters)" className="input" />
          <button className="btn-primary w-full">Send verification code</button>
          <p className="text-xs text-slate-400">Admin accounts cannot be self-registered.</p>
        </form>
      )}

      {step === 2 && (
        <form
          className="mt-6 space-y-4"
          onSubmit={(e) => {
            e.preventDefault()
            setStep(3)
          }}
        >
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Enter the 6-digit code sent to your college email.
          </p>
          <input required inputMode="numeric" maxLength={6} placeholder="000000" className="input text-center text-lg tracking-[0.5em]" />
          <button className="btn-primary w-full">Verify email</button>
        </form>
      )}

      {step === 3 && (
        <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center dark:border-emerald-500/20 dark:bg-emerald-500/10">
          <CheckCircle2 className="mx-auto text-emerald-500" size={36} />
          <h3 className="mt-3 font-bold">Email verified</h3>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
            Your account is awaiting admin approval. You'll be able to sign in once it's approved.
          </p>
        </div>
      )}

      <p className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
        Already verified?{' '}
        <Link to="/login" className="font-semibold text-brand-600 hover:underline dark:text-brand-300">Sign in</Link>
      </p>
    </div>
  )
}