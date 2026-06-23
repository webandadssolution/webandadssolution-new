export type FeatureFn = (tierIndex: number) => string | null

// always(text)         -> shown on every tier
// from(tier, text)      -> shown only from tierIndex (0-based) onward
// qty(base, step, unit) -> grows per tier, e.g. qty(5,5,"Keywords") => 5,10,15,20,25
// tierQty(values, unit)  -> explicit per-tier counts for sequences that don't grow by a fixed step
// seq(values)            -> fully explicit per-tier text (or null to exclude)
export const always = (text: string): FeatureFn => () => text
export const from = (tier: number, text: string): FeatureFn => (i) => (i >= tier ? text : null)
export const qty = (base: number, step: number, unit: string): FeatureFn => (i) => `${base + step * i} ${unit}`
export const tierQty = (values: number[], unit: string): FeatureFn => (i) => `${values[i]} ${unit}`
export const seq = (values: Array<string | null>): FeatureFn => (i) => values[i] ?? null

export interface PricingTier {
  name: string
  priceUSD: number
  badge?: string
  checkoutUrl?: string
  tagline?: string
  highlights?: { value: string; label: string }[]
  pricePeriod?: string
}

export interface PricingCategory {
  name: string
  items: FeatureFn[]
}
