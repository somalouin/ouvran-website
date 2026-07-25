import Image from "next/image";
import Link from "next/link";

const navItems = [{ href: "#products", label: "Products" }];

export function Header() {
  return (
    <header className="border-b-2 border-black bg-white">
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 px-6 py-5">
        <Link
          href="/"
          className="flex items-center justify-self-start no-underline text-inherit"
        >
          <Image
            src="/text.png"
            alt="Ouvran Golf"
            width={200}
            height={100}
            priority
          />
        </Link>

        <Link
          href="/"
          className="justify-self-center no-underline"
          aria-label="Ouvran Golf home"
        >
          <Image
            src="/icon-header.svg"
            alt=""
            width={64}
            height={64}
            priority
          />
        </Link>

        <nav aria-label="Main navigation" className="justify-self-end">
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
