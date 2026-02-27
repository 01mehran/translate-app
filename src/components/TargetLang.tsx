// Components;
import SelectLanguages from './SelectLanguages';
import Textarea from './Textarea';
import ActionButtons from './ActionButtons';

// Types;
import type { ITargetLangProps } from '../types/translation.types';

// Icons;
import { GoArrowSwitch } from 'react-icons/go';

export default function TargetLang({
  setToLang,
  toLang,
  toLangTextAreaRef,
  translatedText,
  copyOutput,
  isLoading,
}: ITargetLangProps) {
  return (
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
  );
}
