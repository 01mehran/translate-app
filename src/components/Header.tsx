export default function Header() {
  return (
    <header className="medium:top-20 absolute top-15 left-1/2 -translate-1/2 transform">
      <h1 className="medium:text-5xl text-3xl font-bold tracking-wide text-nowrap text-white/90">
        Translate{' '}
        <span className="bg-linear-to-r from-[#ba74ca] to-[#9c73e7] bg-clip-text tracking-normal text-transparent">
          App
        </span>
      </h1>
    </header>
  );
}
