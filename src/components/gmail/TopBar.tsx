import { useMemo, useState } from 'react'
import { Search, ChevronDown } from 'lucide-react'
import IconButton from '../ui/IconButton'
import { cn } from '../../lib/cn'
import IconImg from '../ui/IconImg'

function GmailMark() {
  return (
    <div className="flex items-center gap-2">
      <div className="grid size-8 place-items-center rounded bg-white">
        <span className="text-lg font-black">
          <span className="text-[color:var(--gmail-google-blue)]">M</span>
        </span>
      </div>
      <span className="text-lg font-medium text-black/70">Gmail</span>
    </div>
  )
}

export default function TopBar({
  onToggleNav,
  searchPlaceholder = 'Search mail',
}: {
  onToggleNav?: () => void
  searchPlaceholder?: string
}) {
  const [query, setQuery] = useState('')
  const clearVisible = query.trim().length > 0

  const inputAria = useMemo(() => {
    return clearVisible ? 'Search mail, has text' : 'Search mail'
  }, [clearVisible])

  return (
    <header className="sticky top-0 z-30 w-full bg-white">
      <div className="flex h-16 items-center gap-3 px-4">
        <IconButton
          label="Open main menu"
          icon={<IconImg src="./assets/icons/menu.svg" alt="" />}
          onClick={onToggleNav}
        />
        <GmailMark />

        <div className="mx-4 flex flex-1 items-center">
          <div
            className={cn(
              'flex w-full max-w-[720px] items-center gap-3 rounded-full bg-[#f1f3f4] px-4 py-2',
              'text-[color:var(--gmail-text-primary)]'
            )}
          >
            <Search className="size-5 text-black/60" aria-hidden="true" />
            <label className="sr-only" htmlFor="gmail-search">
              {inputAria}
            </label>
            <input
              id="gmail-search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={searchPlaceholder}
              className="w-full bg-transparent text-sm outline-none placeholder:text-black/40"
            />
            <button
              type="button"
              aria-label="Search options"
              className="grid size-8 place-items-center rounded-full hover:bg-black/5"
            >
              <ChevronDown className="size-4 text-black/50" />
            </button>
          </div>
        </div>

        <div className="ml-auto flex items-center gap-1">
          <IconButton label="Help" icon={<IconImg src="./assets/icons/help.svg" alt="" />} />
          <IconButton label="Settings" icon={<IconImg src="./assets/icons/settings.svg" alt="" />} />
          <IconButton label="Google apps" icon={<IconImg src="./assets/icons/apps.svg" alt="" />} />

          <button
            type="button"
            aria-label="Account"
            className="ml-2 inline-flex size-10 items-center justify-center rounded-full border border-black/10 bg-white"
          >
            <span className="text-sm font-semibold text-black/70">MR</span>
          </button>
        </div>
      </div>
      <div className="h-px w-full bg-black/5" />
    </header>
  )
}
