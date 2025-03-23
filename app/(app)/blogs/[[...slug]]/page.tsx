import { allBlogs } from "contentlayer/generated"
import { notFound } from "next/navigation"

import "@/styles/mdx.css"
import { ChevronRight } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"
import Balancer from "react-wrap-balancer"

import { Mdx } from "@/components/mdx-components"
import { DashboardTableOfContents } from "@/components/toc"
import { getTableOfContents } from "@/lib/toc"
import { absoluteUrl, cn } from "@/lib/utils"

interface BlogPageProps {
  params: {
    slug: string[]
  }
}

async function getBlogFromParams({ params }: BlogPageProps) {
  const slug = params.slug?.join("/") || ""
  const blog = allBlogs.find((blog) => blog.slugAsParams === slug)

  if (!blog) {
    return null
  }

  return blog
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const blog = await getBlogFromParams({ params })

  if (!blog) {
    return {}
  }

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      type: "article",
      url: absoluteUrl(blog.slug),
      images: [
        {
          url: `/og?title=${encodeURIComponent(blog.title)}&description=${encodeURIComponent(
            blog.description
          )}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: [
        {
          url: `/og?title=${encodeURIComponent(blog.title)}&description=${encodeURIComponent(
            blog.description
          )}`,
        },
      ],
      creator: "@shadcn",
    },
  }
}

export async function generateStaticParams(): Promise<BlogPageProps["params"][]> {
  return allBlogs.map((blog) => ({
    slug: blog.slugAsParams.split("/"),
  }))
}

export default async function BlogPage({ params }: BlogPageProps) {
  const blog = await getBlogFromParams({ params })

  if (!blog) {
    notFound()
  }

  const toc = await getTableOfContents(blog.body.raw)

  return (
    <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0 max-w-2xl">
        <div className="mb-4 flex items-center space-x-1 text-sm leading-none text-muted-foreground">
          <Link href="/docs" className="truncate">
            Blogs
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <div className="text-foreground">{blog.title}</div>
        </div>
        <div className="space-y-2">
          <h1 className={cn("scroll-m-20 text-3xl font-bold tracking-tight")}>{blog.title}</h1>
          {blog.description && (
            <p className="text-base text-muted-foreground">
              <Balancer>{blog.description}</Balancer>
            </p>
          )}
        </div>
        <div className="pb-12 pt-8">
          <Mdx code={blog.body.code} />
        </div>
        {/* <DocsPager doc={blog} /> */}
      </div>
      <div className="hidden text-sm xl:block">
        <div className="sticky top-20 -mt-6 h-[calc(100vh-3.5rem)] pt-4">
          <div className="no-scrollbar h-full overflow-auto pb-10">
            {blog.toc && <DashboardTableOfContents toc={toc} />}
          </div>
        </div>
      </div>
    </main>
  )
}
