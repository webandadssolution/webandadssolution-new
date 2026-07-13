export type FeatureFn = ((tierIndex: number) => string | null) & { label: string }

// always(text)         -> shown on every tier
// from(tier, text)      -> shown only from tierIndex (0-based) onward
// qty(base, step, unit) -> grows per tier, e.g. qty(5,5,"Keywords") => 5,10,15,20,25
// tierQty(values, unit)  -> explicit per-tier counts for sequences that don't grow by a fixed step
// seq(values)            -> fully explicit per-tier text (or null to exclude)
//
// Each helper also attaches a `.label` — a generic, tier-independent name for the
// row, used by the table comparison view (mobile/tablet). Cards ignore it.
const withLabel = (fn: (i: number) => string | null, label: string): FeatureFn =>
  Object.assign(fn, { label })

export const always = (text: string): FeatureFn => withLabel(() => text, text)
export const from = (tier: number, text: string): FeatureFn =>
  withLabel((i) => (i >= tier ? text : null), text)
export const qty = (base: number, step: number, unit: string): FeatureFn =>
  withLabel((i) => `${base + step * i} ${unit}`, unit)
export const tierQty = (values: number[], unit: string): FeatureFn =>
  withLabel((i) => `${values[i]} ${unit}`, unit)
export const seq = (values: Array<string | null>): FeatureFn =>
  withLabel((i) => values[i] ?? null, values.find((v) => v !== null) ?? "")

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
