import Image from "next/image";

export default function Home() {
  return (
    <>
      <div id="about" className="mx-auto max-w-2xl">
        <section className="border-b-2 border-black px-6 py-16">
          <h1 className="text-2xl font-bold uppercase tracking-wide m-0">
            About
          </h1>
        </section>

        <section className="border-b-2 border-black px-6 py-16">
          <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="mt-4 mb-0">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </section>
      </div>

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
    </>
  );
}
