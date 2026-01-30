import { cn } from '../../lib/cn'

const presets: Record<
  string,
  { bg: string; text: string }
> = {
  Inbox: { bg: 'var(--gmail-sidebar-inbox-bg)', text: 'var(--gmail-sidebar-inbox-text)' },
  Promotions: { bg: '#c9e8ef', text: '#1f6f7a' },
  Social: { bg: 'var(--gmail-badge-social)', text: '#fff' },
  Forums: { bg: 'var(--gmail-badge-forums)', text: '#fff' },
  Updates: { bg: 'var(--gmail-badge-updates)', text: '#fff' },
}

export default function CategoryBadge({
  label,
  className,
}: {
  label: keyof typeof presets | string
  className?: string
}) {
  const preset = presets[label] ?? { bg: 'rgba(0,0,0,0.08)', text: 'rgba(0,0,0,0.60)' }
  return (
    <span
      className={cn(
        'inline-flex items-center rounded px-2 py-0.5 text-xs font-medium',
        className
      )}
      style={{ background: preset.bg, color: preset.text }}
    >
      {label}
    </span>
  )
}

