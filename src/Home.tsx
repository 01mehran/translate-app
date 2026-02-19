// Icons;
import { FiCopy } from 'react-icons/fi';
import { GoArrowSwitch } from 'react-icons/go';
import { HiSpeakerWave } from 'react-icons/hi2';

// Languages;
import { languages } from './data/languages';
import { useRef } from 'react';

export default function Home() {
  const fromLangTextAreaRef = useRef<HTMLTextAreaElement>(null);

  const copyToClipboard = async () => {
    if (!fromLangTextAreaRef.current) return;

    navigator.clipboard.writeText(fromLangTextAreaRef.current.value);
  };

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
        <div className="bg-primary-100 border-grey-100 medium:h-84 relative h-54 w-full rounded-2xl border px-4 py-4 sm:px-8 sm:py-6">
          <header className="text-grey-100 border-b-grey-200 flex items-center space-x-3 border-b-[1.5px] pb-4 text-sm font-semibold text-nowrap sm:space-x-4">
            <p className="cursor-pointer capitalize">Detect Language</p>
            <p className="lan">english</p>
            <p className="lan">spanish</p>
            <select className="cursor-pointer border-0 outline-0">
              {languages.map((lan) => (
                <option key={lan.code} value={lan.name}>
                  {lan.name}
                </option>
              ))}
            </select>
          </header>

          <textarea
            ref={fromLangTextAreaRef}
            className="text-md h-full w-full resize-none border-0 pt-3 font-medium tracking-wide text-white outline-0"
          ></textarea>

          <footer className="medium:bottom-5 absolute bottom-2 left-0 flex w-full items-end justify-between px-4 sm:px-8">
            <article className="flex items-center space-x-2">
              <span className="icons transition-all duration-300 hover:scale-105">
                <HiSpeakerWave />
              </span>
              <span
                className="icons transition-all duration-300 hover:scale-105"
                onClick={copyToClipboard}
              >
                <FiCopy />
              </span>
            </article>

            <article className="medium:gap-4 flex flex-col-reverse items-end gap-2">
              <button className="bg-sky tracking-w icons cursor-pointer rounded-md border border-gray-300 px-6 py-1.5 font-medium text-white sm:px-10 sm:py-2">
                Translate
              </button>
              <div className="text-grey-100 text-[12px] font-medium">
                <span>19</span>/<span>500</span>
              </div>
            </article>
          </footer>
        </div>

        {/* Transleted Box */}
        <div className="bg-primary-100 border-grey-100 medium:h-84 relative h-54 w-full rounded-2xl border px-4 py-4 sm:px-8 sm:py-6">
          <header className="text-grey-100 border-b-grey-200 flex items-center justify-between border-b-[1.5px] pb-4 text-sm font-semibold text-nowrap">
            <div className="flex space-x-3 sm:space-x-4">
              <p className="lan">english</p>
              <p className="lan">spanish</p>
              <select className="cursor-pointer border-0 outline-0">
                {languages.map((lan) => (
                  <option key={lan.code} value={lan.name}>
                    {lan.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="border-grey-200 cursor-pointer rounded-xl border-2 px-2 py-1 text-lg transition-all duration-300 hover:scale-105">
              <GoArrowSwitch />
            </div>
          </header>

          <textarea className="text-md h-full w-full resize-none border-0 pt-3 font-medium tracking-wide text-white outline-0"></textarea>

          <footer className="medium:bottom-5 absolute bottom-2 left-0 flex w-full items-end justify-between px-4 sm:px-8">
            <article className="flex items-center space-x-2">
              <span className="icons transition-all duration-300 hover:scale-105">
                <HiSpeakerWave />
              </span>
              <span className="icons transition-all duration-300 hover:scale-105">
                <FiCopy />
              </span>
            </article>
          </footer>
        </div>
      </main>
    </section>
  );
}
