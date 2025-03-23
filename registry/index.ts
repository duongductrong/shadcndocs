import { type Registry } from "shadcn/registry"

import { hooks } from "@/registry/registry-hooks"
import { lib } from "@/registry/registry-lib"
import { themes } from "@/registry/registry-themes"
import { ui } from "@/registry/registry-ui"

// import { blocks } from "@/registry/registry-blocks"
// import { charts } from "@/registry/registry-charts"
// import { examples } from "@/registry/registry-examples"
// import { internal } from "@/registry/registry-internal";

export const registry = {
  name: "shadcn/ui",
  homepage: "https://shadcn-docs.vercel.app",
  items: [
    ...ui,
    // ...blocks,
    // ...charts,
    ...lib,
    ...hooks,
    ...themes,

    // Internal use only.
    // ...internal,
    // ...examples,
  ],
} satisfies Registry
