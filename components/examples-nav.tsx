"use client"

import { cn } from "@/lib/utils"
import { ScrollArea, ScrollBar } from "@/registry/new-york/ui/scroll-area"

interface ExamplesNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ExamplesNav({ className, ...props }: ExamplesNavProps) {
  return (
    <div {...props} className={cn(className)}>
      <ScrollArea className="max-w-[600px] lg:max-w-none">
        examples-nav.tsx
        <ScrollBar orientation="horizontal" className="invisible" />
      </ScrollArea>
    </div>
  )
}
