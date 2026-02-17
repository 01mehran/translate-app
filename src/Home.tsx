export default function Home() {
  return (
    <section className="bg-linear-to-b from-black to-purple h-dvh relative top-1/2">
      {/* bg-image */}
      <div className="md:bg-[url(./assets/images/desktop-hero-img.jpg)] bg-[url(./assets/images/mobile-hero-img.jpg)] bg-fill md:bg-cover bg-no-repeat md:h-1/2 h-1/3 bg-cover bg-top"></div>

      <header className=" absolute top-20 left-1/2 transform -translate-1/2 md:top-40">
        <h1 className="text-3xl text-white/90 tracking-wide font-bold md:text-5xl">
          Translate{" "}
          <span className="bg-linear-to-r from-[#ba74ca] to-[#9c73e7] bg-clip-text text-transparent tracking-normal">
            App
          </span>
        </h1>
      </header>
    </section>
  );
}
// #ba74ca
// #a886e8
