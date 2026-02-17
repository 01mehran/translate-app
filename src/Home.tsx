export default function Home() {
  return (
    <section className="to-purple relative top-1/2 h-dvh bg-linear-to-b from-black">
      {/* bg-image */}
      <div className="bg-fill h-1/3 bg-[url(./assets/images/mobile-hero-img.jpg)] bg-cover bg-top bg-no-repeat md:h-1/2 md:bg-[url(./assets/images/desktop-hero-img.jpg)] md:bg-cover"></div>

      <header className="medium:top-20 absolute top-15 left-1/2 -translate-1/2 transform">
        <h1 className="medium:text-5xl text-3xl font-bold tracking-wide text-nowrap text-white/90">
          Translate{' '}
          <span className="bg-linear-to-r from-[#ba74ca] to-[#9c73e7] bg-clip-text tracking-normal text-transparent">
            App
          </span>
        </h1>
      </header>

      <main className="medium:flex-row absolute top-1/2 left-1/2 flex w-full max-w-[95vw] -translate-1/2 flex-col gap-5">
        {/* Detect Language Box */}
        <div className="bg-primary-100 border-grey-100 medium:h-84 h-54 w-full rounded-2xl border px-4 py-4 sm:px-8 sm:py-6">
          <header className="text-grey-100 border-b-grey-200 flex items-center space-x-3 border-b-[1.5px] pb-4 text-sm font-semibold text-nowrap sm:space-x-4">
            <p className="cursor-pointer capitalize">Detect Language</p>
            <p className="lan">english</p>
            <p className="lan">spanish</p>
            <select className="cursor-pointer border-0 outline-0">
              <option value="Spanish">Spanish</option>
            </select>
          </header>

          <textarea className="text-md h-full w-full resize-none border-0 pt-3 font-medium tracking-wide text-white outline-0">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique,
            itaque.
          </textarea>
        </div>
      </main>
    </section>
  );
}
