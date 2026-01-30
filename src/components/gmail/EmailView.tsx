import { Star, ChevronRight } from 'lucide-react'
import CategoryBadge from './CategoryBadge'
import Divider from '../ui/Divider'
import SoftButton from '../ui/SoftButton'
import IconImg from '../ui/IconImg'

type Variant = 'single' | 'multiple' | 'subscription'

const quickReplies = ['Looking forward to it!', 'We will be there!', 'Thanks for the update!']

export default function EmailView({ variant }: { variant: Variant }) {
  const showReplyAll = variant !== 'single'
  const showPromo = variant === 'subscription'

  return (
    <main className="flex min-w-0 flex-1 flex-col bg-white">
      <div className="flex min-h-0 flex-1 flex-col">
        <div className="mx-auto w-full max-w-[1120px] flex-1 pl-[70px] pr-5 pt-3">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-normal text-[color:var(--gmail-text-primary)]">Email Subject</h1>
            <ChevronRight className="size-4 text-black/35" />
            <CategoryBadge label="Inbox" />
            {showPromo ? <CategoryBadge label="Promotions" /> : null}
            <div className="ml-auto flex items-center gap-2 text-black/45">
              <button type="button" className="rounded-full p-2 hover:bg-black/5" aria-label="Print">
                <IconImg src="./assets/icons/print.svg" alt="" className="size-4 opacity-70" />
              </button>
              <button type="button" className="rounded-full p-2 hover:bg-black/5" aria-label="Open in new">
                <IconImg src="./assets/icons/open-in-new.svg" alt="" className="size-4 opacity-70" />
              </button>
            </div>
          </div>

          <Divider className="mt-3" />

          <div className="flex items-start gap-3 pt-3">
            <div className="grid size-10 place-items-center rounded-full bg-black/5 text-sm font-semibold text-black/45">
              MR
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 text-sm">
                <span className="font-semibold text-black/70">Michelle Rivera</span>
                <span className="truncate text-black/45">&lt;michelle.rivera@example.com&gt;</span>
                <button type="button" className="text-xs text-black/35 hover:underline">
                  Unsubscribe
                </button>
                <div className="ml-auto flex items-center gap-2 text-xs text-black/45">
                  9:14 AM (8 hours ago)
                  <button type="button" className="rounded-full p-2 hover:bg-black/5" aria-label="Star">
                    <Star className="size-4" />
                  </button>
                </div>
              </div>
              <div className="mt-0.5 text-xs text-black/45">
                {variant === 'single' ? 'to me' : 'to me, Sidney, Sharon'}
              </div>
            </div>
          </div>

          <div className="mt-4 text-sm leading-6 text-black/65">
            <p>
              Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit
              dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute
              id deserunt nisi.
            </p>
          </div>

          {variant === 'subscription' ? (
            <div className="mt-6 rounded bg-[#f0f0f0] p-10">
              <div className="mx-auto grid h-[420px] max-w-[560px] place-items-center rounded bg-white text-sm font-semibold text-black/65">
                Design Your Email Here
              </div>
            </div>
          ) : null}

          <div className="mt-10 flex items-center justify-center gap-3">
            {quickReplies.map((text) => (
              <button
                key={text}
                type="button"
                className="rounded border border-[#d2e3fc] bg-white px-4 py-2 text-sm font-medium text-[color:var(--gmail-google-blue)] hover:bg-[#f6f9fe]"
              >
                {text}
              </button>
            ))}
          </div>

          <Divider className="mt-8" />

          <div className="mt-6 flex items-center gap-3">
            <SoftButton label="Reply" />
            {showReplyAll ? <SoftButton label="Reply all" /> : null}
            <SoftButton label="Forward" />
          </div>
        </div>
      </div>
    </main>
  )
}
