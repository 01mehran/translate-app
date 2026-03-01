// Components;
import CustoomTooltip from './CustoomTooltip';

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
        <CustoomTooltip tooltipText="Speech" />
      </button>

      <button
        disabled={disabled}
        className={`${disabled && 'pointer-events-none'} icons group relative`}
        onClick={handleCopy}
      >
        <FiCopy />
        <CustoomTooltip tooltipText="Copy" />
      </button>
    </article>
  );
}
