export default function Home() {
  return (
    <section className="to-purple relative top-1/2 h-dvh bg-linear-to-b from-black">
      {/* bg-image */}
      <div className="bg-fill h-1/3 bg-[url(./assets/images/mobile-hero-img.jpg)] bg-cover bg-top bg-no-repeat md:h-1/2 md:bg-[url(./assets/images/desktop-hero-img.jpg)] md:bg-cover"></div>

      <header className="absolute top-20 left-1/2 -translate-1/2 transform md:top-40">
        <h1 className="text-3xl font-bold tracking-wide text-white/90 md:text-5xl">
          Translate{' '}
          <span className="bg-linear-to-r from-[#ba74ca] to-[#9c73e7] bg-clip-text tracking-normal text-transparent">
            App
          </span>
        </h1>
      </header>
    </section>
  );
}
