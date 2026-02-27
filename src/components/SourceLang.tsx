// Components;
import ActionButtons from './ActionButtons';
import SelectLanguages from './SelectLanguages';
import Spinner from './Spinner';
import Textarea from './Textarea';

// Types;
import type { ISourceBoxProps } from '../types/translation.types';

function SourceLang({
  setFromLang,
  fromLang,
  fromLangTextAreaRef,
  inputText,
  setInputText,
  isLoading,
  maxLength,
  setError,
  copyInput,
  handleTranslate,
}: ISourceBoxProps) {
  return (
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
  );
}

export default SourceLang;
