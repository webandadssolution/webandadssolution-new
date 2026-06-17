import type { Metadata } from "next"
import { notFound } from "next/navigation"
import PackagesPage from "../../../views/packages-page"
import { PACKAGE_TYPES, PACKAGE_TYPE_ORDER, CURRENCY } from "../../../data/packages-data"
import type { PackageTypeKey, CurrencyKey } from "../../../types/packages"

type Params = { slug: string }
type PageProps = { params: Promise<Params> }

export function generateStaticParams(): Params[] {
  return PACKAGE_TYPE_ORDER.flatMap((typeKey) =>
    Object.keys(CURRENCY).map((currencyKey) => ({ slug: `${typeKey}-${currencyKey}` }))
  )
}

function parseSlug(slug: string): { typeKey: PackageTypeKey; currencyKey: CurrencyKey } | null {
  const [typeKey, currencyKey] = slug.split("-")
  if (!PACKAGE_TYPES[typeKey as PackageTypeKey] || !CURRENCY[currencyKey as CurrencyKey]) return null
  return { typeKey: typeKey as PackageTypeKey, currencyKey: currencyKey as CurrencyKey }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const parsed = parseSlug(slug)
  if (!parsed) return {}

  const pkg = PACKAGE_TYPES[parsed.typeKey]
  const title = `${pkg.label} Pricing`
  const description = `${pkg.tagline} View ${pkg.label.toLowerCase()} tiers and what's included in each plan.`

  return {
    title,
    description,
    alternates: { canonical: `/package/${slug}` },
    openGraph: {
      title: `${title} | Web and Ads Solutions`,
      description,
      url: `/package/${slug}`,
    },
  }
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  if (!parseSlug(slug)) {
    notFound()
  }

  return <PackagesPage slug={slug} />
}
