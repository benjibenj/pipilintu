"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

type MobileNavProps = {
  items: { href: string; label: string }[]
  labels: { menu: string; openMenu: string; mobileNav: string }
  /** Language switcher, rendered under the links */
  children?: React.ReactNode
}

export function MobileNav({ items, labels, children }: MobileNavProps) {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label={labels.openMenu}
          />
        }
      >
        <Menu aria-hidden="true" />
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:max-w-xs">
        <SheetHeader>
          <SheetTitle className="font-section tracking-wide">
            {labels.menu}
          </SheetTitle>
        </SheetHeader>
        <nav aria-label={labels.mobileNav} className="flex flex-col gap-1 px-4">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-3 text-base text-foreground transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-4 border-t border-border/60 px-5 pt-4">
          {children}
        </div>
      </SheetContent>
    </Sheet>
  )
}
