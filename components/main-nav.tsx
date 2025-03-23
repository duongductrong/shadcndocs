"use client"

import Link from "next/link"

import { Icons } from "@/components/icons"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import { docsConfig } from "@/config/docs"

const navItems = [
  {
    title: "Docs",
    href: "/docs/installation",
    isActive: (pathname: string) => pathname === "/docs/installation",
  },
  {
    title: "Components",
    href: "/docs/components",
    isActive: (pathname: string) =>
      pathname?.startsWith("/docs/components") && !pathname?.startsWith("/docs/component/chart"),
  },
  {
    title: "Blocks",
    href: "/blocks",
    isActive: (pathname: string) => pathname?.startsWith("/blocks"),
  },
  {
    title: "Charts",
    href: "/charts",
    isActive: (pathname: string) =>
      pathname?.startsWith("/docs/component/chart") || pathname?.startsWith("/charts"),
  },
  {
    title: "Themes",
    href: "/themes",
    isActive: (pathname: string) => pathname?.startsWith("/themes"),
  },
  {
    title: "Colors",
    href: "/colors",
    isActive: (pathname: string) => pathname?.startsWith("/colors"),
  },
]

export function MainNav() {
  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold lg:inline-block">{siteConfig.name}</span>
      </Link>
      <nav className="flex items-center gap-4 text-sm xl:gap-6">
        {docsConfig.mainNav.map((item) => (
          <Link
            key={item.href}
            href={item.href ?? ""}
            className={cn(
              "transition-colors hover:text-foreground/80"
              // item.isActive(pathname ?? "")
              //   ? "text-foreground"
              //   : "text-foreground/80"
            )}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  )
}
