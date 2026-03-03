import { useState } from 'react';
import { languages } from '../data/languages';
import type { ILanguages } from '../types/translation.types';

export default function CustomSelectOption() {
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('English');

  const handleOpenSelect = () => {
    setIsSelectOpen((prev) => !prev);
  };

  const handleOpenSelectLang = (lang: ILanguages) => {
    setSelectedLang(lang.name);
    setIsSelectOpen((prev) => !prev);
  };

  return (
    <section className="">
      <div className="relative flex w-20 flex-col gap-3">
        <div
          className="flex cursor-pointer items-center justify-between px-1 py-1 text-[13px]"
          onClick={handleOpenSelect}
        >
          <article>{selectedLang}</article>
          <article
            className={`${isSelectOpen && 'rotate-180'} transition-all duration-200`}
          >
            &darr;
          </article>
        </div>

        {isSelectOpen && (
          <ul className="absolute top-10 flex h-46 w-full cursor-pointer flex-col gap-2 overflow-scroll rounded-md border bg-black/10 px-1 py-1 text-sm text-[13px] backdrop-blur-2xl">
            {languages.map((lang) => (
              <li onClick={() => handleOpenSelectLang(lang)} key={lang.code}>
                {lang.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
