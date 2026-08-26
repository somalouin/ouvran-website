import Image from "next/image";

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-2xl">
      <section className="content-title-wrap px-6 pt-6 pb-2">
        <h1 className="content-title">Products</h1>
      </section>

      <section className="px-6 py-8">
        <article className="flex flex-col gap-8 sm:flex-row sm:items-start">
          <Image
            src="/driver-01.png"
            alt="Driver headcover placeholder"
            width={200}
            height={150}
            className="shrink-0 border-2 border-[#333] bg-white"
          />

          <div className="flex flex-col gap-4">
            <p className="m-0 text-[#666]">Driver Headcover #1</p>

            <button type="button" className="btn btn-disabled w-fit" disabled>
              Join waiting list
            </button>
          </div>
        </article>
      </section>
    </div>
  );
}
