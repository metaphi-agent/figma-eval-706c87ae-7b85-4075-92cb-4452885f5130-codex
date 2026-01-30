import IconButton from '../ui/IconButton'

function RailIcon({ bg, label }: { bg: string; label: string }) {
  return (
    <span
      className="grid size-6 place-items-center rounded"
      style={{ background: bg }}
      aria-hidden="true"
    >
      <span className="text-[10px] font-bold text-white">{label}</span>
    </span>
  )
}

export default function RightRail() {
  return (
    <aside className="w-[56px] shrink-0 bg-white shadow-[inset_1px_0_0_#edf0f2]">
      <div className="flex flex-col items-center gap-6 py-4">
        <IconButton label="Calendar" icon={<RailIcon bg="#3b82f6" label="31" />} />
        <IconButton label="Keep" icon={<RailIcon bg="#f59e0b" label="•" />} />
        <IconButton label="Tasks" icon={<RailIcon bg="#2563eb" label="✓" />} />
        <IconButton label="Contacts" icon={<RailIcon bg="#60a5fa" label="@" />} />
        <div className="h-px w-8 bg-black/5" />
        <IconButton label="Add" icon={<span className="text-lg text-black/50">+</span>} />
      </div>
    </aside>
  )
}

