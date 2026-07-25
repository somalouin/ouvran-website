import Image from "next/image";

export default function Home() {
  return (
    <div id="products" className="mx-auto max-w-2xl">
      <section className="border-b-2 border-black px-6 py-16">
        <h1 className="text-2xl font-bold uppercase tracking-wide m-0">
          Products
        </h1>
      </section>

      <section className="px-6 py-16">
        <article className="flex flex-col gap-8 sm:flex-row sm:items-start">
          <Image
            src="/driver-01.png"
            alt="Driver headcover placeholder"
            width={200}
            height={150}
            className="shrink-0 border-2 border-[#333] bg-white"
          />

          <div className="flex flex-col gap-4">
            <p className="m-0 text-[#666]">Coming soon</p>

            <button type="button" className="btn btn-disabled w-fit" disabled>
              Join waiting list
            </button>
          </div>
        </article>
      </section>
    </div>
  );
}
