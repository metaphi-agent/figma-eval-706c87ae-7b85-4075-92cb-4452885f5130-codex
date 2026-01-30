import { cn } from '../../lib/cn'

export default function Divider({ className }: { className?: string }) {
  return <div className={cn('h-px w-full bg-black/5', className)} aria-hidden="true" />
}

