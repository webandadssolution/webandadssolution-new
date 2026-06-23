"use client"

import { useState } from "react"
import Image from "next/image"
import ContactForm from "../components/contact-form"
import "../styles/packages-landing-page.css"

const packages = [
  {
    title: "SEO Packages",
    image: "https://placehold.co/600x400/0a0a0a/f06820?text=SEO+Packages",
    description:
      "Boost your online visibility and organic rankings with our SEO packages tailored to your business goals.",
    service: "Search Engine Optimization (SEO)",
  },
  {
    title: "PPC Packages",
    image: "https://placehold.co/600x400/0a0a0a/f06820?text=PPC+Packages",
    description:
      "Drive instant traffic and qualified leads through high-converting PPC advertising campaigns.",
    service: "Pay-Per-Click (PPC) Advertising",
  },
  {
    title: "SMO Packages",
    image: "https://placehold.co/600x400/0a0a0a/f06820?text=SMO+Packages",
    description:
      "Grow your social presence and engage your audience with strategic social media optimization.",
    service: "Social Media Optimization (SMO)",
  },
  {
    title: "Website Packages",
    image: "https://placehold.co/600x400/0a0a0a/f06820?text=Website+Packages",
    description:
      "Professional website design and development solutions for businesses of all sizes.",
    service: "Website Development",
  },
]

export default function PackagesLandingPage() {
  const [openTitle, setOpenTitle] = useState<string | null>(null)
  const activePackage = packages.find((p) => p.title === openTitle)

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="mb-10 text-center text-4xl font-bold text-white">
        Packages
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {packages.map((item) => (
          <div
            key={item.title}
            className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:shadow-lg"
          >
            <div className="relative h-56 w-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <h2 className="pkl-card-title mb-3 text-xl font-semibold">
                {item.title}
              </h2>

              <p className="pkl-card-desc mb-5 text-sm">
                {item.description}
              </p>

              <button
                type="button"
                onClick={() => setOpenTitle(item.title)}
                className="block w-full rounded-lg bg-black px-4 py-3 text-center text-white transition hover:opacity-90"
              >
                View Plans
              </button>
            </div>
          </div>
        ))}
      </div>

      {activePackage && (
        <div className="pkl-modal-backdrop" onClick={() => setOpenTitle(null)}>
          <div className="pkl-modal-box" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="pkl-modal-close"
              onClick={() => setOpenTitle(null)}
              aria-label="Close"
            >
              ✕
            </button>
            <ContactForm
              title={`Get a Quote — ${activePackage.title}`}
              subtitle="Tell us about your goals and budget — we'll recommend the right plan for you."
              defaultService={activePackage.service}
            />
          </div>
        </div>
      )}
    </main>
  )
}
