import Link from "next/link";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#collection", label: "Collection" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="border-b border-rule bg-cream/90 backdrop-blur-sm sticky top-0 z-40">
      <div className="mx-auto flex max-w-2xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="group flex flex-col gap-0.5 no-underline text-ink"
        >
          <span className="font-serif text-lg tracking-[0.35em] uppercase">
            Ouvran
          </span>
          <span className="retro-label text-[0.55rem] tracking-[0.4em] text-sage group-hover:text-forest transition-colors">
            Golf
          </span>
        </Link>

        <nav aria-label="Main navigation">
          <ul className="flex gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="retro-label text-[0.6rem] text-muted hover:text-forest transition-colors no-underline"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
