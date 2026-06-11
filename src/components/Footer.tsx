export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-[#333] bg-white mt-auto">
      <div className="mx-auto max-w-2xl px-6 py-4 text-center text-[11px] text-[#666]">
        © {year} Ouvran Golf
      </div>
    </footer>
  );
}
