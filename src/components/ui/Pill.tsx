import type { ButtonHTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  active?: boolean
}

export default function Pill({ className, active, type = 'button', ...props }: Props) {
  return (
    <button
      type={type}
      className={cn(
        'inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium',
        'border border-black/10 bg-white text-[color:var(--gmail-text-black-54)]',
        'hover:bg-black/5',
        active && 'bg-black/5 text-[color:var(--gmail-text-primary)]',
        className
      )}
      {...props}
    />
  )
}

