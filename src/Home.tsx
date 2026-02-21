// Icons;
import { FiCopy } from 'react-icons/fi';
import { GoArrowSwitch } from 'react-icons/go';
import { HiSpeakerWave } from 'react-icons/hi2';
import { PiSpinnerGapBold } from 'react-icons/pi';

// Languages;
import { languages } from './data/languages';
import { useRef, useState } from 'react';
import axios from 'axios';

interface TranslationResponse {
  responseData: {
    translatedText: string;
    match?: number;
  };
  responseStatus: number;
  responseDetails?: string;
  matches?: any[];
}

export default function Home() {
  const fromLangTextAreaRef = useRef<HTMLTextAreaElement>(null);
  const toLangTextAreaRef = useRef<HTMLTextAreaElement>(null);

  const [inputText, setInputText] = useState<string>('');
  const [fromLang, setFromLang] = useState<string>('en');
  const [toLang, setToLang] = useState<string>('fa');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [translatedText, setTranslatedText] = useState<string>('');

  const copyToClipboard = () => {
    if (!fromLangTextAreaRef.current) return;

    navigator.clipboard.writeText(fromLangTextAreaRef.current.value);
  };

  const copyToClipboard2 = () => {
    if (!fromLangTextAreaRef.current) return;

    navigator.clipboard.writeText(toLangTextAreaRef.current!.value);
  };

  const handleTranslate = async () => {
    if (!inputText.trim()) {
      setError('Please write something');
    }

    setIsLoading(true);
    setError(null);
    try {
      const { data } = await axios<TranslationResponse>(
        `https://api.mymemory.translated.net/get?`,
        {
          params: {
            q: inputText,
            langpair: `${fromLang}|${toLang}`,
            mt: 1,
          },

          headers: {
            Accept: 'application/json',
          },
        },
      );
      if (data.responseStatus === 200) {
        setTranslatedText(data.responseData.translatedText);
      } else {
        throw new Error(`${data.responseDetails}` || 'translate faild');
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.code === 'ECONNABORTED') {
          setError('try again');
        } else if (err.response) {
          setError(`server error ${err.response.status}`);
        } else if (err.request) {
          setError('network error!');
        } else {
          setError(`error: ${err.message}`);
        }
      } else {
        setError('unknown error');
      }
      console.error('Translation error:', err);
    } finally {
      setIsLoading(false);
    }
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
            <select
              onChange={(e) => setFromLang(e.target.value)}
              value={fromLang}
              className="cursor-pointer border-0 outline-0"
            >
              {languages.map((lan) => (
                <option key={lan.code} value={lan.code}>
                  {lan.name}
                </option>
              ))}
            </select>
          </header>

          <textarea
            ref={fromLangTextAreaRef}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
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
              <button
                disabled={isLoading}
                onClick={handleTranslate}
                className={` ${isLoading && 'pointer-events-none cursor-not-allowed opacity-80'} bg-sky tracking-w icons cursor-pointer rounded-md border border-gray-300 px-6 py-1.5 font-medium text-white sm:px-10 sm:py-2`}
              >
                {isLoading ? (
                  <PiSpinnerGapBold className="animate-spin" />
                ) : (
                  'Translate'
                )}
              </button>
              <div className="text-grey-100 text-[12px] font-medium">
                <span>19</span>/<span>500</span>
              </div>
            </article>

            <span className="absolute bottom-1 left-34 text-lg font-medium text-red-600">
              {error}
            </span>
          </footer>
        </div>

        {/* Transleted Box */}
        <div className="bg-primary-100 border-grey-100 medium:h-84 relative h-54 w-full rounded-2xl border px-4 py-4 sm:px-8 sm:py-6">
          <header className="text-grey-100 border-b-grey-200 flex items-center justify-between border-b-[1.5px] pb-4 text-sm font-semibold text-nowrap">
            <div className="flex space-x-3 sm:space-x-4">
              <p className="lan">english</p>
              <p className="lan">spanish</p>
              <select
                onChange={(e) => setToLang(e.target.value)}
                value={toLang}
                className="cursor-pointer border-0 outline-0"
              >
                {languages.map((lan) => (
                  <option key={lan.code} value={lan.code}>
                    {lan.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="border-grey-200 cursor-pointer rounded-xl border-2 px-2 py-1 text-lg transition-all duration-300 hover:scale-105">
              <GoArrowSwitch />
            </div>
          </header>

          <textarea
            ref={toLangTextAreaRef}
            className="text-md h-full w-full resize-none border-0 pt-3 font-medium tracking-wide text-white outline-0"
            defaultValue={translatedText}
          ></textarea>

          <footer className="medium:bottom-5 absolute bottom-2 left-0 flex w-full items-end justify-between px-4 sm:px-8">
            <article className="flex items-center space-x-2">
              <span className="icons transition-all duration-300 hover:scale-105">
                <HiSpeakerWave />
              </span>
              <span
                onClick={copyToClipboard2}
                className="icons transition-all duration-300 hover:scale-105"
              >
                <FiCopy />
              </span>
            </article>
          </footer>
        </div>
      </main>
    </section>
  );
}
