import Link from "next/link"
import PasswordGate from "../components/password-gate"
import ContactForm from "../components/contact-form"
import "../styles/sp-base.css"
import "../styles/packages-hub-page.css"

const groups: { name: string; links: { label: string; href: string }[] }[] = [
  {
    name: "SEO Packages",
    links: [{ label: "View Packages", href: "/packages/seo-packages/" }],
  },
  {
    name: "SEO Packages with Velocity Plan",
    links: [
      { label: "USD", href: "/packages/seo-packages/seo-packages-with-velocity-plan-usd-562/" },
      { label: "GBP", href: "/packages/seo-packages/seo-packages-with-velocity-plan-gbp-741/" },
      { label: "EUR", href: "/packages/seo-packages/seo-packages-with-velocity-plan-eur-893/" },
    ],
  },
  {
    name: "SEO Signature Plan",
    links: [
      { label: "USD", href: "/packages/seo-packages/seo-signature-plan-usd-314/" },
      { label: "GBP", href: "/packages/seo-packages/seo-signature-plan-gbp-627/" },
      { label: "EUR", href: "/packages/seo-packages/seo-signature-plan-eur-458/" },
    ],
  },
  {
    name: "SEO Premium Plan",
    links: [
      { label: "USD", href: "/packages/seo-packages/seo-premium-plan-usd-785/" },
      { label: "GBP", href: "/packages/seo-packages/seo-premium-plan-gbp-219/" },
      { label: "EUR", href: "/packages/seo-packages/seo-premium-plan-eur-946/" },
    ],
  },
  {
    name: "SEO Plan without Velocity Plan",
    links: [
      { label: "USD", href: "/packages/seo-packages/seo-without-velocity-plan-usd-531/" },
      { label: "GBP", href: "/packages/seo-packages/seo-without-velocity-plan-gbp-874/" },
    ],
  },
  {
    name: "PPC Packages",
    links: [{ label: "USD", href: "/packages/ppc-packages-usd-615/" }],
  },
  {
    name: "SMO Packages",
    links: [{ label: "USD", href: "/packages/smo-packages-usd-428/" }],
  },
  {
    name: "Website Packages",
    links: [{ label: "USD", href: "/packages/website-packages-usd-793/" }],
  },
]

const PackagesHubPageContent = () => (
  <div className="sp-page packages-hub-page">
    <section className="sp-container" style={{ paddingTop: 120, paddingBottom: 56, textAlign: "center" }}>
      <span className="sp-tag">Our Packages</span>
      <h1 className="sp-h2">Pick a Plan, See Pricing</h1>
      <p className="sp-lead">Every package, every tier, every currency — all in one place.</p>
    </section>

    <section className="sp-container pkghub-grid-section">
      <div className="pkghub-grid">
        {groups.map((g) => (
          <div key={g.name} className="pkghub-card">
            <h3 className="pkghub-card-title">{g.name}</h3>
            <div className="pkghub-card-links">
              {g.links.map((l) => (
                <Link key={l.href} href={l.href} className="pkghub-link-btn">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="sp-container" style={{ paddingTop: 40, paddingBottom: 100 }}>
      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        <ContactForm
          title="Have Questions About a Package?"
          subtitle="Tell us which plan you're considering — we'll help you pick the right one."
        />
      </div>
    </section>
  </div>
)

const PackagesHubPage = () => (
  <PasswordGate password="2026" storageKey="packages-hub-unlocked">
    <PackagesHubPageContent />
  </PasswordGate>
)

export default PackagesHubPage
