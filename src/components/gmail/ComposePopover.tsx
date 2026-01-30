import { useMemo, useState } from 'react'
import { cn } from '../../lib/cn'
import PrimaryButton from '../ui/PrimaryButton'
import IconButton from '../ui/IconButton'
import IconImg from '../ui/IconImg'
import Input from '../ui/Input'

type Mode = 'popover' | 'minimized'

export default function ComposePopover({
  mode,
  onClose,
  onToggleMinimize,
  showBottomStub,
}: {
  mode: Mode
  onClose: () => void
  onToggleMinimize: () => void
  showBottomStub?: boolean
}) {
  const [to, setTo] = useState('')
  const [subject, setSubject] = useState('')
  const [body, setBody] = useState('')

  const title = useMemo(() => (mode === 'minimized' ? 'New Message' : 'New Message'), [mode])

  if (mode === 'minimized') {
    return (
      <div className="pointer-events-auto fixed bottom-4 left-1/2 z-40 w-[260px] -translate-x-1/2">
        <div className="flex h-10 items-center justify-between rounded-t bg-[#3c4043] px-3 text-sm font-medium text-white">
          <span>{title}</span>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={onToggleMinimize}
              className="grid size-7 place-items-center rounded hover:bg-white/10"
              aria-label="Expand"
            >
              <IconImg src="./assets/icons/compose-minimize-expand.svg" alt="" className="size-4 invert" />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="grid size-7 place-items-center rounded hover:bg-white/10"
              aria-label="Close"
            >
              <IconImg src="./assets/icons/compose-close.svg" alt="" className="size-4 invert" />
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {showBottomStub ? (
        <div className="pointer-events-none fixed bottom-0 left-0 z-30 w-full">
          <div className="mx-auto mb-2 w-[260px] rounded-t bg-[#3c4043] px-3 py-2 text-xs text-white/90">
            New Message
          </div>
        </div>
      ) : null}

      <div className="pointer-events-auto fixed bottom-0 right-6 z-40 w-[600px] overflow-hidden rounded-t-lg bg-white shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
        <div className="flex h-10 items-center justify-between bg-[#3c4043] px-3 text-sm font-medium text-white">
          <span>{title}</span>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={onToggleMinimize}
              className="grid size-7 place-items-center rounded hover:bg-white/10"
              aria-label="Minimize"
            >
              <IconImg src="./assets/icons/compose-minimize.svg" alt="" className="size-4 invert" />
            </button>
            <button
              type="button"
              className="grid size-7 place-items-center rounded hover:bg-white/10"
              aria-label="Open in new window"
            >
              <IconImg src="./assets/icons/compose-open-in.svg" alt="" className="size-4 invert" />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="grid size-7 place-items-center rounded hover:bg-white/10"
              aria-label="Close"
            >
              <IconImg src="./assets/icons/compose-close.svg" alt="" className="size-4 invert" />
            </button>
          </div>
        </div>

        <div className="border-b border-black/5 px-4 py-2">
          <div className="flex items-center gap-2">
            <Input
              value={to}
              onChange={(e) => setTo(e.target.value)}
              placeholder="Recipients"
              hideOutline
            />
            <div className="text-xs text-black/45">Cc Bcc</div>
          </div>
        </div>
        <div className="border-b border-black/5 px-4 py-2">
          <Input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject"
            hideOutline
          />
        </div>
        <div className="h-[360px] px-4 py-3">
          <label className="sr-only" htmlFor="compose-body">
            Message body
          </label>
          <textarea
            id="compose-body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Body Text"
            className={cn(
              'h-full w-full resize-none bg-transparent text-sm outline-none',
              'placeholder:text-black/35'
            )}
          />
        </div>

        <div className="flex items-center gap-2 px-4 pb-4 pt-2">
          <PrimaryButton className="h-9 rounded-md px-4">Send</PrimaryButton>
          <div className="ml-1 flex items-center gap-1 text-black/55">
            <IconButton label="Text formatting" icon={<IconImg src="./assets/icons/text-format.svg" alt="" />} size="sm" />
            <IconButton label="Attach files" icon={<IconImg src="./assets/icons/attach-file.svg" alt="" />} size="sm" />
            <IconButton label="Insert photo" icon={<IconImg src="./assets/icons/image.svg" alt="" />} size="sm" />
          </div>
          <div className="ml-auto flex items-center gap-1">
            <IconButton label="More options" icon={<span className="text-black/50">⋮</span>} size="sm" />
            <IconButton label="Trash" icon={<IconImg src="./assets/icons/delete.svg" alt="" />} size="sm" />
          </div>
        </div>
      </div>
    </>
  )
}

