import Image from "next/image";

const marqueeItems = Array.from({ length: 8 }, (_, index) => index);

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="sticky bottom-0 z-50 shrink-0 bg-white">
      <div
        className="border-t-2 border-black bg-white py-2 overflow-hidden"
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

      <div className="border-t-2 border-black px-6 py-2 text-center text-base text-[#666]">
        © {year} Ouvran Golf
      </div>
    </footer>
  );
}
