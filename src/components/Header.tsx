import Image from "next/image";
import Link from "next/link";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 shrink-0 border-b-2 border-black bg-white">
      <div className="flex items-center justify-between gap-4 px-6 py-5">
        <Link
          href="/products"
          className="flex items-center no-underline text-inherit"
        >
          <Image
            src="/text.png"
            alt="Ouvran Golf"
            width={160}
            height={80}
            priority
          />
        </Link>

        <nav aria-label="Main navigation">
          <ul className="flex gap-3 list-none m-0 p-0">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="btn">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
