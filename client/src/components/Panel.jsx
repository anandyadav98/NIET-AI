export default function Panel({ title, icon: Icon, action, children, className = '' }) {
  return (
    <section
      className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 ${className}`}
    >
      <div className="mb-4 flex items-center justify-between gap-2">
        <h2 className="flex items-center gap-2 text-sm font-bold">
          {Icon && <Icon size={16} className="text-brand-500" />}
          {title}
        </h2>
        {action}
      </div>
      {children}
    </section>
  )
}