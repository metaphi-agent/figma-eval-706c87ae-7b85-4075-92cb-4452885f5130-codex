import { cn } from '../../lib/cn'

export default function IconImg({
  src,
  className,
  alt = '',
}: {
  src: string
  className?: string
  alt?: string
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={cn('block size-5 select-none', className)}
      draggable={false}
    />
  )
}

