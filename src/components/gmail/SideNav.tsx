import { useMemo, type ReactNode } from 'react'
import {
  Tag,
  ChevronDown,
  Video,
  Mail,
  Users,
} from 'lucide-react'
import { cn } from '../../lib/cn'
import Divider from '../ui/Divider'
import IconImg from '../ui/IconImg'

type NavItem = {
  key: string
  label: string
  icon: ReactNode
  count?: number
  selected?: boolean
  unread?: boolean
}

function SideNavRow({ item }: { item: NavItem }) {
  return (
    <button
      type="button"
      className={cn(
        'flex h-9 w-full items-center gap-3 rounded-r-full pl-6 pr-3 text-sm',
        'text-[color:var(--gmail-text-black-54)]',
        'hover:bg-black/5',
        item.selected && 'bg-[color:var(--gmail-sidebar-inbox-bg)] text-[color:var(--gmail-sidebar-inbox-text)]'
      )}
    >
      <span className={cn('shrink-0 opacity-70', item.selected && 'opacity-100')}>{item.icon}</span>
      <span className={cn('truncate', item.unread && 'font-semibold')}>{item.label}</span>
      {typeof item.count === 'number' ? (
        <span className={cn('ml-auto text-xs', item.selected ? 'text-[color:var(--gmail-sidebar-inbox-text)]' : 'text-black/45')}>
          {item.count}
        </span>
      ) : null}
    </button>
  )
}

function SectionTitle({ children }: { children: string }) {
  return (
    <div className="px-6 py-2 text-xs font-semibold text-black/55">
      {children}
    </div>
  )
}

export default function SideNav({
  selectedKey = 'inbox',
  onSelect,
  onCompose,
}: {
  selectedKey?: string
  onSelect?: (key: string) => void
  onCompose?: () => void
}) {
  const items = useMemo<NavItem[]>(
    () => [
      {
        key: 'inbox',
        label: 'Inbox',
        icon: <IconImg src="./assets/icons/nav-inbox.svg" alt="" className="size-4" />,
        count: 3,
        selected: selectedKey === 'inbox',
        unread: true,
      },
      {
        key: 'starred',
        label: 'Starred',
        icon: <IconImg src="./assets/icons/nav-star.svg" alt="" className="size-4" />,
        selected: selectedKey === 'starred',
      },
      {
        key: 'snoozed',
        label: 'Snoozed',
        icon: <IconImg src="./assets/icons/nav-snooze.svg" alt="" className="size-4" />,
        selected: selectedKey === 'snoozed',
      },
      {
        key: 'sent',
        label: 'Sent',
        icon: <IconImg src="./assets/icons/nav-sent.svg" alt="" className="size-4" />,
        selected: selectedKey === 'sent',
      },
      {
        key: 'drafts',
        label: 'Drafts',
        icon: <IconImg src="./assets/icons/nav-draft.svg" alt="" className="size-4" />,
        count: 1,
        selected: selectedKey === 'drafts',
        unread: true,
      },
      {
        key: 'spam',
        label: 'Spam',
        icon: <IconImg src="./assets/icons/nav-spam.svg" alt="" className="size-4" />,
        count: 3,
        selected: selectedKey === 'spam',
      },
      {
        key: 'trash',
        label: 'Trash',
        icon: <IconImg src="./assets/icons/nav-trash.svg" alt="" className="size-4" />,
        selected: selectedKey === 'trash',
      },
    ],
    [selectedKey]
  )

  return (
    <aside className="w-[256px] shrink-0 bg-white">
      <div className="px-6 py-4">
        <button
          type="button"
          onClick={onCompose}
          className={cn(
            'inline-flex h-12 items-center gap-3 rounded-full bg-white px-4 text-sm font-medium',
            'border border-black/10 shadow-sm',
            'hover:bg-black/5 active:bg-black/10'
          )}
        >
          <span className="grid size-8 place-items-center rounded-full bg-white">
            <span className="text-xl font-semibold text-[color:var(--gmail-google-blue)]">+</span>
          </span>
          Compose
        </button>
      </div>

      <nav className="flex flex-col gap-0.5">
        {items.map((it) => (
          <button
            key={it.key}
            type="button"
            onClick={() => onSelect?.(it.key)}
            className="contents"
          >
            <SideNavRow item={it} />
          </button>
        ))}

        <div className="mt-3 px-6">
          <Divider />
        </div>

        <div className="mt-2">
          <SectionTitle>Categories</SectionTitle>
          <button
            type="button"
            className="flex h-9 w-full items-center gap-3 rounded-r-full pl-6 pr-3 text-sm text-[color:var(--gmail-text-black-54)] hover:bg-black/5"
          >
            <Tag className="size-4 text-black/60" />
            <span className="font-semibold text-[color:var(--gmail-text-primary)]">Categories</span>
            <ChevronDown className="ml-auto size-4 text-black/50" />
          </button>
          <button
            type="button"
            className="flex h-9 w-full items-center gap-3 rounded-r-full pl-6 pr-3 text-sm text-[color:var(--gmail-text-black-54)] hover:bg-black/5"
          >
            <Users className="size-4 text-black/60" />
            More
          </button>
        </div>

        <div className="mt-3 px-6">
          <Divider />
        </div>

        <div className="mt-2">
          <SectionTitle>Meet</SectionTitle>
          <button
            type="button"
            className="flex h-9 w-full items-center gap-3 rounded-r-full pl-6 pr-3 text-sm text-[color:var(--gmail-text-black-54)] hover:bg-black/5"
          >
            <Video className="size-4 text-black/60" />
            New meeting
          </button>
          <button
            type="button"
            className="flex h-9 w-full items-center gap-3 rounded-r-full pl-6 pr-3 text-sm text-[color:var(--gmail-text-black-54)] hover:bg-black/5"
          >
            <Mail className="size-4 text-black/60" />
            Join a meeting
          </button>
        </div>

        <div className="mt-3 px-6">
          <Divider />
        </div>

        <div className="mt-4 px-6">
          <button
            type="button"
            className="w-full rounded-sm bg-[#4f7fe3] px-4 py-2 text-sm font-medium text-white hover:brightness-95"
          >
            Sign in
          </button>
        </div>
      </nav>
    </aside>
  )
}
