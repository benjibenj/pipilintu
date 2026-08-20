import Link from "next/link"

import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { SkipLink } from "@/components/layout/skip-link"
import { Button } from "@/components/ui/button"
import { siteContent } from "@/lib/content/site.fr"

export default function BlogPage() {
  const { blog } = siteContent

  return (
    <>
      <SkipLink />
      <Header />
      <main
        id="main-content"
        className="mx-auto flex min-h-[60svh] max-w-5xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6"
      >
        <h1 className="font-heading text-3xl tracking-wide md:text-4xl">
          {blog.stubTitle}
        </h1>
        <p className="mt-4 max-w-md text-muted-foreground">
          {blog.stubDescription}
        </p>
        <Button render={<Link href="/" />} className="mt-8" size="lg">
          {blog.backHome}
        </Button>
      </main>
      <Footer />
    </>
  )
}
