import type { Metadata } from "next"
import BlogPage from "../../views/blog-page"

export const metadata: Metadata = {
  title: "Blog | Insights on SEO, PPC, and Digital Marketing",
  description:
    "Data-backed articles on SEO, PPC, social media, content marketing, and web development from the Web and Ads Solutions team.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | Web and Ads Solutions",
    description:
      "Data-backed articles on SEO, PPC, social media, content marketing, and web development from the Web and Ads Solutions team.",
    url: "/blog",
  },
}

export default function Page() {
  return <BlogPage />
}
