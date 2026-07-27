export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="sticky bottom-0 z-50 shrink-0 border-t-2 border-black bg-white">
      <div className="mx-auto max-w-2xl px-6 py-4 text-center text-base text-[#666]">
        © {year} Ouvran Golf
      </div>
    </footer>
  );
}
