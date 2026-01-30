import type { InputHTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  hideOutline?: boolean
}

export default function Input({ className, hideOutline, ...props }: Props) {
  return (
    <input
      className={cn(
        'w-full bg-transparent text-sm placeholder:text-black/35',
        hideOutline ? 'outline-none' : 'focus-visible:outline-none',
        className
      )}
      {...props}
    />
  )
}

