import Image from "next/image";
import Link from "next/link";

const navItems = [
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
];

const marqueeItems = Array.from({ length: 8 }, (_, index) => index);

export function Header() {
  return (
    <div className="sticky top-0 z-50 shrink-0 bg-white">
      <header className="border-b-2 border-black bg-white">
        <div className="flex items-center justify-between gap-4 px-6 py-5">
          <Link
            href="/products"
            className="flex items-center no-underline text-inherit"
          >
            <Image
              src="/text.png"
              alt="Ouvran Golf"
              width={130}
              height={65}
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

      <div
        className="border-b-2 border-black bg-white py-3 overflow-hidden"
        aria-hidden
      >
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={index} className="marquee-item">
              <Image
                src="/icon-header.svg"
                alt=""
                width={36}
                height={36}
                className="shrink-0"
              />
              <span className="lowercase">ouvran golf</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
