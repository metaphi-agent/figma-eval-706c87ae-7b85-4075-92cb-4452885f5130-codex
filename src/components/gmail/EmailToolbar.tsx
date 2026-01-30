import IconButton from '../ui/IconButton'
import IconImg from '../ui/IconImg'

export default function EmailToolbar() {
  return (
    <div className="flex h-12 items-center gap-1 px-2">
      <IconButton label="Back" icon={<IconImg src="./assets/icons/back.svg" alt="" />} />

      <div className="ml-1 flex items-center gap-1">
        <IconButton label="Archive" icon={<img src="./assets/icons/archive.png" alt="" className="block size-5" />} />
        <IconButton label="Snooze" icon={<img src="./assets/icons/snooze.png" alt="" className="block size-5" />} />
        <IconButton
          label="Mark as unread"
          icon={<img src="./assets/icons/mark-unread.png" alt="" className="block size-5" />}
        />
        <IconButton label="Move to" icon={<IconImg src="./assets/icons/move-to.svg" alt="" />} />
        <IconButton label="Add to tasks" icon={<IconImg src="./assets/icons/add-to-task.svg" alt="" />} />
      </div>

      <div className="ml-auto flex items-center gap-2">
        <span className="text-xs text-black/45">1–50 of 2,619</span>
        <IconButton label="Older" icon={<span className="text-black/60">‹</span>} />
        <IconButton label="Newer" icon={<span className="text-black/60">›</span>} />
      </div>
    </div>
  )
}

