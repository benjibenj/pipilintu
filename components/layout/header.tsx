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
import { NAV_ITEMS } from "@/lib/constants"
import { cn } from "@/lib/utils"

type HeaderProps = {
  className?: string
}

export function Header({ className }: HeaderProps) {
  const [open, setOpen] = useState(false)

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-sm",
        className
      )}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="font-heading text-lg tracking-widest text-foreground uppercase transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Pipilintu
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Navigation principale"
          className="hidden items-center gap-1 lg:flex"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile navigation */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                aria-label="Ouvrir le menu"
              />
            }
          >
            <Menu aria-hidden="true" />
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:max-w-xs">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <nav aria-label="Navigation mobile" className="flex flex-col gap-1 px-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-base text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
