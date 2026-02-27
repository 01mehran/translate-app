// Hooks;
import { useEffect, useRef, useState } from 'react';

// Services;
import { translateText } from './services/translationService';

// Components:
import Header from './components/Header';
import SourceLang from './components/SourceLang';
import TargetLang from './components/TargetLang';

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
      setIsLoading(true);

      try {
        const result = await translateText({
          text: 'Hello, how are you?',
          sourceLang: 'en',
          targetLang: 'fr',
        });

        setTranslatedText(result);
        setInputText('Hello, how are you?');
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    initialTranslate();
  }, []);

  const handleTranslate = async () => {
    if (!inputText.trim()) {
      setError('Please enter some text to translate');
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
        <SourceLang
          copyInput={copyInput}
          fromLang={fromLang}
          fromLangTextAreaRef={fromLangTextAreaRef}
          inputText={inputText}
          isLoading={isLoading}
          maxLength={maxLength}
          setError={setError}
          handleTranslate={handleTranslate}
          setFromLang={setFromLang}
          setInputText={setInputText}
        />

        {/* Target Box */}
        <TargetLang
          copyOutput={copyOutput}
          isLoading={isLoading}
          setToLang={setToLang}
          toLang={toLang}
          toLangTextAreaRef={toLangTextAreaRef}
          translatedText={translatedText}
        />

        {error && (
          <span className="absolute -bottom-12 left-1/2 -translate-1/2 bg-linear-to-b from-red-500 to-red-700 bg-clip-text text-sm font-medium tracking-normal text-nowrap text-transparent">
            {error}
          </span>
        )}
      </main>
    </section>
  );
}
