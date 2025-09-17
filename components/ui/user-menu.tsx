"use client"
import React from "react"
import { createPortal } from "react-dom"
import { User, LogOut } from "lucide-react"

export default function UserMenu({ userName, onSignOut }: { userName: string, onSignOut: () => void }) {
  const [open, setOpen] = React.useState(false)
  const menuRef = React.useRef<HTMLDivElement>(null)
  const [menuPosition, setMenuPosition] = React.useState<{ top: number; left: number } | null>(null)

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setOpen((o) => !o)
    if (!open) {
      const rect = e.currentTarget.getBoundingClientRect()
      setMenuPosition({
        top: rect.bottom + window.scrollY,
        left: rect.right - 192 + window.scrollX // 192px is menu width
      })
    }
  }

  return (
    <div className="relative" ref={menuRef}>
      <button
        className="flex items-center justify-center w-9 h-9 focus:outline-none"
        onClick={handleButtonClick}
        aria-label="Open user menu"
        type="button"
      >
        {/* Simple black vertical 3 dots icon */}
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="11" cy="5.5" r="2" fill="#222" />
          <circle cx="11" cy="11" r="2" fill="#222" />
          <circle cx="11" cy="16.5" r="2" fill="#222" />
        </svg>
      </button>
      {open && menuPosition && createPortal(
        <div
          style={{ position: "absolute", top: menuPosition.top, left: menuPosition.left, width: 192, zIndex: 9999 }}
          className="bg-background border border-border rounded-lg shadow-lg"
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
            <User className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs sm:text-sm font-medium text-foreground truncate">{userName}</span>
          </div>
          <button
            onClick={onSignOut}
            className="flex items-center gap-2 w-full text-xs sm:text-sm text-muted-foreground hover:text-primary py-2 px-4 rounded transition-colors text-left"
          >
            <LogOut className="h-4 w-4" />
            Sign Out
          </button>
        </div>,
        document.body
      )}
    </div>
  )
}
