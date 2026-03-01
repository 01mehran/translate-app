// Icons;
import { FiCopy } from 'react-icons/fi';
import { HiSpeakerWave } from 'react-icons/hi2';

// Types;
import type { IActionButtonsProps } from '../types/translation.types';

export default function ActionButtons({
  handleCopy,
  disabled,
}: IActionButtonsProps) {
  return (
    <article className="flex items-center space-x-2">
      <button
        disabled={disabled}
        className={`${disabled && 'pointer-events-none'} icons group relative`}
      >
        <HiSpeakerWave />
      </button>

      <button
        disabled={disabled}
        className={`${disabled && 'pointer-events-none'} icons group relative`}
        onClick={handleCopy}
      >
        <FiCopy />
        <span className="bg-grey-100 before:bg-grey-100 group:flex absolute -top-5 left-1/2 hidden -translate-1/2 items-center justify-center rounded-2xl border-gray-200 px-2 py-px text-[11px] tracking-wide text-white group-hover:block before:absolute before:-bottom-0.5 before:left-1/2 before:size-1.5 before:-translate-x-1/2 before:rotate-45 before:text-white before:content-['']">
          Copy
        </span>
      </button>
    </article>
  );
}
