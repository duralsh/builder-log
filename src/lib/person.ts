/** Person structured data. Emitted only on pages that are about Dogus — the
 *  homepage and the CV — so the coin and post pages are not padded with it.
 *  Email is deliberately omitted: it is already a mailto link in the footer,
 *  and repeating it here only helps address harvesters. */
export const PERSON = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dogus Ural",
  url: "https://dogusural.xyz",
  image: "https://dogusural.xyz/dogus-hero.png",
  jobTitle: "Head of AI",
  worksFor: {
    "@type": "Organization",
    name: "AVILOO",
    url: "https://aviloo.com/en",
    description: "Independent battery diagnostics for electric vehicles",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vienna",
    addressRegion: "Wien",
    addressCountry: "AT",
  },
  nationality: { "@type": "Country", name: "Türkiye" },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Middle East Technical University" },
    { "@type": "CollegeOrUniversity", name: "Ankara University" },
  ],
  knowsAbout: [
    "Artificial intelligence",
    "AI strategy and transformation",
    "Agentic workflows",
    "Large language models",
    "MLOps",
    "Product management",
    "Fintech",
    "Embedded systems",
  ],
  knowsLanguage: ["Turkish", "English", "German"],
  sameAs: [
    "https://www.linkedin.com/in/dogus-ural",
    "https://github.com/duralsh",
    "https://x.com/dural_sh",
  ],
} as const;
