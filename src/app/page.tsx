export default function Home() {
  return (
    <div className="mx-auto max-w-2xl px-6">
      {/* Hero */}
      <section className="py-24 text-center">
        <p className="retro-label mb-6">Est. MMXXVI</p>
        <h1 className="font-serif text-4xl font-normal italic leading-tight text-forest sm:text-5xl">
          Craft for the course.
        </h1>
        <hr className="retro-rule mx-auto my-10 w-24" />
        <p className="mx-auto max-w-md text-base leading-relaxed text-muted">
          Golf equipment and apparel made with restraint. Nothing extra. Nothing
          missing.
        </p>
      </section>

      {/* About */}
      <section id="about" className="border-t border-rule py-20">
        <p className="retro-label mb-8">About</p>
        <div className="space-y-6 text-base leading-relaxed text-ink">
          <p>
            Ouvran Golf is a small brand built on a simple idea: the best gear
            disappears on the course. No logos shouting. No trends chasing. Just
            honest materials and quiet design.
          </p>
          <p>
            We make a few things, and we make them well. Each piece is
            considered, tested, and refined until it earns a place in your bag.
          </p>
        </div>
      </section>

      {/* Collection */}
      <section id="collection" className="border-t border-rule py-20">
        <p className="retro-label mb-8">Collection</p>
        <div className="space-y-0">
          {[
            {
              name: "The Sunday Bag",
              detail: "Seven clubs. One round. Carry only what you need.",
              status: "Coming soon",
            },
            {
              name: "Course Cap",
              detail: "Unstructured cotton twill. Low profile. No branding.",
              status: "Coming soon",
            },
            {
              name: "Tee Wallet",
              detail: "Waxed canvas. Holds a dozen. Fits any pocket.",
              status: "Coming soon",
            },
          ].map((item) => (
            <article
              key={item.name}
              className="flex flex-col gap-2 border-b border-rule py-8 sm:flex-row sm:items-baseline sm:justify-between"
            >
              <div>
                <h2 className="font-serif text-lg text-forest">{item.name}</h2>
                <p className="mt-1 text-sm text-muted">{item.detail}</p>
              </div>
              <span className="retro-label shrink-0 text-[0.55rem] text-sage">
                {item.status}
              </span>
            </article>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-rule py-20">
        <p className="retro-label mb-8">Contact</p>
        <p className="text-base leading-relaxed text-muted">
          Questions, wholesale inquiries, or just to say hello —
        </p>
        <a
          href="mailto:hello@ouvrangolf.com"
          className="mt-4 inline-block font-serif text-lg text-forest underline decoration-rule underline-offset-4 transition-colors hover:text-sage"
        >
          hello@ouvrangolf.com
        </a>
      </section>
    </div>
  );
}
