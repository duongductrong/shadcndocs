import { MainNavItem, SidebarNavItem } from "types/nav"

export interface DocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
  chartsNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Docs",
      href: "/docs",
    },
    {
      title: "Blog",
      href: "/blogs/hello-world",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          items: [],
        },
        {
          title: "Installation",
          href: "/docs/installation",
          items: [],
        },
        {
          title: "MDX",
          href: "/docs/mdx",
          items: [],
        },
        {
          title: "Changelog",
          href: "/docs/changelog",
          items: [],
        },
      ],
    },
    {
      title: "Guides",
      items: [
        {
          title: "Writing Docs",
          href: "/docs/writing-docs",
          items: [],
        },
        {
          title: "Components",
          href: "/docs/docs-components",
          items: [],
        },
        {
          title: "Mavigation",
          href: "/docs/docs-config",
          items: [],
        },
        {
          title: "Metadata",
          href: "/docs/site-config",
          items: [],
        },
      ],
    },
  ],
  chartsNav: [],
  // chartsNav: [
  //   {
  //     title: "Getting Started",
  //     items: [
  //       {
  //         title: "Introduction",
  //         href: "/docs/charts",
  //         items: [],
  //       },
  //       {
  //         title: "Installation",
  //         href: "/docs/charts/installation",
  //         items: [],
  //       },
  //       {
  //         title: "Theming",
  //         href: "/docs/charts/theming",
  //         items: [],
  //       },
  //     ],
  //   },
  //   {
  //     title: "Charts",
  //     items: [
  //       {
  //         title: "Area Chart",
  //         href: "/docs/charts/area",
  //         items: [],
  //       },
  //       {
  //         title: "Bar Chart",
  //         href: "/docs/charts/bar",
  //         items: [],
  //       },
  //       {
  //         title: "Line Chart",
  //         href: "/docs/charts/line",
  //         items: [],
  //       },
  //       {
  //         title: "Pie Chart",
  //         href: "/docs/charts/pie",
  //         items: [],
  //       },
  //       {
  //         title: "Radar Chart",
  //         href: "/docs/charts/radar",
  //         items: [],
  //       },
  //       {
  //         title: "Radial Chart",
  //         href: "/docs/charts/radial",
  //         items: [],
  //       },
  //     ],
  //   },
  //   {
  //     title: "Components",
  //     items: [
  //       {
  //         title: "Tooltip",
  //         href: "/docs/charts/tooltip",
  //         items: [],
  //       },
  //       {
  //         title: "Legend",
  //         href: "/docs/charts/legend",
  //         items: [],
  //       },
  //     ],
  //   },
  // ],
}
