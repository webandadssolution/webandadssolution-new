export type Location = {
  name: string
  navLabel: string
  href: string
  image: string
  imageAlt: string
  description: string
  // href of the parent location; child pages show in the header as a sub-dropdown
  // under their parent instead of at the top level.
  parent?: string
}

// Single source for every live location page — drives the header's Locations
// dropdown, the /locations hub cards, and the "Other Locations We Serve" section.
// Add new pages here.
export const locations: Location[] = [
  {
    name: "United States",
    navLabel: "USA",
    href: "/united-states",
    image: "/images/digital-marketing-agency-in-usa.webp",
    imageAlt: "Digital marketing agency in USA - Web & Ads Solution",
    description:
      "Web & Ads Solution helps businesses across the United States grow with SEO, PPC, and social media marketing built around measurable ROI not vanity metrics.",
  },
  {
    name: "Missouri",
    navLabel: "Missouri",
    href: "/missouri",
    parent: "/united-states",
    image: "/images/digital-marketing-missouri.webp",
    imageAlt: "Digital marketing agency in Missouri - Web & Ads Solution",
    description:
      "Web & Ads Solution is a Missouri digital marketing agency helping local businesses grow with SEO, PPC, web design, and AI-driven visibility strategies.",
  },
  {
    name: "Kansas City, MO",
    navLabel: "Kansas City",
    href: "/kansas-city",
    parent: "/united-states",
    image: "/images/digital-marketing-kansas-city.webp",
    imageAlt: "Digital marketing agency Kansas City - Web & Ads Solution",
    description:
      "Web & Ads Solution is a full service digital marketing agency Kansas City businesses turn to for SEO, PPC, web design, and AI search visibility.",
  },
  {
    name: "St. Louis, MO",
    navLabel: "St. Louis",
    href: "/st-louis",
    parent: "/united-states",
    image: "/images/digital-marketing-st-louis.webp",
    imageAlt: "Digital marketing company St. Louis - Web & Ads Solution",
    description:
      "Web & Ads Solution is a digital marketing agency St. Louis businesses hire for SEO, PPC, social media, web design, and AI search visibility.",
  },
]
