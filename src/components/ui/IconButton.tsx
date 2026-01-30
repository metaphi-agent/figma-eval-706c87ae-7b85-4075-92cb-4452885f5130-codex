import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string
  icon: ReactNode
  size?: 'sm' | 'md'
  selected?: boolean
}

export default function IconButton({
  className,
  icon,
  label,
  selected,
  size = 'md',
  type = 'button',
  ...props
}: Props) {
  const dimensionClass = size === 'sm' ? 'size-8' : 'size-10'
  return (
    <button
      type={type}
      aria-label={label}
      className={cn(
        'inline-flex items-center justify-center rounded-full text-[color:var(--gmail-text-black-54)] outline-none',
        'hover:bg-[color:var(--gmail-surface-black-05)]',
        'focus-visible:ring-2 focus-visible:ring-[color:var(--gmail-google-blue)] focus-visible:ring-offset-2',
        selected && 'bg-[color:var(--gmail-surface-black-05)] text-[color:var(--gmail-text-primary)]',
        dimensionClass,
        className
      )}
      {...props}
    >
      {icon}
    </button>
  )
}

