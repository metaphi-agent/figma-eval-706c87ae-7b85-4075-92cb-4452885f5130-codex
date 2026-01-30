import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import TopBar from '../components/gmail/TopBar'
import SideNav from '../components/gmail/SideNav'
import EmailToolbar from '../components/gmail/EmailToolbar'
import EmailView from '../components/gmail/EmailView'
import RightRail from '../components/gmail/RightRail'
import ComposePopover from '../components/gmail/ComposePopover'
import { cn } from '../lib/cn'

type FrameVariant = 'single' | 'multiple' | 'subscription'

function FrameSwitcher({ current }: { current: FrameVariant }) {
  const items: Array<{ to: string; label: string; key: FrameVariant }> = [
    { to: '/single', label: 'Single', key: 'single' },
    { to: '/multiple', label: 'Multiple', key: 'multiple' },
    { to: '/subscription', label: 'Subscription', key: 'subscription' },
  ]
  return (
    <div className="fixed bottom-4 left-4 z-50 hidden gap-1 rounded-lg border border-black/10 bg-white/90 p-1 shadow-sm backdrop-blur sm:flex">
      {items.map((it) => (
        <Link
          key={it.key}
          to={it.to}
          className={cn(
            'rounded-md px-3 py-1 text-xs font-medium text-black/60 hover:bg-black/5',
            current === it.key && 'bg-black/5 text-[color:var(--gmail-text-primary)]'
          )}
        >
          {it.label}
        </Link>
      ))}
    </div>
  )
}

export default function GmailFrame({
  variant,
  defaultCompose = 'none',
}: {
  variant: FrameVariant
  defaultCompose?: 'none' | 'popover' | 'popover+min'
}) {
  const [selectedNav, setSelectedNav] = useState('inbox')
  const [composeMode, setComposeMode] = useState<'closed' | 'popover' | 'minimized'>(() => {
    if (defaultCompose === 'popover') return 'popover'
    if (defaultCompose === 'popover+min') return 'popover'
    return 'closed'
  })
  const showBottomStub = defaultCompose === 'popover+min'

  const showCompose = composeMode !== 'closed'

  const showMinimizedStub = useMemo(() => {
    return showBottomStub && composeMode === 'popover'
  }, [composeMode, showBottomStub])

  return (
    <div className="min-h-screen bg-white">
      <TopBar />

      <div className="flex">
        <SideNav
          selectedKey={selectedNav}
          onSelect={setSelectedNav}
          onCompose={() => setComposeMode('popover')}
        />

        <div className="flex min-w-0 flex-1 flex-col">
          <EmailToolbar />
          <EmailView variant={variant} />
        </div>

        <RightRail />
      </div>

      <FrameSwitcher current={variant} />

      {showCompose ? (
        <ComposePopover
          mode={composeMode === 'minimized' ? 'minimized' : 'popover'}
          showBottomStub={showMinimizedStub}
          onToggleMinimize={() =>
            setComposeMode((m) => (m === 'minimized' ? 'popover' : 'minimized'))
          }
          onClose={() => setComposeMode('closed')}
        />
      ) : null}
    </div>
  )
}

