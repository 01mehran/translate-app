// Hooks;
import { useEffect, useRef, useState } from 'react';

// Services;
import { translateText } from './services/translationService';

// Components:
import Header from './components/Header';
import SelectLanguages from './components/SelectLanguages';
import Textarea from './components/Textarea';
import ActionButtons from './components/ActionButtons';
import Spinner from './components/Spinner';

// Icons;
import { GoArrowSwitch } from 'react-icons/go';

export default function Home() {
  const [inputText, setInputText] = useState<string>('');
  const [fromLang, setFromLang] = useState<string>('en');
  const [toLang, setToLang] = useState<string>('fr');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [translatedText, setTranslatedText] = useState<string>('');

  const fromLangTextAreaRef = useRef<HTMLTextAreaElement>(null);
  const toLangTextAreaRef = useRef<HTMLTextAreaElement>(null);

  const maxLength = 500;

  useEffect(() => {
    const initialTranslate = async () => {
      try {
        await translateText({
          text: 'Hello, how are you?',
          sourceLang: 'en',
          targetLang: 'fr',
        });

        setInputText('Hello, how are you?');
      } catch (err) {
        console.error(err);
      }
    };

    initialTranslate();
  }, []);

  const handleTranslate = async () => {
    if (!inputText.trim()) {
      setError('Please enter some text');
      return;
    }

    setIsLoading(true);
    setError(null);
    setTranslatedText('');

    try {
      const result = await translateText({
        text: inputText,
        sourceLang: fromLang,
        targetLang: toLang,
      });

      setTranslatedText(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      console.error('Translation failed', err);
    } finally {
      setIsLoading(false);
    }
  };

  const copyInput = () => {
    if (fromLangTextAreaRef.current) {
      fromLangTextAreaRef.current.select();
      navigator.clipboard.writeText(fromLangTextAreaRef.current.value);
    }
  };

  const copyOutput = () => {
    if (toLangTextAreaRef.current) {
      toLangTextAreaRef.current.select();
      navigator.clipboard.writeText(toLangTextAreaRef.current.value);
    }
  };

  return (
    <section className="to-purple relative top-1/2 h-dvh bg-linear-to-b from-black">
      {/* bg-image */}
      <div className="bg-fill h-1/3 bg-[url(./assets/images/mobile-hero-img.jpg)] bg-cover bg-top bg-no-repeat md:h-1/2 md:bg-[url(./assets/images/desktop-hero-img.jpg)] md:bg-cover"></div>

      <Header />

      <main className="medium:flex-row absolute top-1/2 left-1/2 flex w-full max-w-[95vw] -translate-1/2 flex-col gap-5">
        {/* Source Box */}
        <div className="bg-primary-100 border-grey-100 medium:h-84 relative h-54 w-full rounded-2xl border px-4 py-4 sm:px-8 sm:py-6">
          <header className="text-grey-100 border-b-grey-200 flex items-center space-x-3 border-b-[1.5px] pb-4 text-sm font-semibold text-nowrap sm:space-x-4">
            <p className="cursor-pointer capitalize">Detect Language</p>
            <p className="lan">english</p>
            <p className="lan">spanish</p>

            <SelectLanguages onChange={setFromLang} value={fromLang} />
          </header>

          <Textarea
            ref={fromLangTextAreaRef}
            value={inputText}
            onChange={setInputText}
            isLoading={isLoading}
            placeholder="Write some text"
            maxLength={maxLength}
            clearError={setError}
          />

          <footer className="medium:bottom-5 absolute bottom-2 left-0 flex w-full items-end justify-between px-4 sm:px-8">
            <ActionButtons handleCopy={copyInput} disabled={isLoading} />

            <article className="medium:gap-4 flex flex-col-reverse items-end gap-2">
              <button
                disabled={isLoading}
                onClick={handleTranslate}
                className={` ${isLoading && 'pointer-events-none cursor-not-allowed opacity-80'} bg-sky tracking-w icons cursor-pointer rounded-md border border-gray-300 px-6 py-1.5 font-medium text-white sm:px-10 sm:py-2`}
              >
                {isLoading ? <Spinner /> : 'Translate'}
              </button>
              <div className="text-grey-100 text-[12px] font-medium">
                <span
                  className={`${inputText.length === maxLength && 'animate-ping text-red-800'}`}
                >
                  {inputText.length}
                </span>
                /<span>{maxLength}</span>
              </div>
            </article>
          </footer>
        </div>

        {/* Target Box */}
        <div className="bg-primary-100 border-grey-100 medium:h-84 relative h-54 w-full rounded-2xl border px-4 py-4 sm:px-8 sm:py-6">
          <header className="text-grey-100 border-b-grey-200 flex items-center justify-between border-b-[1.5px] pb-4 text-sm font-semibold text-nowrap">
            <div className="flex space-x-3 sm:space-x-4">
              <p className="lan">english</p>
              <p className="lan">spanish</p>
              <SelectLanguages onChange={setToLang} value={toLang} />
            </div>

            <div className="border-grey-200 cursor-pointer rounded-xl border-2 px-2 py-1 text-lg transition-all duration-300 hover:scale-105">
              <GoArrowSwitch />
            </div>
          </header>

          <Textarea
            ref={toLangTextAreaRef}
            value={translatedText}
            readOnly
            placeholder="Translation"
          />

          <footer className="medium:bottom-5 absolute bottom-2 left-0 flex w-full items-end justify-between px-4 sm:px-8">
            <ActionButtons handleCopy={copyOutput} disabled={isLoading} />
          </footer>
        </div>

        {error && (
          <span className="absolute -bottom-12 left-1/2 -translate-1/2 bg-linear-to-b from-red-500 to-red-700 bg-clip-text text-sm font-medium tracking-normal text-nowrap text-transparent">
            {error}
          </span>
        )}
      </main>
    </section>
  );
}
