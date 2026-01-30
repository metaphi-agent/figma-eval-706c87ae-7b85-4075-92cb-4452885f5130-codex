import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: ReactNode
}

export default function PrimaryButton({ className, icon, type = 'button', ...props }: Props) {
  return (
    <button
      type={type}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-md px-6 py-2 text-sm font-medium',
        'bg-[color:var(--gmail-google-blue)] text-white',
        'hover:brightness-95 active:brightness-90',
        'disabled:cursor-not-allowed disabled:opacity-60',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--gmail-google-blue)] focus-visible:ring-offset-2',
        className
      )}
      {...props}
    >
      {icon}
      {props.children}
    </button>
  )
}

