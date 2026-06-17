export type PackageTypeKey = "seo" | "smo" | "web" | "ppc"

export type CurrencyKey = "usd" | "gbp" | "euro"

export type FeatureFn = (tierIndex: number) => string | null

export interface PackageTier {
  name: string
  priceUSD: number
  badge?: string
}

export interface PackageCategory {
  name: string
  items: FeatureFn[]
}

export interface PackageType {
  label: string
  tagline: string
  tiers: PackageTier[]
  categories: PackageCategory[]
}

export interface CurrencyInfo {
  code: string
  symbol: string
  rate: number
}
