import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: ReactNode
  label: string
}

export default function SoftButton({ className, icon, label, type = 'button', ...props }: Props) {
  return (
    <button
      type={type}
      className={cn(
        'inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm',
        'border border-black/10 bg-white text-[color:var(--gmail-text-black-54)]',
        'hover:bg-black/5 hover:text-[color:var(--gmail-text-primary)]',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--gmail-google-blue)] focus-visible:ring-offset-2',
        className
      )}
      {...props}
    >
      {icon}
      <span className="font-medium">{label}</span>
    </button>
  )
}

