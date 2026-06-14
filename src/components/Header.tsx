import Image from "next/image";
import Link from "next/link";

const navItems = [{ href: "#products", label: "Products" }];

export function Header() {
  return (
    <header>
      <div className="mx-auto flex max-w-2xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="flex items-center gap-3 no-underline text-inherit"
        >
          <Image
            src="/text.png"
            alt="Ouvran Golf logo placeholder"
            width={200}
            height={100}
            priority
          />
        </Link>

        <nav aria-label="Main navigation">
          <ul className="flex gap-3 list-none m-0 p-0">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="btn">
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
