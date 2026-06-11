export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-rule mt-auto">
      <div className="mx-auto max-w-2xl px-6 py-10">
        <hr className="retro-rule mb-8" />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-serif text-sm tracking-[0.3em] uppercase text-forest">
              Ouvran Golf
            </p>
            <p className="retro-label mt-2 text-[0.55rem]">
              Est. MMXXVI · Craft for the course
            </p>
          </div>

          <p className="retro-label text-[0.55rem]">
            © {year} Ouvran Golf. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
